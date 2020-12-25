<template>
  <v-main>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card loading="secondary" class="elevation-12">
          <v-toolbar color="primary" flat>
            <v-toolbar-title>
              <v-btn small icon @click="$router.back()">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <span class="bottom">Yönlendiriliyor.</span>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <span v-if="!params || !params.url || !settings[params.url]">
              İstediğiniz bulunamadı.
              <a
                href="/"
              >Yönlendirme Çalışmadıysa</a>.
            </span>

            <span v-else>
              Yönlendiriliyor.
              <a
                :href="settings[params.url] ? settings[params.url].url : '/'"
          >Yönlendirme Çalışmadıysa</a>.
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<style lang="scss" scoped>
.bottom {
  vertical-align: bottom;
}
</style>

<script>
import moment from "moment";

export default {
  layout: "centered",
  head() {
    const title =
        this.settings[this.params?.url]?.name || "Redirecting to homepage",
      meta = [
        {
          hid: "og:title",
          name: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            this.settings[this.params?.url]?.description ||
            "Yönlendiriliyor.",
        },
        {
          name: "og:image",
          content: this.settings[this.params?.url]?.image,
        },
        {
          hid: "description",
          name: "description",
          content:
            this.settings[this.params?.url]?.description ||
            "Yönlendiriliyor.",
        },
        { name: "premid-details", content: "Redirecting to:" },
        {
          name: "premid-state",
          content: title,
        },
      ],
      link = [
        {
          rel: "canonical",
          href: `https://mehmetali345.ml/redirect/${this.params.url}`,
        },
      ];

    return {
      title,
      meta,
      link,
    };
  },
  data() {
    return {
      params: this.$route.params,
      settings: {
        "codepad": {
          name: "Codepad",
          description:
            "Hafif ve Hızlı bir kod editörü.",
          url: "https://github.com/mehmetali345/codepad",
        },
      },
    };
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  mounted() {
    this.timeout = setTimeout(() => {
      window.location.href = this.settings[this.params?.url]?.url || "/";
    }, 5000);
  },
};
</script>
