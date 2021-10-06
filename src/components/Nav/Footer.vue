<template>
  <div class="p-4 w-full flex dark:bg-gray-800 bg-gray-400 justify-center">
    <div class="hidden md:flex justify-between">
      <h1 class="font-bold">{{ getText.text }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getText() {
      if (this.$route.path.includes("blog")) {
        return {
          text: "Mehmetali345Dev tarafından sevgi ile yapıldı",
          donate: "RepeatPay ile bağış yapın",
          sourcecode: "Kaynak kodu",
        };
      } else {
        return {
          text: "Made by Mehmetali345Dev with love",
          donate: "Donate on",
          sourcecode: "Source code",
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
