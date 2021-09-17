<template>
  <div
    class="grid rounded-md bg-gray-300 dark:bg-gray-800 justify-items-center"
  >
    <header
      class="
        grid
        text-center
        justify-items-center
        sm:justify-items-start
        m-8
        dark:bg-gray-700
        bg-gray-400
        p-4
        rounded-md
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
    <nuxt-content :document="post" class="mx-4 px-4" />
    <div class="grid w-full">
      <button
        @click="showComment()"
        class="
          p-4
          m-4
          flex
          items-center
          bg-green-600
          rounded-md
          space-x-3
          justify-center
          focus:outline-none
        "
      >
        <Icon v-if="$colorMode.value === 'light'" name="comment-dark" />
        <Icon v-else name="comment-light" />
        <h1 class="text-2xl font-bold">{{ commentBut }}</h1>
      </button>
      <div class="m-8" v-if="comments">
        <Disqus
          shortname="mehmetali345"
          :title="post.title"
          :url="`https://mehmetali345.xyz/blog/${post.slug}`"
          :identifier="`/blog/${post.slug}`"
          :slug="post.slug"
          lang="tr"
          class="w-full"
        />
      </div>
    </div>
    <div v-if="srelated" class="grid w-full justify-items-center mb-4 p-4">
      <h1 class="text-xl mb-2 font-bold">İlginizi çekebilecek gönderiler</h1>
      <div class="grid w-full sm:grid-cols-2">
        <CardRelated
          v-for="(related, index) in related"
          :post="related"
          :key="index"
        />
      </div>
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
      srelated: true,
    };
  },
  async fetch() {
    const post = await this.$content(this.$route.params.slug).fetch();
    if (!post) return this.$router.push("/blog");
    this.post = post;

    if (!this.post.related) {
      this.srelated = false;
    }
    const array = [];
    for (let key of this.post.related.split(", ") || []) {
      const content = await this.$content(key).only(["title", "slug"]).fetch();
      array.push(content);
    }
    this.related = array;
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
    async getRelatedPost() {},
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