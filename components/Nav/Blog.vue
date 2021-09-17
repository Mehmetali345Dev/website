<template>
  <div
    class="
      w-11/12
      p-4
      text-gray-900
      bg-gray-300
      shadow-lg shadow-gray-900
      dark:(bg-gray-800
      shadow-gray-300
      text-gray-50)
      rounded-b-xl
    "
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <nuxt-link class="text-xl sm:text-2xl font-bold" to="/"
          >Mehmetali345Dev</nuxt-link
        >
        <Color />
      </div>
      <div class="hidden sm:flex items-center space-x-5">
        <nuxt-link
          v-if="$route.params.slug"
          class="text-lg font-bold w-max"
          to="/blog"
        >
          Geri Dön</nuxt-link
        >
      </div>
      <div @click="showMenu()" class="text-lg font-bold md:hidden">Menu</div>
    </div>
    <div
      class="
        grid
        mt-4
        animated
        animate-zoom-in
        items-center
        space-y-2
        dark:bg-gray-800
        rounded-b-md
      "
      v-if="menu"
    >
      <nuxt-link
        v-if="$route.params.slug"
        class="text-lg font-bold w-max"
        to="/blog"
      >
        Geri Dön</nuxt-link
      >
    </div>
    <vue-scroll-progress-bar v-if="$route.params.slug" backgroundColor="#059669" />
  </div>
</template>

<script>
import { VueScrollProgressBar } from "@guillaumebriday/vue-scroll-progress-bar";

export default {
  components: {
    VueScrollProgressBar,
  },
  data() {
    return {
      menu: false,
      links: [
        {
          name: "Geri dön",
          to: "/blog",
        },
      ],
    };
  },
  methods: {
    showMenu() {
      if (this.menu === false) {
        this.menu = true;
      } else {
        this.menu = false;
      }
    },
  },
};
</script>

<style>
</style>