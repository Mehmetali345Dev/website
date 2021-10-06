<template>
  <div
    class="p-4 rounded-md md:flex w-full grid justify-items-center md:justify-between items-center bg-gray-300 dark:bg-gray-800"
  >
    <IconUse :name="name" class="h-12 w-12" />
    <h1 class="text-lg md:mt-0 mt-2 font-bold">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style>
</style>
