<template>
  <div
    v-if="
      finished === false ||
      !getStatusDetails ||
      Object.keys(lanyard).length === 0
    "
    class="bg-gray-900 bg-opacity-30 w-full flex animate-pulse p-4 rounded-md"
  >
    <img class="w-16 h-16 rounded-md mr-4 bg-gray-900 outline-none" alt="" />
    <div class="flex flex-col justify-center space-y-3">
      <h1 class="h-4 w-16 bg-gray-900"></h1>
      <h1 class="h-4 w-28 bg-gray-900"></h1>
    </div>
  </div>

  <div v-else class="w-full">
    <div class="bg-gray-900 grid bg-opacity-30 flex p-4 rounded-md">
      <div class="flex space-x-2 items-center">
        <img
          :src="`https://cdn.discordapp.com/avatars/404360912460578816/${this.lanyard.discord_user.avatar}`"
          class="w-9 h-9 rounded-full"
          alt=""
          v-tooltip="'Its me MARIO'"
        />
        <div
          :class="`h-3 w-3 rounded-full flex-shrink-0 ${getDiscordStatus}`"
        />
        <h1 class="font-bold">
          {{
            this.lanyard.discord_user.username +
            '#' +
            this.lanyard.discord_user.discriminator
          }}
        </h1>
      </div>
      <div
        v-if="
          Object.keys(
            this.lanyard.activities.filter((activity) => activity.type === 0)
          ).length === 0
        "
      >
        <h1
          v-if="!this.lanyard.listening_to_spotify"
          class="font-bold text-sm mt-2 leading-tight truncate"
        >
          I'm not doing anything
        </h1>
      </div>

      <div v-else class="flex mt-2">
        <img
          class="w-16 h-16 rounded-md mr-4 bg-gray-900 outline-none"
          alt=""
          :src="getStatusImage"
          v-tooltip="getStatusDetails.assets.large_text"
        />
        <div class="flex flex-col space-y-1 justify-center">
          <div
            class="text-sm font-bold leading-tight truncate"
            :title="getStatusDetails"
          >
            {{ getStatusDetails.name }}
          </div>
          <div class="text-sm leading-tight truncate" :title="getStatusDetails">
            {{ getStatusDetails.details }}
          </div>
          <div class="text-sm leading-tight truncate" :title="getStatusDetails">
            {{ getStatusDetails.state }}
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="this.lanyard.listening_to_spotify"
      class="
        bg-green-500
        dark:bg-green-500
        mt-2
        bg-opacity-30
        flex
        p-4
        rounded-md
      "
    >
      <div class="flex mt-2">
        <img
          class="w-16 h-16 rounded-md mr-4 bg-gray-900 outline-none"
          alt=""
          :src="this.lanyard.spotify.album_art_url"
        />
        <div class="flex flex-col space-y-1 justify-center">
          <div class="text-sm font-bold leading-tight truncate-ellipsis">
            {{ this.lanyard.spotify.song }}
          </div>
          <div class="text-sm leading-tight truncate-ellipsis">
            {{ 'by ' + this.lanyard.spotify.artist }}
          </div>
        </div>
      </div>
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
    }
  },

  computed: {
    /**
     * Returns status detail as string.
     * @returns {string}
     */

    getStatusDetails() {
      const lanyard = this.lanyard
      const filtered =
        lanyard.activities?.filter((activity) => activity.type === 0)?.pop() ||
        {}
      if (!lanyard) return {}
      else {
        return filtered
      }
    },
    getDiscordStatus() {
      switch (this.lanyard.discord_status) {
        case 'online':
          return 'bg-green-500'
        case 'idle':
          return 'bg-yellow-500'
        case 'dnd':
          return 'bg-red-500'
        default:
          return 'bg-gray-500 dark:bg-gray-200'
      }
    },
    getStatusImage() {
      const lanyard = this.lanyard

      const filtered =
        lanyard.activities?.filter((activity) => activity.type === 0)?.pop() ||
        {}
      if (filtered.name == 'Stardew Valley') {
        return 'https://play-lh.googleusercontent.com/He92papZcOmkgTi1sLHXQQb02aoyRtJ8ml96njM_cSAcpHhILvxMjhLix4mYEIKXPq4'
      } else if (filtered.assets == null) {
        return '/icon.png'
      } else {
        return `https://cdn.discordapp.com/app-assets/${filtered.application_id}/${filtered.assets.large_image}`
      }
    },
  },
  beforeDestroy() {
    this.socket?.close()
  },
  mounted() {
    /**
     * Connect to Lanyard Socket API, send heartbeat every 30 seconds and replace the Vue data value with the message
     */
    this.socket = new WebSocket('wss://api.lanyard.rest/socket')
    this.socket.addEventListener('open', () => {
      // Subscribe to ID
      this.socket.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: '404360912460578816',
          },
        })
      )
      // Send heartbeat every 30 seconds
      setInterval(() => {
        this.socket.send(
          JSON.stringify({
            op: 3,
          })
        )
      }, 30000)
    })
    this.socket.addEventListener('message', ({ data }) => {
      const { t: type, d: status } = JSON.parse(data)
      if (type === 'INIT_STATE' || type === 'PRESENCE_UPDATE')
        this.lanyard = status || {}
      this.finished = true
    })
  },
}
</script>
<style></style>
