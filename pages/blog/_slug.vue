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
    <nuxt-content :document="post" class="mt-6 w-full px-4" />
    <div class="grid w-full">
      <button
        @click="showComment()"
        class="
          p-4
          w-full
          flex
          items-center
          bg-gray-300
          dark:bg-gray-800
          rounded-md
          space-x-3
          justify-center
        "
      >
        <Icon v-if="$colorMode.value === 'light'" name="comment-dark" />
        <Icon v-else name="comment-light" />
        <h1 class="text-2xl font-bold">{{ commentBut }}</h1>
      </button>
      <Disqus
        v-if="comments"
        shortname="mehmetali345"
        :title="post.title"
        :url="`https://mehmetali345.xyz/blog/${post.slug}`"
        :identifier="`/blog/${post.slug}`"
        :slug="post.slug"
        lang="tr"
        class="mt-10 w-full"
      />
    </div>
  </div>
</template>

<script>
import { Disqus } from "vue-disqus";
export default {
  components: {
    Disqus,
  },
  data() {
    return {
      comments: false,
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
    showComment() {
      if (this.comments === true) {
        this.comments = false;
      } else {
        this.comments = true;
      }
    },
  },
  computed: {
    commentBut() {
      if (this.comments === true) {
        return "Close Comments";
      } else {
        return "See Comments";
      }
    },
  },
};
</script>

<style lang="scss">
</style>