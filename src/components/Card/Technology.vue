<template>
  <div
    class="
      p-4
      px-8
      rounded-md
      flex
w-full
      justify-between
      items-center
      bg-gray-300
      dark:bg-gray-800
    "
  >
    <IconUse :name="name" class="h-12 w-12" />
    <h1 class="text-lg font-bold">{{ name }}</h1>
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
