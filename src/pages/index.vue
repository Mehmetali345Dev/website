<template>
  <div class="flex flex-col items-center">
    <div class="flex justify-center bg-green-600 morphing">
      <header
        class="flex w-11/12 h-max flex-col sm:flex-row items-center sm:items-start p-8 rounded-md"
      >
        <div class="sm:(flex text-left) text-center items-center">
          <img src="/profile.webp" class="w-64 mr-4" alt="Mehmetali345Dev" />
          <h1 class="font-semibold text-xl grid sm:justify-items-start justify-items-center">
            <Discord class="my-2" />Hello, my name is
            <span class="text-blue-800 text-2xl">Mehmet Ali (aka Mehmetali345Dev)</span>
            <p>
              I am a young developer(I'm 14 years old) from Turkey. I write
              desktop programs and web applications using
              <a
                href="https://www.vuejs.org/"
                rel="noopener noreferrer"
                class="biolinks"
                target="_blank"
              >Vue.js,</a>
              <a
                href="https://www.javascript.com/"
                class="biolinks"
                target="_blank"
                rel="noopener noreferrer"
              >JavaScript</a>
              and
              <a
                href="https://github.com/topics/csharp"
                rel="noopener noreferrer"
                class="biolinks"
                target="_blank"
              >C#</a>.
            </p>
          </h1>
        </div>
      </header>
    </div>

    <div class="grid mt-4 md:grid-cols-2 w-11/12 gap-3">
      <div class="grid gap-2 rounded-md">
        <section class="grid justify-items-center h-max" id="projects">
          <h1 class="text-xl mb-4 font-bold">My Projects</h1>
          <div class="grid justify-items-start space-y-3 w-full">
            <CardProject
              v-animate-onscroll="'animated animate-slide-in-left'"
              v-for="(project, index) in projects"
              :link="project.link"
              :key="`project-${index}`"
              :name="project.title"
              :image="project.image"
              :description="project.description"
              class="w-full"
            />
          </div>
        </section>
      </div>
      <div class="flex flex-col rounded-md w-full items-center">
        <section class="grid h-full w-full justify-items-center">
          <h1 class="text-xl mb-4 font-bold">Technologies I use</h1>
          <div class="grid grid-cols-2 w-full gap-3">
            <CardTechnology
              v-animate-onscroll="'animated animate-slide-in-right'"
              v-for="(technology, index) in technologies"
              :key="`technology-${index}`"
              :name="technology"
            />
          </div>
        </section>
      </div>
    </div>
    <div class="grid justify-items-center mt-4 gap-2 w-11/12">
      <h1 class="text-xl font-bold mb-4">My Repositories</h1>
      <div class="grid md:grid-cols-3 gap-2">
        <a
          v-for="(repo, index) in repos"
          :key="`repo-${index}`"
          :href="repo.html_url"
          target="_blank"
          class="w-full"
          v-animate-onscroll="'animated animate-slide-in-right'"
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

<style>
.biolinks {
  text-decoration: underline 0.1rem #10b981;
}
.morphing {
  animation: morphing 10s ease-in-out infinite;
}
@keyframes morphing {
  0% {
    border-radius: 40% 70% 70% 30%/30% 30% 70% 70%;
    -webkit-box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
    box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
  }
  25% {
    border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
    -webkit-box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
    box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
  }
  75% {
    border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      repos: [],
      projects: [
        {
          title: "345 Launcher",
          image: "https://i.vgy.me/4oVLsP.png",
          description: "Lightweight and advanced Minecraft Launcher",
          link: "https://github.com/mehmetali345dev/345-launcher",
        },
        {
          title: "RepeatPay",
          image: "https://repeatpay.ga/icon.png",
          description:
            "New open-source donate system for community. Easy, fast and secure.",
          link: "https://repeatpay.ga",
        },
        {
          title: "mehmetali345.xyz",
          image: "https://mehmetali345.xyz/icon.png",
          description: "My personal portfolio made by NuxtJS and WindiCSS",
          link: "/",
        },
      ],
      technologies: [
        "JavaScript",
        "C#",
        "Vue.js",
        "Nuxt.js",
        "WindiCSS",
        "Firebase",
        "Node.js",
        "Sass",
        "Dotnet",
        "Github",
        "Figma",
      ],
    };
  },
  async fetch() {
    const { data: repos } = await this.$axios.get(
      "https://api.github.com/users/mehmetali345dev/repos?per_page=100"
    );

    this.repos = repos
      ?.filter(repo => repo.fork === false)
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count);
  }
};
</script>
