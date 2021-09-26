<template>
  <div class="grid justify-items-center">
    <div v-if="$fetchState.pending" class="items-center">Gönderiler alınıyor</div>
    <div v-else class="flex flex-col items-center w-full md:w-10/12">
      <h1 class="font-bold text-xl">Son Gönderiler</h1>
      <div class="grid md:grid-cols-3 w-full gap-3 mt-4">
        <CardPost
          type="latest"
          v-for="(post, index) in posts.latest"
          :key="`latest-${index}`"
          :post="post"
          class="w-full"
        />
      </div>
      <h1 v-if="posts.all.length > 0" class="font-bold text-xl mt-4">Diğer Gönderiler</h1>
      <div v-if="posts.all.length > 0" class="grid md:grid-cols-3 w-full gap-3 mt-4">
        <CardPost
          type="rest"
          v-for="(post, index) in posts.all"
          :key="`all-${index}`"
          :post="post"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: {},
      posts: {
        latest: [],
        all: [],
      },
    };
  },
  async fetch() {
    const latestPosts = await this.$content()
      .sortBy("date", "desc")
      .limit(3)
      .without(["body"])
      .fetch();
    const allPosts = await this.$content()
      .sortBy("date", "desc")
      .skip(3)
      .without(["body"])
      .fetch();

    this.posts = {
      latest: latestPosts || [],
      all: allPosts || [],
    };
  },
  computed: {

  },
    head() {
    const title = "Mehmetali345Dev - Blog"
    const description = "Mehmetali345Dev'in projelerini konuştuğu ve boş yaptığı blog sayfası."
    const href = `https://mehmetali345.xyz/blog`;
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
};
</script>

<style>
</style>
