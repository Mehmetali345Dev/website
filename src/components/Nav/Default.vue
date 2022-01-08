<template>
  <div
    class="w-full flex flex-col bg-gray-200 dark:bg-black bg-opacity-60 dark:bg-opacity-60 items-end p-4"
  >
    <div class="w-full flex items-center justify-center">
      <div class="flex w-full md:w-9/12 items-center justify-between">
        <nuxt-link to="/">
          <div class="flex items-center">
            <nuxt-img
              src="/icon.png"
              alt="345Dev"
              format="webp"
              class="w-10 h-10 rounded-md"
            />
            <h1 class="font-bold hidden sm:block text-2xl ml-4">
              Mehmetali345Dev
            </h1>
          </div>
        </nuxt-link>
        <div class="flex gap-2 items-center">
          <nuxt-link
            v-if="currentPath"
            to="/"
            class="font-bold text-lg text-black dark:text-white"
            >Go back</nuxt-link
          >
          <nuxt-link
            v-if="$route.params.slug"
            to="/"
            class="font-bold text-lg text-black dark:text-white"
            >Geri dön</nuxt-link
          >
          <Color />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paths: [
        'info-projects',
        'info-repos',
        'info-whoami',
        'dictionary',
        'recommends',
        'donate',
      ],
    }
  },
  computed: {
    currentPath() {
      console.log(this.$route.name)
      if (this.paths.includes(this.$route.name)) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>
<style></style>
