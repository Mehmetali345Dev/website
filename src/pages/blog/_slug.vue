<template>
  <div
    v-if="$fetchState.error"
    class="p-4 flex flex-col justify-center items-center w-full space-y-4"
  >
    <h1 class="font-bold">Gönderi bulunamadı...</h1>
    <nuxt-link
      to="/blog"
      class="bg-gray-900 bg-opacity-30 rounded-md p-4 flex justify-center text-xl font-bold"
      >Nası ya?</nuxt-link
    >
  </div>
  <div v-else class="flex-col items-center w-full flex">
    <header class="flex flex-col items-center">
      <div class="relative">
        <Skeleton
          type="image"
          :imageUrl="post.banner"
          class="h-60 rounded -mx-[4.25vw] md:-mx-0 filter dark:brightness-75"
        />
        <div class="absolute -mx-[4.25vw] md:-mx-0 bottom-5 left-5">
          <div class="bg-gray-900 bg-opacity-30 font-bold p-4 rounded">
            {{ getReadableDate(post.date) }}
          </div>
        </div>
      </div>
      <div class="w-full mt-4 bg-gray-900 bg-opacity-30 p-4 rounded">
        <h1 class="text-2xl font-bold">{{ post.title }}</h1>
        <p>{{ post.description }}</p>
      </div>
    </header>
    <article class="w-full">
      <nuxt-content :document="post" class="my-8" />
    </article>
    <div class="w-full">
      <Disqus
        shortname="345dev"
        :title="post.title"
        :url="`https://345dev.me/blog/${post.slug}`"
        :identifier="`/blog/${post.slug}`"
        :slug="post.slug"
        lang="tr"
        class="w-full"
      />
    </div>
    <div class="w-10/12 mt-4" v-if="related.length > 0">
      <h1 class="text-2xl font-bold">Benzer Gönderiler</h1>
      <div class="grid grid-cols-2">
        <CardPost
          type="rest"
          v-for="(post, index) in related"
          :key="`related-${index}`"
          :post="post"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus'
export default {
  components: { Disqus },
  data() {
    return {
      comments: false,
      post: {},
      related: [],
    }
  },
  async fetch() {
    const post = await this.$content(this.$route.params.slug).fetch()
    if (!post) return this.$router.push('/blog')
    this.post = post
    if (this.post.related) {
      const array = []
      for (let key of this.post.related.split(', ') || []) {
        const content = await this.$content(key)
          .only(['title', 'slug', 'description'])
          .fetch()
        array.push(content)
      }
      this.related = array
    }
  },
  head() {
    const title = this.post?.title
    const description =
      this.post?.description || 'Bu yazıyı okumaya davet edildin..'
    const image = this.getPostImage || false
    const href = `https://345dev.me${this.$route?.path}`
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
        {
          hid: 'og:image',
          name: 'og:image',
          content: image,
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
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image,
        },
        {
          name: 'article:published-time',
          content: this.post?.date || null,
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
  methods: {
    getReadableDate(data) {
      const now = this.$moment()
      const createdAt = this.$moment(data)
      const diff = now.diff(createdAt, 'days')
      if (diff === 0) return 'Bugün'
      else if (diff === 1) return 'Dün'
      else if (diff <= 30) return `${diff} gün önce`
      else if (diff >= 30 && diff <= 90)
        return `${Math.floor(diff / 30)} ay önce`
      else return createdAt.format('DD/MM/YYYY')
    },
  },
}
</script>

<style lang="scss"></style>
