<template>
  <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 w-8/12 mt-4">
    <a
      v-for="(repo, index) in repos"
      :key="`repo-${index}`"
      :href="repo.link"
      target="_blank"
      rel="noreferrer"
      title="Click here to visit this repository"
    >
      <RepoCard
        :name="repo.repo"
        :language="repo.language"
        :stars="repo.stars"
        :description="repo.description"
        class="h-full"
      />
    </a>
  </div>
</template>

<script>
export default {
  async fetch() {
    const { data: repos } = await this.$axios.get(
      "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=mehmetali345dev"
    );
    this.repos = repos?.sort((a, b) => b?.stars - a?.stars);
  },
  data() {
    return {
      repos: [],
    };
  },
};
</script>

<style>
</style>