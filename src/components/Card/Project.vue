<template>
  <a
    :href="project.link"
    class="
      grid
      rounded-md
      justify-items-center
      items-center
      p-4
      bg-gray-900 bg-opacity-30
    "
  >
    <div
      class="focus:outline-none"
      :class="{
        'bg-gray-100 dark:bg-gray-700 animate-pulse bg-no-repeat':
          itemLoaded === false,
      }"
      :style="{
        backgroundImage: itemLoaded === true ? `url('${project.image}')` : '',
        backgroundPosition: 'center',
        backgroundSize: itemLoaded === true ? backgroundSize : 'cover',
      }"
    >
      <img
        :src="project.image"
        class="invisible"
        draggable="false"
        alt="image"
        width="100%"
        height="100%"
        @load="itemLoaded = true"
      />
    </div>
    <div class="grid items-center">
      <h1 class="text-lg font-bold">{{ project.title }}</h1>
      <p class="">{{ project.description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    project: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      itemLoaded: false,
      backgroundSize: "cover"
    }
  },
}
</script>

<style></style>
