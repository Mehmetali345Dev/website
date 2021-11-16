<template>
  <div class="w-full flex flex-col bg-gray-300 dark:bg-black bg-opacity-60 items-end p-4">
    <div class="w-full flex justify-center">
      <div class="flex w-9/12 justify-between">
        <div class="flex items-center">
          <nuxt-img
            src="/icon.png"
            format="webp"
            class="
              w-10
              h-10
              hover:(rounded-none
              transition
              ease-in
              duration-300)
              rounded-md
            "
          />
          <h1 class="font-bold hidden sm:block text-2xl ml-4">
            Mehmetali345Dev
          </h1>
        </div>
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
        <div class="flex flex-col md:hidden justify-center items-center">
          <h1 class="font-bold cursor-pointer text-lg" @click="showMenu()">
            Menu
          </h1>
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div
        v-if="menu"
        class="
          bg-gray-900
          absolute
          mt-8
          bg-opacity-30
          p-4
          flex flex-col
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
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      links: [
        {
          name: 'projects',
          to: '/#projects',
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
