<template>
  <div
    class="
      w-11/12
      p-4
      text-gray-900
      bg-gray-300
      dark:(bg-gray-800
      text-gray-50)
      rounded-t-xl
    "
  >
    <div
      class="
        sm:flex
        grid
        justify-items-center
        items-center
        justify-center
        sm:justify-between
      "
    >
      {{getText.text}}
      <div class="hidden sm:flex items-center space-x-3">
        <a
          href="https://github.com/mehmetali345dev/mehmetali345.xyz"
          target="_blank"
          title="This website is open source on GitHub"
          >{{getText.sourcecode}}</a
        >
        <a
          href="https://repeatpay.ga/mehmetali345dev"
          target="_blank"
          class="flex"
          title="Donate me on RepeatPay"
          >{{getText.donate}}
          <img
            src="https://repeatpay.ga/icon.png"
            class="ml-2 w-5"
            alt="on RepeatPay"
        /></a>
      </div>
      <div class="grid grid-cols-2 justify-items-center mt-2 gap-2 sm:hidden">
        <a
          href="https://github.com/mehmetali345dev/mehmetali345.xyz"
          target="_blank"
          title="This website is open source on GitHub"
          >Source code</a
        >
        <a
          href="https://repeatpay.ga/mehmetali345dev"
          target="_blank"
          class="flex"
          title="Donate me on RepeatPay"
          >Donate on
          <img
            src="https://repeatpay.ga/icon.png"
            class="ml-2 w-5"
            alt="on RepeatPay"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getText() {
      if (this.$route.name.includes("blog")) {
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
</style>