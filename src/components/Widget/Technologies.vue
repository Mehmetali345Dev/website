<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-lg">Technologies I use</h1>
    <div class="grid-cols-3 h-full my-2 grid gap-3">
      <div
        v-for="(tech, index) in technologies"
        :key="`tech-${index}`"
        class="
          bg-gray-800
          rounded-md
          bg-opacity-30
          flex flex-col
          items-center
          justify-center
          p-2
          space-y-2
        "
      >
        <IconBrand :name="tech" class="w-10 h-10" />
        <h1 class="bold">{{ tech }}</h1>
      </div>
    </div>
    <nuxt-link to="/projects" class="bg-green-600 font-bold p-4 rounded-md">
      See my all works, projects and repos
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        'JavaScript',
        'C#',
        'Python',
        'Vue.js',
        'Nuxt.js',
        'WindiCSS',
        'Firebase',
        'Node.js',
        'Sass',
        'Dotnet',
        'Github',
        'Figma',
      ], // afk
    }
  },
}
</script>

<style></style>
