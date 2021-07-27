<template>
  <div class="grid justify-items-center grid-cols-3 gap-2 mt-4">
    <ProjectCard
      v-for="(project, index) in getProjects.featured"
      :key="`project-featured-${index}`"
      :projectName="project.title"
      :projectImage="project.image"
      :description="project.description"
    />
    <ProjectCard
      v-for="(project, index) in getProjects.rest"
      :key="`project-rest-${index}`"
      :projectName="project.title"
      :description="project.description"
      class="h-full"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "345 Launcher",
          image: "https://picsum.photos/200/200",
          description:
            "Pariatur sunt ad id pariatur enim fugiat sunt sit eiusmod quis deserunt laboris cillum laboris. Nulla ea dolor sint proident laboris amet nisi ullamco laborum aliquip nostrud dolore. Adipisicing deserunt est sit ea eiusmod.",
        },
        {
          title: "345 Launcher",
          image: "https://picsum.photos/200/200",
          description:
            "Pariatur sunt ad id pariatur enim fugiat sunt sit eiusmod quis deserunt laboris cillum laboris. Nulla ea dolor sint proident laboris amet nisi ullamco laborum aliquip nostrud dolore. Adipisicing deserunt est sit ea eiusmod.",
        },
        {
          title: "345 Launcher",
          image: "https://picsum.photos/200/200",
          description:
            "Pariatur sunt ad id pariatur enim fugiat sunt sit eiusmod quis deserunt laboris cillum laboris. Nulla ea dolor sint proident laboris amet nisi ullamco laborum aliquip nostrud dolore. Adipisicing deserunt est sit ea eiusmod.",
        },
        {
          title: "345 Launcher",
          image: "https://picsum.photos/200/200",
          description:
            "Pariatur sunt ad id pariatur enim fugiat sunt sit eiusmod quis deserunt laboris cillum laboris. Nulla ea dolor sint proident laboris amet nisi ullamco laborum aliquip nostrud dolore. Adipisicing deserunt est sit ea eiusmod.",
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