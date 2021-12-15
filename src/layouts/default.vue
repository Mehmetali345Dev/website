<template>
  <div
    class="flex min-h-screen flex-col items-center bg-gray-200 scrollbar text-black dark:(bg-black text-gray-50)"
  >
    <transition name="fade" mode="out-in">
      <NavDefault class="sticky top-0 z-40" />
    </transition>

    <div
      class="flex flex-col w-11/12 md:w-9/12 my-6 z-10 h-full flex-grow items-start justify-center"
    >
      <Nuxt class="flex-grow" />
    </div>
    <NavFooter
      class="dark:(bg-gray-900 bg-opacity-30) bg-gray-300 bg-opacity-30"
    />
    <div class="bg-green-600 h-2 w-full" />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
