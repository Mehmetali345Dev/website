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
        <div
          :class="`flex flex-col gap-3 p-4 rounded-md ${getThemeColor}`"
        >
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
import metaFetcher from 'meta-fetcher'

export default {
  data() {
    return {
      url: 'https://345dev.me',
      tag: [],
    }
  },
  async fetch() {
    if (this.url.length === 0) {
      alert('Please enter an URL')
    }
    const result = await metaFetcher(this.url)
    this.tag = result
  },
  computed: {
    getThemeColor() {
      if (this.tag.metadata.themeColor) return `bg-hex-${this.tag.metadata.themeColor}`
      else return 'bg-gray-900 bg-opacity-30'
    },
  },
}
</script>

<style></style>
