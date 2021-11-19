<template>
  <div class="flex flex-col items-start">
    <div class="grid">
      <h1 class="text-xl font-bold">Projects are made by me</h1>
      <div class="grid gap-3 sm:grid-cols-3 mt-2">
        <CardProject
          :project="project"
          v-for="(project, index) in projects"
          :key="`project-${index}`"
        />
      </div>
    </div>
    <div class="grid mt-2 w-full">
      <h1 class="text-xl font-bold">My repos</h1>
      <div v-if="$fetchState.pending" class="grid gap-3 sm:grid-cols-3 mt-2">
        <Skeleton
          type="repository"
          v-for="index in 9"
          :key="index"
          class="w-full h-full"
        />
      </div>
      <div v-else-if="$fetchState.error">
        Couldn't load GitHub repositories.
      </div>

      <div v-else-if="repos.length > 0" class="grid gap-3 sm:grid-cols-3 mt-2">
        <a
          v-for="(repo, index) in repos"
          :key="`repo-${index}`"
          :href="repo.html_url"
          target="_blank"
          class="w-full"
          rel="noreferrer"
          title="Click here to visit this repository"
        >
          <CardRepo
            :name="repo.name"
            :stars="repo.stargazers_count"
            :description="repo.description"
            class="h-full w-full"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repos: [],
      projects: [
        {
          title: '345 Launcher',
          image: 'https://i.vgy.me/4oVLsP.png',
          description: 'Lightweight and advanced Minecraft Launcher',
          link: 'https://github.com/mehmetali345dev/345-launcher',
        },
        {
          title: 'RepeatPay',
          image: 'https://repeatpay.ga/icon.png',
          description:
            'New open-source donate system for community. Easy, fast and secure.',
          link: 'https://repeatpay.ga',
        },
        {
          title: 'mehmetali345.xyz',
          image: 'https://mehmetali345.xyz/icon.png',
          description: 'My personal portfolio made by NuxtJS and WindiCSS',
          link: '/',
        },
      ],
    }
  },
  computed: {
    getProjects() {
      return {
        featured: this.projects?.slice(0, 3),
        rest: this.projects.slice(3),
      }
    },
  },
  fetchOnServer: false,
  async fetch() {
    const { data: repos } = await this.$axios.get(
      'https://api.github.com/users/mehmetali345dev/repos?per_page=100'
    )
    this.repos = repos
      ?.filter((repo) => repo.fork === false)
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count)
  },
}
</script>

<style></style>
