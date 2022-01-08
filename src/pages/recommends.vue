<template>
  <div class="flex flex-col w-full items-start justify-center gap-3">
    <h1 class="font-bold text-2xl">SONG OF TODAY!</h1>
    <Skeleton type="song" v-if="$fetchState.pending" />
    <div v-else-if="$fetchState.error" class="text-red-500">ERROR!</div>
    <CardSong :song="songs" v-else />
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: [],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const ref = this.$fire.firestore.collection('songs')

    const date = new Date()
    const today =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()

    await ref
      .doc(today)
      .get()
      .then((doc) => {
        this.songs = doc.data()
      })
      .catch((err) => {
        alert(err.message)
      })
  },
  head() {
    const title = 'Recommendations'
    const description =
      'You can see daily song and weekly book recommendations from this page.'
    const href = `https://345dev.me/recommends`
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
