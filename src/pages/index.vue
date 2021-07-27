<template>
  <div class="grid justify-items-center dark:bg-gray-900">
    <Navbar />
    <AboutMe />
    <section class="grid justify-items-center w-8/12" id="projects">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My Projects
      </h2>
      <div class="grid gap-2 mt-4">
        <div class="grid gap-2 w-full justify-items-center sm:grid-cols-3">
          <ProjectCard
            v-for="(project, index) in getProjects.featured"
            :key="`project-featured-${index}`"
            :projectName="project.title"
            :projectImage="project.image"
            :description="project.description"
          />
        </div>

        <div class="grid w-full sm:grid-cols-2">
          <ProjectCard
            v-for="(project, index) in getProjects.rest"
            :key="`project-rest-${index}`"
            :projectName="project.title"
            :description="project.description"
            class="h-full"
          />
        </div>
      </div>
    </section>
    <section class="grid justify-items-center w-8/12" id="repos">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My GitHub repositories
      </h2>
      <RepoSection class="w-full" />
    </section>
    <section id="donate" class="grid w-8/12 justify-items-center mb-16">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My Donate Links
      </h2>
      <Donate class="mt-4 w-full" />
    </section>
    <Footer class="mt-16 mb-4" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Bruh",
          image: "https://i.vgy.me/4oVLsP.png",
          description: "Hi Guys",
        },
        {
          title: "Bruh",
          image: "https://i.vgy.me/4oVLsP.png",
          description: "Hi Guys",
        },
        {
          title: "Bruh",
          image: "https://i.vgy.me/4oVLsP.png",
          description: "Hi Guys",
        },
        {
          title: "Bruh",
          image: "https://i.vgy.me/4oVLsP.png",
          description: "Hi Guys",
        },
      ],
    };
  },
  computed: {
    getProjects() {
      return {
        featured: this.projects?.slice(0, 3),
        rest: this.projects.slice(3),
      };
    },
  },
};
</script>

<style>
</style>