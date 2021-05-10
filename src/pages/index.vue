<template>
  <div>
    <header class="flex flex-col-reverse py-24 sm:items-center sm:flex-row">
      <div class="sm:w-8/12">
        <div class="space-y-px">
          <div
            class="text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl dark:text-gray-100"
          >
            <h1>Young</h1>
            <h1><span class="text-green-500">Developer</span></h1>
          </div>

          <p class="text-gray-800 dark:text-gray-200">
Hello, I am Mehmet Ali (aka Mehmetali_345) I am a young developer. I write desktop programs and web applications using javascript and C#.
How much it takes to share my code with people and how to code or write software for people? I like to explain that it's fun.
          </p>
        </div>

        <Status class="mt-2" />
      </div>

      <div class="flex flex-shrink-0 mb-8 sm:justify-end sm:mb-0 sm:w-4/12">
        <SkeletonLoader
          type="image"
          image-url="/assets/images/irl_image.webp"
          class="w-40 h-40 rounded-full ring-4 ring-gray-200 dark:ring-gray-700"
        />
      </div>
    </header>

   

    <section id="technologies" class="mt-6">
      <h3
        class="mt-4 text-xl font-semibold text-gray-900 sm:mt-10 dark:text-gray-100"
      >
        Technologies I use
      </h3>

      <div class="grid grid-cols-2 gap-2 mt-4 sm:grid-cols-3 md:grid-cols-4">
        <CardSkill
          v-for="(skill, index) in skills"
          :key="`skill-${index}`"
          :title="skill"
        />
      </div>
    </section>
<section id="projects">
      <h2 class="mt-10 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Projects I currently work on
      </h2>

      <div class="grid gap-2 mt-2 sm:gap-4 sm:grid-cols-3">
        <div
          v-for="(project, index) in getProjects.featured"
          :key="`project-featured-${index}`"
        >
          <nuxt-link v-if="project.to" :to="project.to">
            <CardProject
              :title="project.title"
              :description="project.description"
              :image="project.image"
              class="h-full"
            />
          </nuxt-link>

          <a
            v-else-if="project.href"
            :href="`${project.href}?utm_source=mehmetali345.xyz`"
            rel="noreferrer"
            target="_blank"
            title="Click to visit this project"
          >
            <CardProject
              :title="project.title"
              :description="project.description"
              :image="project.image"
              class="h-full"
            />
          </a>

          <CardProject
            v-else
            :title="project.title"
            :description="project.description"
            :image="project.image"
            class="h-full"
          />
        </div>
      </div>

      <div class="grid gap-2 mt-2 sm:mt-4 sm:gap-4 sm:grid-cols-3">
        <nuxt-link
          v-for="(project, index) in getProjects.rest"
          :key="`project-rest-${index}`"
          :to="project.to"
        >
          <CardProject
            :title="project.title"
            :description="project.description"
            class="h-full"
          />
        </nuxt-link>
      </div>
    </section>

    <section id="repositories" class="mt-6">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My GitHub repositories
      </h2>

      <div class="mt-4">
        <div
          v-if="$fetchState.pending"
          class="grid grid-cols-1 gap-2 sm:grid-cols-2"
        >
          <SkeletonLoader
            v-for="item in 6"
            :key="`repo-skeleton-${item}`"
            type="repository"
          />
        </div>

        <div v-else-if="$fetchState.error">
          Couldn't load GitHub repositories.
        </div>

        <div
          v-else-if="repos.length > 0"
          class="grid grid-cols-1 gap-2 sm:grid-cols-2"
        >
          <a
            v-for="(repo, index) in repos"
            :key="`repo-${index}`"
            :href="repo.html_url"
            target="_blank"
            rel="noreferrer"
            title="Click here to visit this repository"
          >
            <CardRepository
              :name="repo.name"
              :language="repo.language"
              :stars="repo.stargazers_count"
              :description="repo.description"
              class="h-full"
            />
          </a>
        </div>
      </div>
    </section>

    <section id="socials" class="mt-6">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        Follow me
      </h2>

      <Socials class="mt-2" />
    </section>
  </div>
</template>

    

<script>
export default {
  data() {
    return {
      repos: [],
      projects: [
        {
          title: "345 Launcher",
          description:
            "Fast and Advanced Minecraft Launcher!",
          image: "https://i.vgy.me/4oVLsP.png",
          href: "https://launcher.mehmetali345.xyz",
        },     
      ],
      skills: [
        "C#",
        "JavaScript",
        "HTML5",
        "Nuxt.js",
        "Vue.js",
        "Tailwind CSS",
        "Node.js",
        "Sass",
        "Firebase",
      ],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const filter = ["Mehmetali345Dev", "basic-chat","discord-rpc", "katilcivciv-site", "345teamsite", "launcher-site", "anakinium", "music-app", "dcutilities", "gzb"]
    const { data: repos } = await this.$axios.get(
      "https://api.github.com/users/Mehmetali345Dev/repos"
    )

    this.repos = repos
      ?.filter((repo) => repo.fork === false && !filter.includes(repo.name))
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count)
  },
  head: {
    title: "Home",
  },
  computed: {
    /**
     * Slices the first three projects and creates an object with them, and the rest.
     * @returns {{featured: object[], rest: object[]}} The projects array.
     */
    getProjects() {
      return {
        featured: this.projects?.slice(0, 3),
        rest: this.projects.slice(3),
      }
    },
  },
}
</script>
