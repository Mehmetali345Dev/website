<template>
  <div class="grid justify-items-center gap-3">
    <div v-if="!supporters" class="grid flex-grow sm:grid-cols-2 gap-2 w-full h-md">
      <nuxt-link
        to="/redirect/donate"
        class="w-full text-2xl bg-gray-300 h-full rounded-md font-bold flex items-center justify-center dark:bg-gray-800"
      >Donate me</nuxt-link>
      <button
        @click="supporters = true"
        class="text-2xl font-bold bg-gray-300 dark:bg-gray-800 rounded-md flex items-center justify-center"
      >See my supporters</button>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="supporters" class="w-10/12 sm:grid-cols-3 grid gap-3 justify-items-center">
        <div
          class="bg-gray-300 grid justify-items-center space-y-3 rounded-md p-4 w-full dark:bg-gray-800"
          v-for="(support, index) in supports"
          :key="`support-${index}`"
        >
          <img :src="support.profile" class="w-64" :alt="support.name" />
          <h1 class="text-xl font-bold">{{ support.name }}</h1>
        </div>
      </div>
    </transition>
    <nuxt-link
      to="/redirect/donate"
      v-if="supporters"
      class="w-10/12 text-2xl text-gray-50 h-full rounded-md font-bold flex py-4 bg-green-600 items-center justify-center"
    >Donate me</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      supporters: false,
      supports: [
        {
          name: "Alast Official#0001",
          profile:
            "https://cdn.discordapp.com/avatars/697391819142594680/a_4a5601fb591112615f741a900582ea5b.gif",
        },
        {
          name: "𝔚𝔦𝔫𝔡𝔬𝔴𝔰 𝔅𝔒𝔒𝔖𝔗𝔈𝔇#4528",
          profile:
            "https://cdn.discordapp.com/avatars/775338000577200128/1b1b894219b52d7be10a743c9944bf93.webp",
        },
      ],
    };
  },
  head() {
    const title = "Support me"
    const description = "You can see my supporters from this page and you can support me."
    const href = `https://mehmetali345.xyz/donate`;
    const object = {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: `mehmetali345, mehmetali345 blog, blog, teknoloji, vue, yazılım, discord, mehmetali_345, gönderi`,
        },
        // Open-Graph
        {
          hid: "og:title",
          name: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: description,
        },
        {
          hid: "og:url",
          name: "og:url",
          content: href,
        },
        // Twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ].map((i) => {
        if (i.name && !i.property) i.property = i.name;
        return i;
      }),
      link: [
        {
          rel: "canonical",
          href,
        },
      ],
    };
    return object;
  },
};
</script>

<style>
</style>
