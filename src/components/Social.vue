<template>
  <div class="md:(flex space-x-4 space-y-0) justify-items-center grid space-y-4">
    <div class="bg-gray-400 h-[0.1rem] w-full flex md:hidden dark:bg-gray-900"></div>
    <a
      v-for="(social, index) in socials"
      :key="`social-${index}`"
      target="_blank"
      :href="social.link"
      rel="noopener noreferrer"
    >{{ social.name }}</a>
    <div class="bg-gray-400 w-[0.1rem] h-6 hidden md:flex dark:bg-gray-900"></div>
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
</style>
