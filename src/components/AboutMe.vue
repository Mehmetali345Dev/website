<template>
  <div
    class="
      w-11/12
      md:w-8/12
      bg-gray-300
      dark:bg-gray-800
      mt-16
      justify-items-center
      h-auto
      flex flex-wrap
      justify-center
      rounded-md
    "
  >
    <img :src="userinfo.avatar_url" class="rounded-full w-64 h-64 m-6" />
    <div
      class="
        grid
        items-center
        place-content-center
        justify-items-center
        md:justify-items-start
        text-center
        aboutme
        md:text-left
      "
    >
      <h1 class="text-2xl md:text-5xl dark:text-gray-100 font-bold">
        {{ userinfo.login }}
      </h1>
      <p class="w-[20rem] dark:text-gray-100 text-lg mt-4">
        {{ userinfo.bio }}
      </p>
      <Status class="md:mt-2 my-2" />
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const info = await this.$axios.$get(
      "https://api.github.com/users/" + this.getUser.user
    );
    this.userinfo = info;
  },
  data() {
    return {
      userinfo: [],
    };
  },
  computed: {
    getUser() {
      return this.$config.config;
    },
  },
};
</script>

<style>
@media screen and (max-device-width: 950px) {
  .aboutme {
    @apply text-center justify-items-center;
  }
}
</style>