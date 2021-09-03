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
  computed: {
    getUser() {
      return this.$config.config;
    },
  },
  async fetch() {
    const { data: repos } = await this.$axios.get(
      "https://gh-pinned-repos.egoist.sh/?username=" + this.getUser.user
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
