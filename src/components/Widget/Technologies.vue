<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-lg">Technologies I use</h1>
    <div class="h-full my-2 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
      <div
        v-for="(tech, index) in technologies"
        :key="`tech-${index}`"
        class="bg-gray-900 rounded-md bg-opacity-30 flex items-center justify-between p-4"
      >
        <IconBrand :name="tech" class="w-10 h-10" />
        <h1 class="bold">{{ tech }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        'JavaScript',
        'TypeScript',
        'C#',
        'Python',
        'Vue.js',
        'Nuxt.js',
        'WindiCSS',
        'Firebase',
        'Node.js',
        'Sass',
        'Docker',
        'Dotnet',
        'Github',
        'Figma',
      ],
    }
  },
}
</script>

<style></style>
