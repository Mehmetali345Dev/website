<template>
  <div class="dark:(bg-gray-900 text-gray-50) bg-gray-200 flex flex-col items-center min-h-[100vh]">
    <div class="w-full sticky top-0 z-40">

      <NavBlog
        v-if="$route.path.includes('blog')"
        class="sticky top-0 animated z-40 animate-slide-in-down"
      />

      <NavDefault v-else class="sticky top-0 animated z-40 animate-slide-in-down" />
    </div>

    <div class="flex w-11/12 my-8 z-10 flex-grow items-center justify-center">
      <Nuxt v-if="$route.path.includes('donate')" class="w-full"/>
      <Nuxt v-else />
    </div>

    <NavFooter class="h-max" />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
