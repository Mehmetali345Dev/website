<template>
  <div class="flex gap-2 items-center md:grid grid-cols-2 flex-col w-full">
    <img :src="`https://http.cat/${getErrorMeta.title}`" />
    <div
      class="
        p-4
        bg-gray-900
        flex
        w-full
        rounded-md
        flex-col
        gap-2
        bg-opacity-30
      "
    >
      <h1 class="text-2xl font-bold">{{ error.statusCode }}</h1>
      <h1 class="text-lg font-bold">{{ getErrorMeta.title }}</h1>
      <p>{{ getErrorMeta.description }}</p>
      <button class="button bg-green-600" @click="refresh()">
        Refresh Page
      </button>
      <nuxt-link class="button bg-red-600" :to="'/'">Go Home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
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
          title: 'Bad Request',
          description: 'Bad, bad request!',
        },
        401: {
          title: 'Unauthorized',
          description:
            "This page requires some authorization stuff, or maybe you can't just access this.",
        },
        403: {
          title: 'Forbidden',
          description: "Maybe you shouldn't be here!",
        },
        404: {
          title: 'Page Not Found',
          description: 'Are you sure you entered a right URL?',
        },
        500: {
          title: 'Internal Server Error',
          description:
            "Lucky. This is not related to you. It's my fault. Please reach me out so that I can fix this issue.",
        },
      },
    }
  },
  head() {
    return {
      title: `Error ${this.$props.error.statusCode}`,
    }
  },
  computed: {
    /**
     * Checks through the common error object and returns the title-description if exists.
     * @returns {{title: string, description: string}} The object that contains error title and description.
     */
    getErrorMeta() {
      return {
        title: this.errors[this.error.statusCode]?.title || 'Unknown',
        description:
          this.errors[this.error.statusCode]?.description || 'No description.',
      }
    },
  },
  mounted() {
    console.error(this.$props.error)
  },
  methods: {
    /**
     * Refreshes the page.
     */
    refresh() {
      window.location.reload()
    },
  },
}
</script>
<style lang="scss" scoped>
.button {
  @apply px-4 py-2 rounded cursor-pointer flex justify-center items-center select-none focus:outline-none;
}
</style>
