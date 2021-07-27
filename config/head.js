const description =
  "Young developer from Turkey, interested in languages, gaming, and programming, trying to improve his C# skills!"

export default {
  title: "Mehmetali_345",
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
      href: "https://mehmetali345.xyz/favicon.ico",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Mehmetali_345's Blog",
      href: "https://mehmetali345.xyz/opensearch.xml",
    },
  ],
}
