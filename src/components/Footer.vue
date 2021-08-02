<template>
  <div
    class="
      bg-gray-300
      dark:(bg-gray-800 text-gray-100)
      items-center
      justify-center
      flex
      w-9/12
      shadow-lg
      h-16
      .rounded-xl
      space-x-2
      mt-4
    "
  >
    <div class="grid md:flex justify-items-center md:justify-between w-8/12">
      <a href="https://github.com/mehmetali345dev/mehmetali345.xyz" target="_blank" class="font-bold text-sm"
        >This website is open source on Github</a
      >
      <div class="md:flex hidden items-center space-x-4">
        <a
          :href="getSocialLinks.twitter"
          target="_blank"
          rel="noreferrer"
          title="Follow me on twitter"
        >
          Twitter
        </a>
        <a
          :href="getSocialLinks.discord"
          target="_blank"
          rel="noreferrer"
          title="Join my Discord server!"
        >
          Discord
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getSocialLinks() {
      return this.$config.contact;
    },
  },
};
</script>

<style>
</style>