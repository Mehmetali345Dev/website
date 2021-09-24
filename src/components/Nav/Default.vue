<template>
  <div
    class="w-full p-4 flex flex-col items-center bg-gray-300 bg-opacity-70 text-gray-900 shadow-lg shadow-gray-900 backdrop-filter backdrop-blur-md dark:(shadow-gray-50 bg-opacity-70 bg-gray-800 text-gray-50)"
  >
    <div class="flex items-center md:w-9/12 w-full justify-between">
      <div class="flex items-center space-x-4">
        <nuxt-link class="text-xl sm:text-2xl font-bold" to="/">Mehmetali345Dev</nuxt-link>
      </div>
      <div class="hidden sm:flex items-center space-x-5">
        <nuxt-link
          v-for="(link, index) in links"
          :key="`link-${index}`"
          class="text-lg font-bold"
          :to="link.to"
        >{{ link.name }}</nuxt-link>
        <Color />
      </div>
      <div class="sm:hidden flex items-center space-x-3">
        <div @click="showMenu()" class="text-lg font-bold md:hidden">Menu</div>
        <Color />
      </div>
    </div>
    <div class="grid mt-4 w-full items-center space-y-2 rounded-b-md" v-if="menu">
      <nuxt-link
        v-for="(link, index) in links"
        :key="`link-${index}`"
        class="text-lg font-bold w-max"
        :to="link.to"
      >{{ link.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      links: [
        {
          name: "Projects",
          to: "/#projects",
        },
        {
          name: "Repos",
          to: "/repos",
        },
        {
          name: "Donate",
          to: "/donate",
        },
        {
          name: "Blog",
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
