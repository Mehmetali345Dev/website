<template>
  <div
    class="
      bg-gray-300
      dark:(text-gray-100
      bg-gray-800)
      w-full
      h-full
      p-6
      rounded
      grid justify-items-center
    "
  >
    <img :src="projectImage" class="mt-2 w-full max-w-48" />

    <div class="grid justify-items-center space-y-3">
      <h1 class="font-bold text-xl">{{ projectName }}</h1>
      <p class="w-max-[20rem]">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectName: {
      type: String,
      required: true,
    },
    projectImage: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<style>
</style>