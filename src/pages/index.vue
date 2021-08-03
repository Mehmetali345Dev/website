<template>
  <div class="grid justify-items-center dark:bg-gray-900">
    <Navbar />
    <AboutMe />
    <section id="skills" class="grid w-8/12 justify-items-center">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My Skills
      </h2>
      <div class="grid grid-cols-5 skills mt-4 gap-2">
        <Skills
          v-for="(skill, index) in skills"
          :key="`skill-${index}`"
          :skill="skill"
        />
      </div>
    </section>
    <section class="grid justify-items-center w-10/12" id="projects">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My Projects
      </h2>
      <div class="mx-2 grid gap-2 mt-4">
        <div
          class="grid gap-4 w-full justify-items-center sm:grid-cols-3 projects"
        >
          <ProjectCard
            v-for="(project, index) in getProjects.featured"
            :key="`project-featured-${index}`"
            :projectName="project.title"
            :projectImage="project.image"
            :link="project.link"
            :description="project.description"
          />
        </div>

        <div class="grid w-full gap-2 sm:grid-cols-2">
          <ProjectCard
            v-for="(project, index) in getProjects.rest"
            :link="project.link"
            :key="`project-rest-${index}`"
            :projectName="project.title"
            :description="project.description"
            class="h-full"
          />
        </div>
      </div>
    </section>
    <section class="grid justify-items-center w-10/12" id="repos">
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
          title: "345 Launcher",
          image: "https://i.vgy.me/4oVLsP.png",
          description: "Lightweight and advanced Minecraft Launcher",
          link: "https://github.com/mehmetali345dev/345-launcher",
        },
        {
          title: "Reponse",
          image: "https://i.vgy.me/QI8XPM.png",
          description: "Meet the chat app that respects your privacy",
          link: "https://reponse.netlify.app",
        },
        {
          title: "mehmetali345.xyz",
          image: "https://mehmetali345.xyz/icon.png",
          description: "My personal portfolio made by NuxtJS and WindiCSS",
          link: "/",
        },
      ],
      skills: [
        "Vue.js",
        "Javascript",
        "C#",
        "Nuxt.js",
        "WindiCSS",
        "Node.js",
        "Sass",
        "Dotnet",
        "Github",
        "Figma",
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
html {
  scroll-behavior: smooth;
}
@media screen and (max-device-width: 950px) {
  .projects {
    @apply sm:grid-cols-2;
  }
  .skills {
    @apply sm:grid-cols-3;
  }
}
</style>