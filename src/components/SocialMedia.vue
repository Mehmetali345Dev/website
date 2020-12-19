<template>
  <div>
    <v-btn
      v-for="account in accounts.slice(0, $props.slice || accounts.length)"
      :key="account.icon"
      :href="account.url"
      v-tippy="{ content: account.name, placement: 'bottom' }"
      target="_blank"
      icon
    >
      <v-icon v-text="account.icon" />
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  data() {
    return {
      accounts: [
        {
          name: "Steam",
          url: "https://steamcommunity.com/profiles/76561198801124383",
          icon: "mdi-steam",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/AnakinS07677978",
          icon: "mdi-twitter",
        },
        {
          name: "Discord",
          url: "https://discord.gg/zmn6MQ35zn",
          icon: "mdi-discord",
        },
        {
          name: "GitHub",
          url: "https://github.com/mehmetali345",
          icon: "mdi-github",
        },
        {
          name: "Email",
          url: "mailto:mehmetali345@protonmail.com",
          icon: "mdi-email",
        },
      ],
    };
  },
};
</script>
