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
      class="sticky animated z-50 mb-8 animate-slide-in-down"
    />

    <NavDefault v-else class="sticky mb-8 animated z-50 animate-slide-in-down" />
    <div class="flex w-11/12 flex-grow justify-center">
      <Nuxt class="w-full h-max z-10" />
    </div>
    <NavFooter class="mt-8 h-max" />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
