<template>
  <div
    v-if="$fetchState.error"
    class="p-4 flex flex-col justify-center items-center w-full space-y-4"
  >
    <h1 class="font-bold">Gönderi bulunamadı...</h1>
    <nuxt-link
      to="/blog"
      class="
        bg-gray-900 bg-opacity-30
        rounded-md
        p-4
        flex
        justify-center
        text-xl
        font-bold
      "
      >Nası ya?</nuxt-link
    >
  </div>
  <div v-else class="flex-col items-center w-full flex">
    <header>
      <div class="relative">
        <Skeleton
          type="image"
          :imageUrl="post.banner"
          class="h-60 rounded -mx-[4.25vw] filter dark:brightness-75"
        />
        <div class="absolute -mx-[4.25vw] md:-mx-0 bottom-5 left-5">
          <div class="bg-gray-900 bg-opacity-30 font-bold p-4 rounded">
            {{ getReadableDate(post.date) }}
          </div>
        </div>
      </div>
      <div class="mt-4 bg-gray-900 bg-opacity-30 p-4 rounded">
        <h1 class="text-2xl font-bold">{{ post.title }}</h1>
        <p>{{ post.description }}</p>
      </div>
    </header>
    <article><nuxt-content :document="post" class="mt-8" /></article>
  </div>
</template>

<script>
export default {
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
    const href = `https://mehmetali345.xyz${this.$route?.path}`
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
    showComment() {
      if (this.comments === true) {
        this.comments = false
      } else {
        this.comments = true
      }
    },
  },
}
</script>

<style lang="scss">

.nuxt-content {
  @apply space-y-2;
  h1 {
    @apply text-2xl text-green-500 font-bold;
  }
  h2 {
    @apply text-xl text-green-500 font-bold;
  }
  h3,
  h4,
  h5 {
    @apply text-lg text-green-500;
  }
  li {
    @apply py-1;
  }
  a {
    @apply text-green-500 underline;
  }
  p {
    @apply text-gray-900 dark:text-gray-200;
  }
  img {
    @apply rounded my-2;
  }
  &:not(:last-child) {
    @apply mb-5;
  }
  &.text-center {
    @apply flex justify-center;
  }
  strong {
    @apply font-medium text-gray-900 dark:text-gray-100;
  }
}
</style>
