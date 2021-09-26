<template>
  <div class="p-4 dark:bg-gray-700 bg-gray-400">
    <div>
      <h1 class="text-xl mb-2 font-bold">Gönderiyi paylaş</h1>
    </div>
    <div class="md:flex grid justify-items-center justify-between md:space-x-3">
      <div class="flex items-center space-x-2 md:mb-0">
        <button
          @click="share('https://api.whatsapp.com/send?text=')"
          target="_"
          class="button"
        >Whatsapp</button>
        <button
          @click="share('https://telegram.me/share/url?url=')"
          target="_"
          class="button"
        >Telegram</button>
        <button
          @click="share('https://twitter.com/intent/tweet?via=AnakinS07677978&text=')"
          target="_"
          class="button"
        >Twitter</button>
      </div>
      <div
        class="flex items-center w-full flex-grow space-x-2 bg-gray-400 dark:bg-gray-800 rounded-md"
      >
        <input
          type="text"
          ref="share-url"
          class="focus:outline-none w-full cursor-pointer dark:bg-gray-800 rounded-md p-2"
          readonly
          @click="copy()"
          :value="`https://mehmetali345.xyz${link}`"
        />
      </div>
      <transition v-if="copied" name="fade" mode="out-in">
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#059669"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copied: false,
    }
  },
  props: {
    link: String
  },
  methods: {
    share(url) {
      window.open(`${url}https://mehmetali345.xyz${this.link}`, "`${option[0].toUpperCase() + option.toLowerCase().slice(1)}`", "width=400,height=550")
    },
    copy() {
      navigator.clipboard.writeText(`https://mehmetali345.xyz${this.link}`)
      this.copied = true
    }
  }
}
</script>

<style>
.button {
  @apply bg-gray-400 dark:bg-gray-800 rounded-md p-2  focus:outline-none;
}
</style>
