<template>
  <div
    class="
      p-4
      rounded-md
    bg-gray-900
      bg-opacity-30
    "
  >
    <div class="flex items-center space-x-1 text-gray-900 dark:text-gray-100">
      <span class="flex-grow space-x-2 truncate hover:underline">
        {{ name }}
      </span>

      <div class="flex items-center space-x-1">
        <div class="flex items-center space-x-1">
          <span>{{ stars }} stars</span>
        </div>
      </div>
    </div>

    <p class="text-gray-700 line-clamp-2 dark:text-gray-300">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    stars: {
      type: [String, Number],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  
};
</script>

<style>
</style>