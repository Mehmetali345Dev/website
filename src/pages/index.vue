<template>
  <div class="flex flex-col items-center">
    <header
      class="flex w-9/12 h-max flex-col sm:flex-row items-center sm:items-start bg-gray-300 dark:bg-gray-800 p-8 rounded-md"
    >
      <div class="sm:(flex text-left) text-center items-center">
        <img src="/profile.webp" class="w-64 mr-4" alt="Mehmetali345Dev" />
        <h1 class="font-semibold text-xl grid sm:justify-items-start justify-items-center">
          <Discord class="my-2" />Hello, my name is
          <span class="text-green-500 text-2xl">Mehmet Ali (aka Mehmetali345Dev)</span>
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
    <section class="mt-2 w-9/12 grid justify-items-center">
      <h1 class="text-xl mb-4 font-bold">I use</h1>

      <div class="grid md:grid-cols-5 grid-cols-2 gap-3">
        <CardUse
          v-for="(technology, index) in technologies"
          :key="`technology-${index}`"
          :name="technology"
        />
      </div>
    </section>
    <section class="grid w-9/12 mb-8 mt-6 justify-items-center" id="projects">
      <h1 class="text-xl mb-4 font-bold">My Projects</h1>
      <div class="grid justify-items-start space-y-3 w-full">
        <CardProject
          v-animate-onscroll="'animated animate-fade-in'"
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
    <nuxt-link
      class="w-9/12 text-center dark:bg-gray-800 bg-gray-300 p-4 rounded-md"
      to="/repos"
    >See my repositories</nuxt-link>
  </div>
</template>

<style>
.biolinks {
  text-decoration: underline 0.1rem #10b981;
}
</style>

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
};
</script>
