<template>
  <div class="space-y-2">
    <h1 class="font-bold text-xl">Contact Me</h1>
    <div class="flex space-x-3">
      <a
        v-for="(links, index) in getLinks"
        :key="`links-${index}`"
        :title="links.title"
        :href="links.url"
        target="_blank"
      >
        <IconBrand :name="links.icon" class="dark:text-white h-8 w-8" />
      </a>
      <a
        title="Send me an e-mail!"
        :href="isLoaded ? `${$config.links.mail}` : false"
      >
        <IconAt class="h-8 w-8" />
      </a>
    </div>
    <a
      class="font-bold text-lg"
  
      target="_blank"
      href="https://github.com/mehmetali345dev/website"
      >Also this website is open source!</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    }
  },
  mounted() {
    this.isLoaded = true
  },
  computed: {
    getLinks() {
      const links = this.$config.links
      const titles = {
        discord: 'Join my Discord server!',
        twitter: 'Follow me on Twitter!',
        github: 'Follow me on GitHub!',
      }
      const array = []
      for (const item in links) {
        if (item === 'mail') continue
        array.push({
          // @ts-ignore-next-line
          url: links[item],
          // @ts-ignore-next-line
          title: titles[item] || `Visit ${item}!`,
          icon: item,
        })
      }
      return array
    },
  },
}
</script>
