<template>
  <nuxt-link
    :to="{
      name: 'blog-slug',
      params: { slug: getPostMeta.slug },
    }"
    class="grid bg-gray-400 w-full p-4 rounded-md dark:bg-gray-700"
  >
    <h1 class="font-bold text-lg">{{ getPostMeta.title }}</h1>
    <p class="text-sm line-clamp-2">{{ getPostMeta.description }}</p></nuxt-link
  >
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    getPostMeta() {
      return {
        title: this.post.title || "",
        slug: this.post.slug || "",
        description: this.post.description || "",
      };
    },
  },
};
</script>

<style>
</style>