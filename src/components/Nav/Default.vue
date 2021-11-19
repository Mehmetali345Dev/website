<template>
  <div
    class="
      w-full
      flex flex-col
      bg-gray-200
      dark:bg-black
      bg-opacity-60
      items-end
      p-4
    "
  >
    <div class="w-full flex justify-center">
      <div class="flex w-9/12 justify-between">
        <nuxt-link to="/">
          <div class="flex items-center">
            <nuxt-img
              src="/icon.png"
              format="webp"
              class="w-10 h-10 rounded-md"
            />
            <h1 class="font-bold hidden sm:block text-2xl ml-4">
              Mehmetali345Dev
            </h1>
          </div>
        </nuxt-link>

        <div class="hidden md:flex items-center space-x-5">
          <nuxt-link
            v-for="(link, index) in links"
            :key="`link-${index}`"
            class="text-lg font-bold"
            :to="link.to"
            >{{ link.name }}</nuxt-link
          >
          <Color />
        </div>
        <div
          class="flex flex-col md:hidden relative justify-center items-center"
        >
          <h1 class="font-bold cursor-pointer text-lg" @click="showMenu()">
            Menu
          </h1>
          <transition name="fade" mode="out-in">
            <div
              v-if="menu"
              class="
                bg-gray-900
                absolute
                top-10
                bg-opacity-50
                p-4
                flex flex-col
                items-end
                rounded-md
              "
            >
              <nuxt-link
                v-for="(link, index) in links"
                :key="`link-${index}`"
                class="text-lg font-bold"
                :to="link.to"
                >{{ link.name }}</nuxt-link
              >
              <Color />
            </div>
          </transition>
        </div>
      </div>
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
          name: 'projects',
          to: '/projects',
        },
        {
          name: 'donate',
          to: '/donate',
        },
        {
          name: 'blog',
          to: '/blog',
        },
      ],
    }
  },
  methods: {
    showMenu() {
      if (this.menu === false) {
        this.menu = true
      } else {
        this.menu = false
      }
    },
  },
}
</script>

<style></style>
