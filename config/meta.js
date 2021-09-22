const description =
  "My name is Mehmet Ali. I'm full stack developer and student from Turkey. I love Vue.js and Nuxt.js. Visit website and learn more about me."

export default {
  title: "Mehmetali345Dev",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@AnakinS07677978",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@AnakinS07677978",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "mehmetali345.xyz",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: "/icon.png",
    },
    /* Open-Graph */
    {
      hid: "og:title",
      name:"og:title",
      content:"Mehmetali345Dev"
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "mehmetali345.xyz",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: "https://mehmetali345.xyz/icon.png",
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#111827",
    },
  ].map((i) => {
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
}
