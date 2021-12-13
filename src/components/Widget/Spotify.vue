<template>
  <div
    v-if="Object.keys(spotify).length === 0"
    class="bg-green-500 w-full flex items-center animate-pulse p-4 rounded-md"
  >
    <img class="w-16 h-16 rounded-md mr-4 bg-gray-900 outline-none" alt />
    <div class="flex flex-col justify-center space-y-3">
      <h1 class="h-4 w-16 bg-gray-900"></h1>
      <h1 class="h-4 w-28 bg-gray-900"></h1>
    </div>
  </div>

  <div v-else-if="isPlaying" class="w-full">
    <div class="bg-green-500 dark:bg-green-500 mt-2 bg-opacity-30 flex p-4 items-center rounded-md">
      <div class="flex mt-2">
        <img
          class="w-16 h-16 rounded-md mr-4 bg-gray-900 outline-none"
          alt
          :src="this.spotify.image[1]['#text']"
        />
        <div class="flex flex-col space-y-1 justify-center">
          <div class="text-sm font-bold leading-tight truncate-ellipsis">{{ this.spotify.name }}</div>
          <div
            class="text-sm leading-tight truncate-ellipsis"
          >{{ 'by ' + this.spotify.artist['#text'] }}</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="w-full bg-gray-900 bg-opacity-30 items-center flex p-4 rounded-md">
    <h1 class="font-bold text-xl">Nothing is playing</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spotify: [],
      isPlaying: false,
      timer: '',
    }
  },
  async created() {
    await this.fetchInfo()
    this.timer = setInterval(this.fetchInfo, 5000)
  },
  methods: {
    async fetchInfo() {
      const { data: music } = await this.$axios.get(
        'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Mehmetali345Dev&api_key=8f397e39b6d189cff1da808c7b971737&format=json&limit=1'
      )

      this.spotify = music.recenttracks.track[0]

      if (music.recenttracks.track[0]['@attr'] !== undefined) {
        this.isPlaying = true
      }
      else {
        this.isPlaying = false
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>
<style></style>
