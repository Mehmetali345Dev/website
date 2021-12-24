<template>
  <div class="flex w-full flex-col items-start gap-2 justify-start">
    <header class="flex flex-col gap-2 w-full">
      <p>
        This is an dictionary for awkward Turkish words. Made with Firebase.
      </p>
      <div class="flex gap-2">
        <input
          class="p-4 w-full rounded-md focus:outline-none bg-gray-900 bg-opacity-30 dark:text-white"
          type="text"
          placeholder="Search an Word!"
          v-model="search"
        />
        <button class="bg-green-600 p-4 rounded-md" @click="getSearch()">
          Search!
        </button>
      </div>
    </header>
    <div class="w-full grid md:grid-cols-3 gap-3">
      <div
        class="bg-gray-900 p-4 rounded-md w-full flex flex-col gap-2 bg-opacity-30"
        v-for="(item, index) in items"
        :key="`items-${index}`"
      >
        <h1 class="font-bold text-lg rounded-md bg-opacity-30">
          {{ item.turkish }}
        </h1>
        <p>{{ item.exp }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {},
      search: '',
    }
  },
  fetchOnServer: false,
  async fetch() {
    const ref = this.$fire.firestore.collection('dictionary')

    const allwords = []

    await ref
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allwords.push(doc.data())
        })
      })
      .catch((err) => {
        alert(err.message)
      })

    this.items = allwords
  },
  methods: {
    async getSearch() {
      const ref = this.$fire.firestore.collection('dictionary')

      const searchedwords = []

      if (this.search == '') {
        await ref
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              searchedwords.push(doc.data())
            })
          })
          .catch((err) => {
            alert(err.message)
          })
      } else {
        await ref
          .where('turkish', '==', this.search)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              searchedwords.push(doc.data())
            })
          })
          .catch((err) => {
            alert(err.message)
          })

        this.items = searchedwords
      }
    },
  },
}
</script>
