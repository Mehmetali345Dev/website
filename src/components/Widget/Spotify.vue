<template>
  <div
    v-if="$fetchState.pending"
    class="bg-green-500 w-full flex animate-pulse p-4 rounded-md"
  >
    <img class="w-16 h-16 rounded-md mr-4 bg-gray-900 outline-none" alt="" />
    <div class="flex flex-col justify-center space-y-3">
      <h1 class="h-4 w-16 bg-gray-900"></h1>
      <h1 class="h-4 w-28 bg-gray-900"></h1>
    </div>
  </div>

  <div v-else class="w-full">
    <div
      class="
        bg-green-500
        dark:bg-green-500
        mt-2
        bg-opacity-30
        flex
        p-4
        rounded-md
      "
    >
      {{ spotify }}
      <!-- <div class="flex mt-2">
        <img
          class="w-16 h-16 rounded-md mr-4 bg-gray-900 outline-none"
          alt=""
          :src="this.lanyard.spotify.album_art_url"
        />
        <div class="flex flex-col space-y-1 justify-center">
          <div class="text-sm font-bold leading-tight truncate-ellipsis">
            {{ this.lanyard.spotify.song }}
          </div>
          <div class="text-sm leading-tight truncate-ellipsis">
            {{ 'by ' + this.lanyard.spotify.artist }}
          </div>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spotify: {},
    }
  },
  async fetch() {
    this.spotify = this.$getNowPlaying('/me/currently-playing')
  },
}
</script>
<style></style>
