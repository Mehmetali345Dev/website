<template>
  <div
    class="bg-gray-900 p-4 rounded-md w-full flex flex-col gap-2 bg-opacity-30"
  >
    <h1 class="font-bold text-lg rounded-md bg-opacity-30">
      {{ word.turkish }}
    </h1>
    <p>{{ word.exp }}</p>
    <p class="gap-2 flex items-center">
      <IconCalendar class="h-6 w-6" />{{ getDate(word.date) }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getDate(date) {
      return this.$moment(date).format('YYYY/MM/DD')
    },
  },
}
</script>
