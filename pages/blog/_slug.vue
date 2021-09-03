<template>
  <div>
    <nuxt-content :document="post" />
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
};
</script>

<style>
</style>