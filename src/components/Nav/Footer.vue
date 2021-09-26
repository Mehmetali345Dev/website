<template>
  <div
    class="p-4 text-gray-900 bg-gray-300 flex justify-center dark:(bg-gray-800 text-gray-50) w-full"
  >
    <div class="sm:flex justify-between w-8/12 footermobile items-center">
      {{ getText.text }}
      <div class="social sm:flex items-center space-x-3">
        <Social class="social" />
        <a
          href="https://github.com/mehmetali345dev/mehmetali345.xyz"
          target="_blank"
          rel="noopener noreferrer"
          title="This website is open source on GitHub"
        >{{ getText.sourcecode }}</a>
        <a
          href="https://repeatpay.ga/mehmetali345dev"
          target="_blank"
          class="flex"
          rel="noopener noreferrer"
          title="Donate me on RepeatPay"
        >
          {{ getText.donate }}
          <img
            src="https://repeatpay.ga/icon.png"
            class="ml-2 w-5"
            alt="on RepeatPay"
          />
        </a>
      </div>
      <div class="grid grid-cols-2 justify-items-center mt-2 gap-2 md:hidden socmobile">
        <a
          href="https://github.com/mehmetali345dev/mehmetali345.xyz"
          target="_blank"
          rel="noopener noreferrer"
          title="This website is open source on GitHub"
        >Source code</a>
        <a
          href="https://repeatpay.ga/mehmetali345dev"
          target="_blank"
          rel="noopener noreferrer"
          class="flex"
          title="Donate me on RepeatPay"
        >
          Donate on
          <img src="https://repeatpay.ga/icon.png" class="ml-2 w-5" alt="on RepeatPay" />
        </a>
      </div>
      <Social class="mt-4 socmobile md:hidden" />
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
