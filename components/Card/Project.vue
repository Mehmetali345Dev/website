<template>
  <a
    :href="link"
    target="_blank"
    class="
      sm:flex
      grid
      justify-items-center
      sm:text-left
      text-center
      p-4
      rounded-md
      bg-gray-300
      dark:bg-gray-800
    "
  >
    <img :src="image" class="w-24" alt="" />
    <div class="flex flex-col ml-2 justify-center">
      <h1 class="text-xl font-bold">{{ name }}</h1>
      <p>{{ description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    description: String,
    link: String,
  },
};
</script>

<style>
</style>