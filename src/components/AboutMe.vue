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
      <nuxt-img src="/icon.png" class="rounded-md w-32 h-32" alt="Mehmetali345Dev" />
    </div>
    <div class="flex flex-col md:(grid-cols-2 grid) gap-2 w-full">
      <WidgetDiscord />
      <WidgetSpotify class="h-full" />
    </div>
    <div class="grid md:grid-cols-2 gap-2">
      <div class="flex flex-col gap-2">
        <h1 class="font-bold text-lg">Latest Blog Posts</h1>
        <CardPost
          type="rest"
          v-for="(post, index) in posts"
          :key="`latest-${index}`"
          :post="post"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="font-bold text-lg">My Projects</h1>
        <CardProject
          :project="project"
          v-for="(project, index) in projects"
          :key="`project-${index}`"
        />
      </div>
    </div>
    <h1 class="text-2xl font-bold">About Me</h1>
    <div class="grid w-full md:grid-cols-2 gap-2">
      <nuxt-link
        v-for="(link, index) in links.me"
        :key="`link-${index}`"
        :to="link.to"
        class="bg-gray-900 scale-up rounded-md w-full gap-2 flex flex-col bg-opacity-30 p-4"
      >
        <h1 class="text-xl items-center font-bold truncate">{{ link.name }}</h1>
        <p class="text-lg text-gray-800 dark:text-gray-200 line-clamp-2">{{ link.desc }}</p>
        <p v-if="link.featured" class="gap-1 items-center font-bold text-lg flex">
          Featured
          <IconFire class="w-6 rounded-full h-6 text-red-600" />
        </p>
      </nuxt-link>
    </div>
    <h1 class="text-2xl font-bold">Pages</h1>
    <div class="grid w-full md:grid-cols-2 gap-2">
      <nuxt-link
        v-for="(link, index) in links.pages"
        :key="`link-${index}`"
        :to="link.to"
        class="bg-gray-900 scale-up rounded-md w-full gap-2 flex flex-col bg-opacity-30 p-4"
      >
        <h1 class="text-xl items-center font-bold truncate">{{ link.name }}</h1>
        <p class="text-lg text-gray-800 dark:text-gray-200 line-clamp-2">{{ link.desc }}</p>
        <p v-if="link.featured" class="gap-1 items-center font-bold text-lg flex">
          Featured
          <IconFire class="w-6 rounded-full h-6 text-red-600" />
        </p>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'This website',
          description: 'My personal portfolio made with NuxtJS and WindiCSS',
          link: '/',
        },
        {
          title: 'MADE',
          description:
            "Awesome showcase for dotfiles and a wiki for ricing and for intruducing WM/DE's and ricing releated software to new users.",
          link: 'https://made.345dev.me',
        },
      ],
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
            featured: true,
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
            featured: true,
          },
          {
            name: 'Recommendations',
            to: '/recommends',
            desc: 'My daily song and weekly book recommendations.',
            featured: true,
          },
          {
            name: 'Dictionary',
            to: '/dictionary',
            desc: 'A dictionary for awkward Turkish words.',
          },
          {
            name: 'Utils',
            to: '/utils',
            desc: 'Useful tools for you like Opengraph viewer and generator.',
            featured: true,
          },
        ],
      },
      posts: []
    }
  },
  async fetch() {
    const latestPosts = await this.$content()
      .sortBy('date', 'desc')
      .limit(2)
      .without(['body'])
      .fetch()
    this.posts = latestPosts
  }
}
</script>

<style></style>
