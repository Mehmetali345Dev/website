<template>
  <div
    v-if="
      finished === false ||
      !getStatusDetails ||
      Object.keys(lanyard).length === 0
    "
    class="w-6/12 h-[17.5px]"
  >
    Unable to get status
  </div>

  <div
    v-else
    class="
      flex
      items-center
      space-x-2
      text-gray-700
      rounded-md
      dark:text-gray-300
    "
  >
    <div :class="`h-3 w-3 rounded-full flex-shrink-0 ${getDiscordStatus}`" />
    <div
      class="text-sm hidden md:flex leading-tight truncate"
      :title="getStatusDetails"
    >
      {{ getStatusDetails }}
    </div>
    <!-- Mobile status -->
    <div
      class="text-sm md:hidden leading-tight truncate"
      :title="getStatusDetails"
    >
      {{ getStatusDetailsMob }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finished: false,
      lanyard: {},
      socket: null,
    };
  },
  computed: {
    /**
     * Returns status detail as string.
     * @returns {string}
     */
    getStatusDetails() {
      const lanyard = this.lanyard;
      if (!lanyard) return {};

      const filtered =
        lanyard.activities?.filter((activity) => activity.type !== 4)?.pop() ||
        {};

      // Offline
      if (this.lanyard?.discord_status === "offline") return "Offline";
      // Visual Studio Code
      else if (filtered.name === "Visual Studio Code") {
        const replaced =
          filtered.state?.replace("📁 ", "")?.split(" | ")?.[0] || "a file";
        return `Editing ${replaced} in Visual Studio Code`;
      } else if (
        filtered.name === "Spotify" &&
        filtered.details &&
        filtered.state
      ) {
        const song = filtered.details || "something";
        return `Listening to ${song} on Spotify`;
      }
      // YouTube
      else if (
        filtered.name === "YouTube" &&
        filtered.details &&
        filtered.state
      ) {
        const name = filtered.details || "a video";
        return `Watching ${name} on YouTube`;
      }
            else if (
        filtered.name === "Sleeping" &&
        filtered.details &&
        filtered.state
      ) {
        return `Sleeping`;
      }
      else if (filtered.name === "Netflix" &&
        filtered.details &&
        filtered.state)
      {
       const name = filtered.details || "something";
      return `Watching  ${name} on Netflix`;
      }
      // Default values
      else
        switch (filtered.name) {
          default:
            return "Online";
        }
    },
    /**
     * Returns Discord status colors.
     * @returns {string} Tailwind color classes
     */
    getStatusDetailsMob() {
      const lanyard = this.lanyard;
      if (!lanyard) return {};
      switch (this.lanyard.discord_status) {
        case "offline":
          return "Offline";
        default:
          return "Online";
      }
    },

    getDiscordStatus() {
      switch (this.lanyard.discord_status) {
        case "online":
          return "bg-green-500";
        case "idle":
          return "bg-yellow-500";
        case "dnd":
          return "bg-red-500";
        default:
          return "bg-gray-500 dark:bg-gray-200";
      }
    },
  },
  beforeDestroy() {
    this.socket?.close();
  },
  mounted() {
    /**
     * Connect to Lanyard Socket API, send heartbeat every 30 seconds and replace the Vue data value with the message
     */
    this.socket = new WebSocket("wss://api.lanyard.rest/socket");

    this.socket.addEventListener("open", () => {
      // Subscribe to ID
      this.socket.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: "404360912460578816",
          },
        })
      );

      // Send heartbeat every 30 seconds
      setInterval(() => {
        this.socket.send(
          JSON.stringify({
            op: 3,
          })
        );
      }, 30000);
    });

    this.socket.addEventListener("message", ({ data }) => {
      const { t: type, d: status } = JSON.parse(data);

      if (type === "INIT_STATE" || type === "PRESENCE_UPDATE")
        this.lanyard = status || {};

      this.finished = true;
    });
  },
};
</script>

<style>
</style>
