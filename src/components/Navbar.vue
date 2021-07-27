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
        w-8/12
      "
    >
      <a href="/" class="font-bold text-lg">{{ username }}</a>
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
            title: "Donate",
            link: "#donate",
          },
          {
            title: "Projects",
            link: "/#projects",
          },
        ],
      },
    };
  },
  computed: {
    getCurrentRouteLinks() {
      return this.links.default;
    },
  },

  methods: {},
};
</script>

<style>
</style>