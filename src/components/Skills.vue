<template>
  <div class="flex space-x-2 w-full p-3 items-center bg-gray-300 rounded-xl dark:(bg-gray-800 text-gray-100)">
    <icon :name="getIconName" class="w-10 h-10" />
    <h1>{{ skill }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    getIconName() {
      if (this.icon) return this.icon;
      else
        return (
          this.skill?.toLowerCase()?.replace(/[^a-zA-Z]/g, "")
        );
    },
  },
};
</script>

<style>
</style>