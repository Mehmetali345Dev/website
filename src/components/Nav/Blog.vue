<template>
  <div
    class="w-full p-4 flex justify-center text-gray-900 shadow-lg shadow-gray-900 backdrop-filter bg-gray-300 bg-opacity-70 backdrop-blur-md dark:(bg-gray-800 bg-opacity-70 shadow-gray-50 text-gray-50)"
  >
    <div class="flex items-center w-full md:w-9/12 justify-between">
      <div class="flex items-center space-x-4">
        <nuxt-link class="text-xl sm:text-2xl font-bold" to="/">Mehmetali345Dev</nuxt-link>
      </div>
      <div class="hidden sm:flex items-center space-x-5">
        <nuxt-link v-if="$route.params.slug" class="text-lg font-bold w-max" to="/blog">Geri Dön</nuxt-link>
        <Color class="ml-2" />
      </div>
      <div class="flex items-center sm:hidden space-x-3">
        <nuxt-link v-if="$route.params.slug" class="text-lg font-bold" to="/blog">Geri Dön</nuxt-link>
        <Color />
      </div>
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
