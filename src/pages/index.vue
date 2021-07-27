<template>
  <div class="grid justify-items-center">
    <Navbar :username="userinfo.login" />
    <AboutMe />
    <section class="grid justify-items-center" id="repos">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My GitHub repositories
      </h2>
      <RepoSection />
    </section>
    <section
      id="donate"
      class="grid justify-items-center mb-16"
    >
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My Donate Links
      </h2>
      <Donate class="mt-4 w-full" />
    </section>
    <Footer class="mt-16 mb-4" />
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
</style>