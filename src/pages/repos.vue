<template>
  <div class="flex flex-col h-full items-center">
    <div v-if="$fetchState.pending">
      <h1>Please wait while fetching repos</h1>
    </div>

    <div v-else>
      <h1 class="text-lg mb-2 font-bold">All Repos</h1>

      <div class="grid">
        <div class="grid gap-3 sm:grid-cols-3">
          <a
            v-for="(pin, index) in pins"
            :key="`pin-${index}`"
            :href="pin.link"
            target="_blank"
            rel="noreferrer"
            title="Click here to visit this repository"
          >
            <CardRepo
              :name="pin.repo"
              :stars="pin.stars"
              :description="pin.description"
              class="h-full "
            />
          </a>

          <a
            v-for="(repo, index) in repos"
            :key="`repo-${index}`"
            :href="repo.html_url"
            target="_blank"
            rel="noreferrer"
            title="Click here to visit this repository"
          >
            <CardRepo
              :name="repo.name"
              :stars="repo.stargazers_count"
              :description="repo.description"
              class="h-full"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pins: [],
      repos: [],
    };
  },
  async fetch() {
    //Filter your some repospinned
    const { data: pins } = await this.$axios.get(
      "https://gh-pinned-repos.egoist.sh/?username=mehmetali345dev"
    );
    this.pins = pins.sort((a, b) => b?.stars - a?.stars);

    const filter = [
      "RepeatPay",
      "mehmetali345.xyz",
      "345-Launcher",
      "bloggy",
      "github-visualizer",
      "ward-site",
    ];

    const { data: repos } = await this.$axios.get(
      "https://api.github.com/users/mehmetali345dev/repos?per_page=100"
    );

    this.repos = repos
      ?.filter((repo) => repo.fork === false && !filter.includes(repo.name))
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count);
  },
};
</script>

<style>
</style>
