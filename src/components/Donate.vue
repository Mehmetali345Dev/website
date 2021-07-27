<template>
  <div class="grid md:flex md:space-x-2 w-full items-center">
    <div
      class="
        flex
        w-full
        bg-gray-300
        dark:bg-gray-800
        p-6
        flex-grow
        justify-items-center
        items-center
        dark:text-gray-100
        rounded-xl
      "
    >
      <div class="flex items-center">
        <img
          src="https://crosstech.com.tr/wp-content/uploads/2020/08/Papara-780x675.png"
          class="h-16"
        />
        <div class="grid justify-items-start ml-4">
          <h1 class="font-semibold text-lg">Papara</h1>
          <h1 class="text-md ">1212538229</h1>
        </div>
      </div>
    </div>
    <div
      class="
        flex
        w-full
        bg-gray-300
        dark:bg-gray-800
        p-6
        dark:text-gray-100
        justify-items-center
        items-center
        flex-grow
        rounded-xl
      "
    >
      <div class="flex items-center">
        <img
          src="https://www.audiosocket.com/wp-content/uploads/2020/11/patreon-creators-patreon.png"
          class="h-16"
        />
        <div class="grid justify-items-start ml-4">
          <h1 class="font-semibold text-lg">Patreon</h1>
          <a target="_blank" :href="getPatreonLink.patreon">Go to page</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getPatreonLink() {
      return this.$config.config;
    },
  },
};
</script>

<style>
</style>