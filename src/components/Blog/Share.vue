<template>
  <div class="flex gap-4 flex-wrap justify-start sm:justify-between">
    <div class="flex gap-3">
      <button
        @click="share('https://api.whatsapp.com/send?text=')"
        target="_"
        class="button"
      >
        <IconBrand name="Whatsapp" class="text-[#25D366] h-7 w-7" />
      </button>
      <button
        @click="share('https://telegram.me/share/url?url=')"
        target="_"
        class="button"
      >
        <IconBrand name="Telegram" class="h-7 w-7 text-[#2EAADE]" />
      </button>
      <button
        @click="
          share('https://twitter.com/intent/tweet?via=AnakinS07677978&text=')
        "
        target="_"
        class="button"
      >
        <IconBrand name="Twitter" class="text-[#1DA1F2] h-7 w-7" />
      </button>
    </div>
    <div
      class="flex-grow flex items-center gap-2 rounded-lg bg-gray-900 ring-3 ring-green-600 text-lg bg-opacity-30"
      v-tooltip="{ content: 'Kopyala!' }"
    >
      <input
        type="text"
        class="w-full bg-transparent rounded-lg focus:outline-none p-4"
        readonly
        :value="`https://345dev.me${path}`"
        @click="copy()"
      />
      <div
        class="p-4 rounded-r-lg bg-gray-900 bg-opacity-30 h-full flex items-center justify-center"
        @click="copy()"
      >
        <transition v-if="copied" name="fade" mode="out-in">
          <IconCheck class="text-green-600 h-7 w-7" />
        </transition>
        <transition v-else name="fade" mode="out-in">
          <IconLink class="text-gray-200 h-7 w-7" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
  },
  data() {
    return {
      copied: false,
    }
  },
  methods: {
    copy() {
      this.copied = true
      navigator.clipboard.writeText(`https://345dev.me${this.path}`)
      setTimeout(() => (this.copied = false), 3000)
    },
    share(url) {
      window.open(
        `${url}https://345dev.me${this.path}`,
        '`${option[0].toUpperCase() + option.toLowerCase().slice(1)}`',
        'width=400,height=550'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  @apply bg-gray-900 bg-opacity-30 ring-3 ring-green-600 p-4 flex cursor-pointer items-center justify-center rounded-lg;
}
</style>
