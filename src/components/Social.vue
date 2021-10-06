<template>
  <div
    class="grid w-full justify-items-center rounded-xl space-x-4 dark:bg-gray-800 bg-gray-300 p-2"
  >
    <div
      class="grid dark:bg-gray-800 bg-gray-300 rounded-xl justify-items-start gap-2"
    >
      <a
        v-for="(social, index) in socials"
        :key="`social-${index}`"
        target="_blank"
        class="bg-green-500 flex items-center font-bold p-2 rounded-md"
        :href="social.link"
        rel="noopener noreferrer"
      >{{ social.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      socials: [
        {
          name: "Discord",
          link: "https://discord.gg/cjrz8t5HcZ",
        },
        {
          name: "Twitter",
          link: "https://twitter.com/AnakinS07677978/?utm_source=mehmetali345.xyz",
        },
        {
          name: "GitHub",
          link: "https://github.com/Mehmetali345Dev/?utm_source=mehmetali345.xyz",
        },
        {
          name: "Mail",
          link: "mailto:345m.ali2007@gmail.com",

        }],
    }
  },
  methods: {
    openSocial() {
      if (!this.open) {
        this.open = true
      }
      else {
        this.open = false
      }
    }
  }
};
</script>

<style>
@media screen and (max-device-width: 950px) {
  .sep {
    @apply hidden;
  }
  .sep2 {
    @apply flex;
  }
}
</style>
