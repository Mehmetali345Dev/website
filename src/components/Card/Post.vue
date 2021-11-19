<template>
  <nuxt-link
    v-if="type == 'latest'"
    :to="{
      name: 'blog-slug',
      params: { slug: getPostMeta.slug },
    }"
    class="bg-gray-900 flex bg-opacity-30 items-center rounded-md px-6 py-4"
  >
    <img
      :src="getPostMeta.image"
      class="rounded-md h-16 w-20 object-cover mr-3"
    />
    <div class="flex flex-col">
      <h1 class="font-semibold text-lg">{{ getPostMeta.title }}</h1>
      <p class="line-clamp-2 text-sm text-left">
        {{ getPostMeta.description }}
      </p>
    </div>
  </nuxt-link>
  <nuxt-link
    v-else
    :to="{
      name: 'blog-slug',
      params: { slug: getPostMeta.slug },
    }"
    class="bg-gray-900 flex bg-opacity-30 items-center rounded-md px-6 py-4"
  >
    <div class="flex flex-col">
      <h1 class="font-semibold text-lg">{{ getPostMeta.title }}</h1>
      <p class="line-clamp-2 text-sm text-left">
        {{ getPostMeta.description }}
      </p>
    </div>
  </nuxt-link>
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
      default: 'normal',
    },
  },
  computed: {
    getPostMeta() {
      const image =
        this.post?.image || `/assets/images/posts/${this.post?.slug}.jpg` || ''
      return {
        title: this.post.title || '',
        description: this.post.description || '',
        slug: this.post.slug || '',
        special: this.post.special || false,
        tag: this.post?.tags?.[0] || '',
        image,
      }
    },
  },
}
</script>

<style></style>
