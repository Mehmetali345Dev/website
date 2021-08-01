<template>
  <div
    class="
      bg-gray-300
      dark:bg-gray-800
      items-center
      justify-center
      flex
      dark:text-gray-100
      w-9/12
      shadow-lg
      h-auto
      gruvbox:bg-yellow-300
      p-4
      .rounded-xl
      space-x-2
      mt-4
    "
  >
    <div
      class="
        grid
        md:flex
        justify-items-center
        items-center
        md:justify-between
        w-10/12
        md:w-8/12
      "
    >
      <a href="/" class="font-bold text-lg">{{ userinfo.login }}</a>
      <div class="flex items-center space-x-4">
        <nuxt-link
          v-for="(link, index) in getCurrentRouteLinks"
          :key="`link-${index}`"
          :to="link.link"
          >{{ link.title }}</nuxt-link
        >
        <a href="https://blog.mehmetali345.xyz" target="_blank">Blog</a>
        <ColorSwitcher class="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
    },
  },
  data() {
    return {
      links: {
        default: [
          {
            title: "Projects",
            link: "/#projects",
          },
          {
            title: "Donate",
            link: "#donate",
          },
        ],
      },
      userinfo: [],
    };
  },
  computed: {
    getCurrentRouteLinks() {
      return this.links.default;
    },
    getUser() {
      return this.$config.config;
    },
  },

  async fetch() {
    const info = await this.$axios.$get(
      "https://api.github.com/users/" + this.getUser.user
    );
    this.userinfo = info;
  },
};
</script>

<style>
</style>