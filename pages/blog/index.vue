<template>
  <div class="grid justify-items-center">
    <h1>Şuanlık aktif değil</h1>
    <!--
    <div v-if="$fetchState.pending" class="items-center">
      Gönderiler alınıyor
    </div>
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
      <h1 class="font-bold text-xl mt-4">Diğer Gönderiler</h1>
      <div class="grid md:grid-cols-3 w-full gap-3 mt-4">
        <CardPost
          type="rest"
          v-for="(post, index) in posts.all"
          :key="`all-${index}`"
          :post="post"
          class="w-full"
        />
      </div>
    </div>
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: {},
      pagination: 0,
      posts: {
        latest: [],
        all: [],
      },
    };
  },
  async fetch() {
    const latestPosts = await this.$content()
      .sortBy("createdAt", "desc")
      .limit(3)
      .without(["body"])
      .fetch();
    const allPosts = await this.$content()
      .sortBy("createdAt", "desc")
      .skip(3)
      .without(["body"])
      .fetch();
    this.posts = {
      latest: latestPosts || [],
      all: allPosts || [],
    };
  },
};
</script>

<style>
</style>