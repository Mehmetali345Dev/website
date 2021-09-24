<template>
  <div class="grid sm:w-9/12 rounded-md bg-gray-300 dark:bg-gray-800 justify-items-center">
    <div v-if="$fetchState.error" class="p-4 space-y-4">
      <h1>Gönderi bulunamadı...</h1>
      <nuxt-link
        to="/blog"
        class="dark:bg-gray-700 rounded-md p-4 w-full bg-gray-400 flex justify-center text-xl font-bold"
      >Geri dönim</nuxt-link>
    </div>
    <div v-else>
      <header class="w-full">
        <div
          class="grid text-center justify-items-center sm:justify-items-start m-8 rounded-md sm:text-left p-4 dark:bg-gray-700 bg-gray-400"
        >
          <h1 class="text-3xl font-bold">{{ post.title }}</h1>
          <p class="mt-2">{{ post.description }}</p>
          <div
            v-if="post.date"
            class="py-2 px-4 mt-2 rounded-md w-max dark:bg-gray-800 bg-gray-300"
          >{{ getReadableDate(post.date) }}</div>
        </div>
      </header>
      <div class="w-full">
        <nuxt-content :document="post" class="mx-4 px-4" />
      </div>
      <div class="grid w-full mt-8">
        <button
          @click="showComment()"
          class="p-4 m-4 flex items-center bg-green-600 rounded-md space-x-3 justify-center focus:outline-none"
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
      <div v-if="!related.loaded && post.related" class="w-full">
        <div class="grid space-y-3 justify-items-center mx-4 mb-4 p-4">
          <h1 class="text-xl font-bold">İlginizi çekebilecek gönderiler</h1>
          <div class="grid w-full sm:grid-cols-2">
            <CardRelated v-for="(related, index) in related" :post="related" :key="index" />
          </div>
        </div>
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
    };
  },
  async fetch() {
    const post = await this.$content(this.$route.params.slug).fetch();
    if (!post) return this.$router.push("/blog");
    this.post = post;
    if (this.post.related) {
      const array = [];
      for (let key of this.post.related.split(", ") || []) {
        const content = await this.$content(key)
          .only(["title", "slug", "description"])
          .fetch();
        array.push(content);
      }
      this.related = array;
    }
  },
  head() {
    const title = this.post?.title;
    const description =
      this.post?.description || "Bu yazıyı okumaya davet edildin..";
    const image = this.getPostImage || false;
    const href = `https://mehmetali345.xyz${this.$route?.path}`;
    const object = {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: `mehmetali345, mehmetali345 blog, blog, teknoloji, vue, yazılım, discord, mehmetali_345, gönderi`,
        },
        // Open-Graph
        {
          hid: "og:title",
          name: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: description,
        },
        {
          hid: "og:url",
          name: "og:url",
          content: href,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: image,
        },
        // Twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },
        {
          name: "article:published-time",
          content: this.post?.date || null,
        },
      ].map((i) => {
        if (i.name && !i.property) i.property = i.name;
        return i;
      }),
      link: [
        {
          rel: "canonical",
          href,
        },
      ],
    };
    return object;
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
        return "Yorumları kapa";
      } else {
        return "Yorumları gör";
      }
    },
  },
};
</script>

<style lang="scss">
</style>
