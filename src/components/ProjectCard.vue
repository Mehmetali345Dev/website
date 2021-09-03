<template>
  <a :href="link" target="_blank">
  <div
    class="
      bg-gray-300
      dark:(text-gray-100
      bg-gray-800)
      w-min
      h-full
      grid
      p-3
      text-center
      rounded
      justify-items-center
    "
  >
    <img :src="projectImage" class="my-2 rounded-md" />
     <div class="grid justify-items-center space-y-3">
        <h1 class="font-bold text-xl">{{ projectName }}</h1>
        <p class="w-max-[15rem]">{{ description }}</p>
    </div>
  </div>
  </a>
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
    link:{
      type: String,
    }
  },
};
</script>

<style>
</style>