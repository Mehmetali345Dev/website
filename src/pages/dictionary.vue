<template>
  <div class="flex w-full flex-col items-start gap-2 justify-start">
    <header class="flex flex-col gap-2 w-full">
      <p>
        This is an dictionary for awkward Turkish words. Made with Firebase.
      </p>
    </header>
    <div v-if="$fetchState.pending" class="w-full grid md:grid-cols-3 gap-3">
      <Skeleton type="word" v-for="index in 6" :key="index" />
    </div>
    <div v-else class="w-full grid md:grid-cols-3 gap-3">
      <CardWord
        v-for="(item, index) in items"
        :key="`items-${index}`"
        :word="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {},
      search: '',
    }
  },
  fetchOnServer: false,
  async fetch() {
    const ref = this.$fire.firestore.collection('dictionary')

    const allwords = []

    await ref
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allwords.push(doc.data())
        })
      })
      .catch((err) => {
        alert(err.message)
      })

    this.items = allwords
  },
  head() {
    const title = 'Dictionary'
    const description =
      'This is an dictionary for awkward Turkish words. Made with Firebase.'
    const href = `https://345dev.me/dictionary`
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
          content: `turkish, english, words, dictionary, firebase, mehmetali345, mehmetali345 blog, blog, teknoloji, vue, yazılım, discord, mehmetali_345, gönderi`,
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
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://345dev.me/banners/dictionary.png',
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
