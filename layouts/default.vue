<template>
  <div
    class="
      dark:(bg-gray-900
      text-gray-50)
      bg-gray-200
      flex flex-col
      items-center
      min-h-[100vh]
    "
  >
    <NavBlog
      v-if="$route.name.includes('blog')"
      class="sticky top-0 animated z-40 mb-8 animate-slide-in-down"
    />

    <NavDefault
      v-else
      class="sticky top-0 animated z-40 animate-slide-in-down"
    />
    <div class="flex w-11/12 z-10 flex-grow items-center justify-center">
      <Nuxt v-if="$route.name.includes('blog')" class="sm:w-9/12 h-max" />
      <Nuxt v-else class="w-full h-max" />
    </div>
    <NavFooter class="mt-8 h-max" />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
