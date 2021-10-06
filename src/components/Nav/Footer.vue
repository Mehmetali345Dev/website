<template>
  <div class="p-4 w-full flex dark:bg-gray-800 bg-gray-300 md:justify-center">
    <div class="w-10/12">
      <a
        href="https://github.com/mehmetali345dev/mehmetali345.xyz"
        rel="noopener noreferrer"
        class="font-bold"
      >{{ getText.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getText() {
      if (this.$route.path.includes("blog")) {
        return {
          text: "Bu site Github üzerinde açık kaynak olarak paylaşılmıştır",


        };
      } else {
        return {
          text: "This website is open-source on GitHub",

        };
      }
    },
  },
};
</script>

<style>
@media screen and (max-device-width: 950px) {
  .social {
    @apply hidden;
  }
  .center {
    @apply justify-center;
  }
  .socmobile {
    @apply flex;
  }
  .footermobile {
    @apply grid justify-items-center;
  }
}
</style>
