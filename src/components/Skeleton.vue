<template>
  <!-- Repository Card -->
  <div
    v-if="type === 'repository'"
    class="p-4 space-y-1 animate-pulse rounded-md ring-1 ring-gray-900 bg-gray-900 bg-opacity-30"
  >
    <div class="flex items-center justify-between">
      <div
        class="w-7/12 h-5 bg-gray-300 rounded-md dark:bg-gray-900 animate-pulse"
      />

      <div
        class="w-2/12 h-5 bg-gray-300 rounded-md dark:bg-gray-900 animate-pulse"
      />
    </div>

    <div class="w-full h-4 bg-gray-300 rounded-md dark:bg-gray-900" />
    <div class="w-4/12 h-4 bg-gray-300 rounded-md dark:bg-gray-900" />
  </div>

  <!-- Image -->
  <div
    v-else-if="type === 'image' && imageUrl"
    class="focus:outline-none"
    :class="{
      'bg-gray-100 dark:bg-gray-900 bg-opacity-30 w-full animate-pulse bg-no-repeat':
        itemLoaded === false,
    }"
    :style="{
      backgroundImage: itemLoaded === true ? `url('${imageUrl}')` : '',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }"
  >
    <img
      :src="imageUrl"
      class="invisible"
      draggable="false"
      alt="image"
      width="100%"
      height="100%"
      @load="itemLoaded = true"
    />
  </div>

  <!-- Iframe -->
  <div
    v-else-if="type === 'iframe'"
    :class="{
      'bg-gray-100 dark:bg-gray-800 rounded animate-pulse':
        itemLoaded === false,
    }"
  >
    <iframe
      v-if="iframeUrl"
      :class="{
        'w-full h-full rounded': true,
        invisible: itemLoaded === false,
      }"
      :src="iframeUrl"
      @load="itemLoaded = true"
    />
  </div>

  <!-- Song Card -->
  <div v-else-if="type === 'song'" class="animate-pulse w-full flex flex-col md:flex-row gap-3">
    <div class="w-full bg-gray-900 bg-opacity-30"></div>
    <div class="flex flex-col w-full gap-3">
      <div
        class="flex flex-col p-4 w-full bg-gray-900 bg-opacity-30 rounded-md gap-3"
      >
        <h1 class="flex gap-3 font-bold text-lg">
          Name:
          <h1 class="w-full h-6 rounded-sm bg-gray-800 bg-opacity-40"></h1>
        </h1>
      </div>
      <div
        class="flex flex-col p-4 w-full dark:bg-gray-900 bg-opacity-30 rounded-md gap-3"
      >
        <h1 class="flex gap-3 font-bold text-lg">
          Artist:
          <h1 class="w-full h-6 rounded-sm bg-gray-800 bg-opacity-40"></h1>
        </h1>
      </div>
      <a
        target="_blank"
        class="flex justify-center rounded-md gap-3 text-white bg-green-600 dark:bg-green-600 p-4 w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path
            d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm4.87 17.66c-.2 0-.33-.06-.51-.18a12.03 12.03 0 0 0-6.2-1.6c-1.3 0-2.59.16-3.8.42-.19.04-.44.11-.59.11a.75.75 0 0 1-.75-.75c0-.5.29-.75.65-.82 1.48-.34 2.96-.53 4.49-.53 2.62 0 4.97.6 6.98 1.8.3.18.47.36.47.8 0 .43-.35.75-.74.75zm1.3-3.17c-.25 0-.42-.1-.6-.21a15.22 15.22 0 0 0-7.62-1.93c-1.51 0-2.83.21-3.91.5-.24.07-.37.14-.59.14a.94.94 0 0 1-.93-.95c0-.5.24-.86.74-1C6.61 10.67 8 10.4 10 10.4c3.15 0 6.18.78 8.57 2.2.4.24.55.53.55.96 0 .52-.41.94-.93.94zm1.5-3.7c-.25 0-.4-.06-.62-.18-2.18-1.3-5.55-2.02-8.8-2.02-1.63 0-3.29.16-4.8.57-.17.05-.4.14-.62.14-.64 0-1.13-.51-1.13-1.15 0-.65.4-1.02.84-1.15 1.71-.5 3.62-.74 5.7-.74 3.52 0 7.23.73 9.94 2.32.36.2.62.52.62 1.09 0 .65-.53 1.12-1.14 1.12z"
          />
        </svg>
        See on Spotify
      </a>
    </div>
  </div>

  <!-- Block -->
  <div
    v-else-if="type === 'block'"
    class="bg-gray-100 rounded dark:bg-gray-800 animate-pulse"
  />
  <div
    v-else-if="type === 'word'"
    class="bg-gray-900 p-4 rounded-md w-full flex flex-col gap-2 animate-pulse bg-opacity-30"
  >
    <h1
      class="font-bold w-full h-6 text-lg rounded-md bg-gray-800 bg-opacity-30"
    ></h1>
    <p class="h-16 w-full bg-gray-800 bg-opacity-30"></p>
    <p class="gap-2 w-24 h-3 bg-gray-800 bg-opacity-30 flex items-center"></p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'block',
    },
    imageUrl: {
      type: String,
      required: false,
      default: null,
    },
    backgroundSize: {
      type: String,
      required: false,
      default: 'cover',
    },
    iframeUrl: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      itemLoaded: false,
    }
  },
}
</script>
