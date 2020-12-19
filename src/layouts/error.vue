<template>
  <v-container class="text-center" fluid>
    <div v-if="errors[error.statusCode]">
      <v-icon style="font-size:125px;">mdi-skull-crossbones</v-icon>
      <h1>
        {{ $props.error.customMessage || errors[error.statusCode].shortname }}
      </h1>
      <span v-if="!$props.error.customMessage">{{
        errors[error.statusCode].description
      }}</span>
    </div>

    <div v-else>
      <h1>{{ errors[404].shortname }}</h1>
      <span>{{ errors[404].description }}</span>
    </div>

    <div style="margin-top:20px">
      <v-btn style="margin-right:4px" outlined @click="$router.back()"
        >Geri git</v-btn
      >
      <v-btn style="margin-right:4px" outlined to="/">Ana sayfa</v-btn>
      <v-btn outlined @click="reload">Yeniden yükle</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: "centered",
  head() {
    const title = this.errors[this.error.statusCode]
        ? this.errors[this.error.statusCode].shortname
        : "Error",
      meta = [
        {
          name: "og:title",
          content: this.errors[this.error.statusCode]
            ? this.errors[this.error.statusCode].shortname
            : "Error",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.errors[this.error.statusCode]
            ? this.errors[this.error.statusCode].description
            : "Oh well, seems like there was an error processing your request. You better find a different way!",
        },
        { name: "og:image", content: "https://eggsy.xyz/favicon.ico" },
        { name: "premid-details", content: "Uh oh, it's an error:" },
        {
          name: "premid-state",
          content: this.errors[this.error.statusCode]
            ? this.errors[this.error.statusCode].shortname
            : "Error",
        },
      ];

    return {
      title,
      meta,
    };
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      errors: {
        400: {
          shortname: "Olumsuz",
          description: "Aradığının burda olduğuna eminmisin?",
        },
        401: {
          shortname: "Yetkin yok",
          description: "Wowowow, where do you think your going?",
        },
        403: {
          shortname: "Forbidden",
          description: "Stop right there, calling the cops now!",
        },
        404: {
          shortname: "Sayfa bulunamadı.",
          description:
            "Aradığın sayfa bu değildi sanırım",
        },
        500: {
          shortname: "Sunucu hatası",
          description:
            "Oh uh... Benden kaynaklanan bir hata",
        },
      },
    };
  },
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  text-transform: uppercase;
}
</style>
