<template>
  <div>
    <div class="flex items-center md:justify-start w-full justify-between gap-2">
      <a
        v-for="(links, index) in getLinks"
        :key="`links-${index}`"
        :title="links.title"
        :href="links.url"
        target="_blank"
      >
        <IconBrand :name="links.icon" class="dark:text-white h-8 w-8" />
      </a>
      <a title="Send me an e-mail!" :href="isLoaded ? `${$config.links.mail}` : false">
        <IconAt class="h-8 w-8" />
      </a>
      <BlogGoTop v-if="$route.path.includes('blog')" />
    </div>
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
