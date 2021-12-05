<template>
  <div class="flex flex-col items-start">
    <div class="space-y-2">
      <h1 class="text-xl font-bold">Donate me</h1>
      <p class="md:w-3/6">
        You can support me for my projects' maintainment cost and for developing
        new projects. But if you dont give me your money, one night I come to
        your house after that I kill you and get your all money (just kidding).
      </p>
    </div>
    <a
      href="https://repeatpay.ga/mehmetali345dev"
      class="flex p-4 rounded-md mt-2 items-center font-bold text-lg bg-purple-500"
      >Look my
      <img class="w-12 h-12" src="https://repeatpay.ga/icon.png" /> account</a
    >
    <div class="mt-2 space-y-2 w-full md:w-3/6">
      <h1 class="text-xl font-bold">My Accounts</h1>
      <div
        v-for="(account, index) in accounts"
        :key="`account-${index}`"
        class="font-bold flex items-center bg-gray-900 bg-opacity-50 p-4 rounded-md space-x-2"
      >
        <img :src="account.image" class="w-24" alt="" />
        <div>
          <h1 class="text-lg font-bold">{{ account.name }}</h1>
          <span
            v-if="account.revealed == true"
            class="text-gray-800 dark:text-gray-200"
          >
            {{ account.iban }}
          </span>

          <span
            v-else
            class="text-gray-800 underline cursor-pointer dark:text-gray-200"
            @click="account.revealed = true"
          >
            Click to reveal
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          image:
            'https://crosstech.com.tr/wp-content/uploads/2020/08/Papara-780x675.png',
          name: 'Papara',
          iban: '1212538229',
          revealed: false,
        },
      ],
    }
  },
  head() {
    const title = 'Donate'
    const description =
      'You can see my supporters from this page and you can support me.'
    const href = `https://345dev.me/donate`
    const object = {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `mehmetali345, mehmetali345 blog, blog, teknoloji, vue, yazılım, discord, mehmetali_345, gönderi`,
        },
        // Open-Graph
        {
          hid: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: href,
        },
        // Twitter
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ].map((i) => {
        if (i.name && !i.property) i.property = i.name
        return i
      }),
      link: [
        {
          rel: 'canonical',
          href,
        },
      ],
    }
    return object
  },
}
</script>

<style></style>
