<template>
  <div
    class="w-full flex flex-col bg-gray-200 dark:bg-black bg-opacity-60 dark:bg-opacity-60 items-end p-4"
  >
    <div class="w-full flex justify-center">
      <div class="flex w-9/12 justify-between">
        <nuxt-link to="/">
          <div class="flex items-center">
            <nuxt-img
              src="/icon.png"
              alt="345Dev"
              format="webp"
              class="w-10 h-10 rounded-md"
            />
            <h1 class="font-bold hidden sm:block text-2xl ml-4">
              Mehmetali345Dev
            </h1>
          </div>
        </nuxt-link>
        <Color />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'projects',
          to: '/projects',
        },
        {
          name: 'donate',
          to: '/donate',
        },
        {
          name: 'blog',
          to: '/blog',
        },
      ],
    }
  },
}
</script>

<style></style>
