<template>
  <div class="flex gap-3 flex-col w-full h-full">
    <p>Enter an URL to this textbox example is https://345dev.me</p>
    <input
      type="text"
      placeholder="Enter an URL"
      class="p-4 bg-gray-800 focus:outline-none rounded-md ring-2 placeholder-gray-400 dark:placeholder-gray-700 ring-green-600 bg-opacity-30"
      v-model="url"
    />
    <button
      class="focus:outline-none bg-green-600 p-2 w-full rounded-md font-bold text-2xl"
      @click="$fetch"
    >
      Fetch
    </button>
    <div class="text-2xl text-red-600 font-bold" v-if="$fetchState.error">
      Fetching metatag is failed!
    </div>
    <div
      v-else-if="$fetchState.pending"
      class="font-bold text-2xl flex items-center justify-center flex-grow"
    >
      Please wait fetching now!
    </div>
    <div v-else>
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-3 p-4 rounded-md bg-gray-900 bg-opacity-30">
          <a
            class="text-blue-600"
            v-if="tag.metadata.website"
            :href="tag.metadata.website"
            >{{ tag.metadata.website }}</a
          >
          <h1 v-if="tag.metadata.title" class="font-bold text-lg">
            Title: {{ tag.metadata.title }}
          </h1>
          <Skeleton
            type="image"
            class="h-full rounded-md"
            :imageUrl="tag.metadata.banner"
          />
          <div v-if="tag.metadata.description">
            <h1 class="font-bold text-lg">Description:</h1>
            <p>{{ tag.metadata.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://345dev.me',
      tag: [],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const url =
      process.env.NODE_ENV === 'production'
        ? `https://345dev.me/.netlify/functions/getMetatag?url=${this.url}`
        : `http://localhost:8888/.netlify/functions/getMetatag?url=${this.url}`

    const { data: meta } = await this.$axios.get(url)
    this.tag = meta
  },
   head() {
    const title = 'Metatag Viewer'
    const description =
      'Fetch metatag from a website and display it in a simple way'
    const href = `https://345dev.me/info/metatag`
    const object = {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `mehmetali345, mehmetali345 blog, blog, teknoloji, vue, yazılım, discord, mehmetali_345, gönderi`,
        },
        // Open-Graph
        {
          hid: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: href,
        },
        // Twitter
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ].map((i) => {
        if (i.name && !i.property) i.property = i.name
        return i
      }),
      link: [
        {
          rel: 'canonical',
          href,
        },
      ],
    }
    return object
  },
}
</script>

<style></style>
