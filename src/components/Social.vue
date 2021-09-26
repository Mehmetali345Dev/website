<template>
  <div class="flex justify-center space-x-4">
    <div class="bg-gray-400 h-[0.1rem] w-full sep2 md:hidden dark:bg-gray-900"></div>
    <a
      v-for="(social, index) in socials"
      :key="`social-${index}`"
      target="_blank"
      :href="social.link"
      rel="noopener noreferrer"
    >{{ social.name }}</a>
    <div class="bg-gray-400 w-[0.1rem] h-6 sep md:flex dark:bg-gray-900"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
