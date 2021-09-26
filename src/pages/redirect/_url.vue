<template>
  <div class="flex items-center justify-center">
    <div class="bg-gray-300 dark:bg-gray-800 grid justify-items-center p-4 rounded-lg">
      <div class="h-1 w-full bg-green-500">
        <div class="h-full bg-green-800 loadingbar"></div>
      </div>
      <div class="grid justify-items-center">
        <h1 class="text-xl font-bold mt-2">Redirecting to {{ getTitle }}</h1>
        <nuxt-link
          class="
            p-4
            w-full
            text-center
            font-bold
            text-md
            bg-gray-400
            dark:bg-gray-700
            rounded-lg
            mt-2
          "
          to="/"
          >Go back</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "redirect",
  data() {
    return {
      params: this.$route.params.url,
      redirect: {
        donate: {
          title: "RepeatPay",
          href: "https://repeatpay.ga/mehmetali345dev",
        },
      },
    };
  },
  mounted() {

    this.timeout = setTimeout(() => {
      window.location.href = this.redirect[this.params].href || "/";
    }, 3000);

  },
  computed: {
    getTitle() {
      return this.redirect[this.params].title;
    },
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss">
.loadingbar {
  animation-name: loading;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes loading {
  from {
    width: 20%;
    margin-left: 0%;
  }
  to {
    width: 45%;
    margin-left: 55%;
  }
}
</style>
