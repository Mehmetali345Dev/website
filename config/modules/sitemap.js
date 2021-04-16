export default async function () {
  const { $content } = require("@nuxt/content")
  const posts = await $content().fetch()

  const routes = []
  for (const post of posts) {
    routes.push(`blog/gonderi/${post.slug}`)
  }

  return {
    hostname: "https://mehmetali345.xyz",
    gzip: true,
    routes,
  }
}
