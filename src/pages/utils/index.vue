<template>
  <div class="flex flex-col w-full gap-3">
    <nuxt-link
      to="/utils/metatag"
      class="bg-gray-900 scale-up rounded-md w-full gap-2 flex flex-col bg-opacity-30 p-4"
    >
      <h1 class="text-xl items-center font-bold truncate">Metatag Viewer</h1>
      <p class="text-lg text-gray-800 dark:text-gray-200 line-clamp-2">
        View metatag of a website.
      </p>
      <p class="gap-1 items-center font-bold text-lg flex">
        Featured
        <IconFire class="w-6 rounded-full h-6 text-red-600" />
      </p>
    </nuxt-link>
  </div>
</template>
