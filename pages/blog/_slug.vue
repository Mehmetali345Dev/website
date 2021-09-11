<template>
  <div class="grid justify-items-center">
    <header
      class="
        grid
        text-center
        justify-items-center
        sm:justify-items-start
        w-full
        sm:text-left
      "
    >
      <h1 class="text-3xl font-bold">{{ post.slug }}</h1>
      <p class="mt-2">{{ post.description }}</p>
      <div
        v-if="post.date"
        class="py-2 px-4 mt-2 rounded-md w-max dark:bg-gray-800 bg-gray-300"
      >
        {{ getReadableDate(post.date) }}
      </div>
    </header>
    <nuxt-content :document="post" class="mt-4 w-full px-4" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      related: [],
    };
  },
  async fetch() {
    const post = await this.$content(this.$route.params.slug).fetch();
    if (!post) return this.$router.push("/blog");
    this.post = post;
  },
  methods: {
    getReadableDate(data) {
      const now = this.$moment();
      const createdAt = this.$moment(data);
      const diff = now.diff(createdAt, "days");

      if (diff === 0) return "Bugün";
      else if (diff === 1) return "Dün";
      else if (diff <= 30) return `${diff} gün önce`;
      else if (diff >= 30 && diff <= 90)
        return `${Math.floor(diff / 30)} ay önce`;
      else return createdAt.format("DD/MM/YYYY");
    },
  },
};
</script>

<style lang="scss">
.nuxt-content {
  h1 {
    @apply text-2xl text-green-500 font-bold;
  }
}
</style>