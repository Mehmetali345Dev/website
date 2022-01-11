<template>
  <div
    class="p-4 rounded-md flex flex-col justify-between bg-gray-900 bg-opacity-30"
  >
    <div class="flex items-center space-x-1 text-gray-900 dark:text-gray-100">
      <span
        class="flex-grow text-lg font-bold space-x-2 truncate hover:underline"
      >
        {{ repo.name }}
      </span>
      <div class="flex items-center space-x-2">
        <IconFork
          v-if="repo.fork"
          class="w-6 h-6"
          v-bind:class="{
            ' text-white': $colorMode.preference === 'dark',
            ' text-black': $colorMode.preference === 'light',
          }"
        />
        <h1>{{ repo.stargazers_count }}</h1>
        <IconStar class="w-6 h-6 text-yellow-400" />
      </div>
    </div>
    <p class="text-gray-700 w-full truncate dark:text-gray-300">
      {{ repo.description }}
    </p>
    <div class="flex flex-col gap-1">
      <h1 class="flex gap-3 justify-between font-bold text-lg">
        License:
        <span v-if="repo.license !== null" class="truncate max-w-40">{{
          repo.license.name
        }}</span>
        <span v-else>None</span>
      </h1>
      <h1 class="flex gap-3 justify-between font-bold text-lg">
        Language:
        <IconBrand class="w-6 h-6" :name="repoLanguage" />
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    repoLanguage() {
      if (this.repo.language === 'Vue') return 'Vue.js'
      else if (this.repo.language === 'SCSS') return 'Sass'
      else return this.repo.language
    },
  },
}
</script>

<style></style>
