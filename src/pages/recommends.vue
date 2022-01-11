<template>
  <div class="flex flex-col w-full items-start justify-center gap-3">
    <div
      v-if="noSongToday"
      class="bg-opacity-30 p-4 w-full bg-red-600 border-l-4 border-red-600 rounded-md dark:border-red-600 font-bold"
    >
      No song for today! **Sad Trombone**
    </div>
    <Skeleton type="song" v-if="$fetchState.pending" />
    <div v-else-if="$fetchState.error" class="text-red-500">ERROR!</div>
    <CardSong :song="songs[0]" v-else />
    <h1 class="font-bold text-2xl">Older Songs</h1>
    <div class="grid w-full gap-3 md:grid-cols-3 sm:grid-cols-2">
      <div
        class="rounded-md w-full bg-gray-900 bg-opacity-30 p-4"
        v-for="(song, index) in getOldSongs"
        :key="`song-${index}}`"
      >
        <h1 class="font-bold text-lg">{{ song.name }}</h1>
        <h1 class="font-light truncate text-xs">{{ song.artist }}</h1>
        <div class="w-full flex flex-col md:flex-row gap-3">
          <iframe
            class="w-full mt-2 rounded-md"
            :src="`https://www.youtube.com/embed/${song.youtubeId}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: [],
      today: [],
      noSongToday: false,
    }
  },
  fetchOnServer: false,
  async fetch() {
    const ref = this.$fire.firestore.collection('songs')

    const date = new Date()

    const today =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()

    const allsongs = []
    await ref
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allsongs.push(doc.data())
        })
      })
      .catch((err) => {
        alert(err.message)
      })
    const sortedArray = allsongs.sort(
      (a, b) =>
        this.$moment(b.date).format('YYYYMMDD') -
        this.$moment(a.date).format('YYYYMMDD')
    )
    if (sortedArray[0].date === today) {
      this.noSongToday = false
    } else {
      this.noSongToday = true
    }
    this.songs = sortedArray
  },
  computed: {
    getOldSongs() {
      return this.songs.slice(1, this.songs.length)
    },
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
