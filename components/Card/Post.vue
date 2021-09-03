<template>
  <div>
    <nuxt-link
      v-if="type === 'latest'"
      class="
        grid
        justify-items-center
        bg-gray-300
        dark:bg-gray-800
        rounded-md
        py-4
        px-6
      "
      :to="{
        name: 'blog-slug',
        params: { slug: getPostMeta.slug },
      }"
    >
      <img :src="getPostMeta.image" class="h-32 rounded-md" alt="" />
      <h1 class="font-semibold text-lg">{{ getPostMeta.title }}</h1>
      <p class="text-gray-300 line-clamp-2 text-md text-center">
        {{ getPostMeta.description }}
      </p>
    </nuxt-link>
    <nuxt-link
      :to="{
        name: 'blog-slug',
        params: { slug: getPostMeta.slug },
      }"
      v-else-if="type === 'rest'"
      class="
        bg-gray-300
        dark:bg-gray-800
        flex
        items-center
        rounded-md
        px-6
        py-4
      "
    >
      <img
        :src="getPostMeta.image"
        class="rounded-md h-16 w-20 object-cover mr-3"
      />
      <div class="flex flex-col">
        <h1 class="font-semibold text-lg">{{ getPostMeta.title }}</h1>
        <p class="text-gray-300 line-clamp-2 text-sm text-left">
          {{ getPostMeta.description }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {},
    },
    type: {
      type: String,
      required: false,
      default: "normal",
    },
  },
  computed: {
    getPostMeta() {
      const image =
        this.post?.image || `/assets/images/posts/${this.post?.slug}.jpg` || "";
      return {
        title: this.post.title || "",
        description: this.post.description || "",
        slug: this.post.slug || "",
        special: this.post.special || false,
        tag: this.post?.tags?.[0] || "",
        image,
      };
    },
    /**
     * Returns post formatted post date that is nicer than the pure way.
     * @returns {string} The formatted date.
     */
    getPostDate() {
      return this.$getReadableDate(this.post.createdAt);
    },
  },
};
</script>

<style>
</style>