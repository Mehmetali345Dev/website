<template>
  <header class="w-full flex gap-2 flex-col items-start">
    <div class="flex items-center gap-2">
      <div class="grid items-center about mt-2">
        <h1 class="font-bold text-2xl text-2xl">Hello, I'm Mehmet Ali</h1>
        <p>
          I am a young developer (I'm 14 years old) from Turkey. I write desktop
          programs and web applications using Vue.js, JavaScript and C#.
        </p>
      </div>
      <nuxt-img
        src="/icon.png"
        class="rounded-md w-32 h-32"
        alt="Mehmetali345Dev"
      />
    </div>
    <div class="flex flex-col md:(grid-cols-2 grid) gap-2 w-full">
      <WidgetDiscord />
      <WidgetSpotify class="h-full" />
    </div>
    <h1 class="text-2xl font-bold">About Me</h1>
    <div class="grid w-full md:grid-cols-2 gap-2">
      <nuxt-link
        v-for="(link, index) in links.me"
        :key="`link-${index}`"
        :to="link.to"
        class="bg-gray-900 rounded-md w-full gap-2 flex flex-col bg-opacity-30 p-4"
      >
        <h1 class="text-xl font-bold truncate">{{ link.name }}</h1>
        <p class="text-lg text-gray-800 dark:text-gray-200 line-clamp-2">
          {{ link.desc }}
        </p>
      </nuxt-link>
    </div>
    <h1 class="text-2xl font-bold">Pages</h1>
    <div class="grid w-full md:grid-cols-2 gap-2">
      <nuxt-link
        v-for="(link, index) in links.pages"
        :key="`link-${index}`"
        :to="link.to"
        class="bg-gray-900 rounded-md w-full gap-2 flex flex-col bg-opacity-30 p-4"
      >
        <h1 class="text-xl font-bold truncate">{{ link.name }}</h1>
        <p class="text-lg text-gray-800 dark:text-gray-200 line-clamp-2">
          {{ link.desc }}
        </p>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: {
        me: [
          {
            name: 'My Projects',
            to: '/info/projects',
            desc: 'You can see my projects and works from here.',
          },
          {
            name: 'My Github Repos',
            to: '/info/repos',
            desc: 'You can see github repos from here.',
          },
          {
            name: 'My Works',
            to: '/info/works',
            desc: 'You can see my works from here.',
          },
        ],
        pages: [
          {
            name: 'Donate Me',
            to: '/donate',
            desc: 'You can donate to me if you want.',
          },
          {
            name: 'Turkish Blog',
            to: '/blog',
            desc: 'You can see my Turkish blog from here.',
          },
          {
            name: 'Recommendations',
            to: '/recommends',
            desc: 'My daily song and weekly book recommendations (Coming Soon...).',
          },
          {
            name: 'Dictionary',
            to: '/dictionary',
            desc: 'A dictionary for awkward Turkish words.',
          },
          {
            name: 'Utils',
            to: '/utils',
            desc: 'Useful tools for you like Opengraph viewer and generator (Coming Soon...).',
          },
        ],
      },
    }
  },
}
</script>

<style></style>
