<template>
  <div class="dark:(bg-gray-900 text-gray-50) bg-gray-200 flex flex-col items-center min-h-[100vh]">
    <transition name="fade" mode="out-in">
      <NavBlog v-if="$route.path.includes('blog')" class="sticky top-0 z-40" />

      <NavDefault v-else class="sticky top-0 z-40" />
    </transition>

    <div class="flex w-11/12 my-8 z-10 flex-grow items-center justify-center">
      <Nuxt v-if="$route.path.includes('donate')" class="w-full" />
      <Nuxt v-else />
    </div>
    <div
      class="fixed bottom-2 items-end grid animated animate-slide-in-right space-y-3 right-2 z-50"
    >
      <Color class />
      <Social />
    </div>
    <transition name="fade" mode="out-in">
      <NavFooter class="h-max bottom-0 z-60" />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
