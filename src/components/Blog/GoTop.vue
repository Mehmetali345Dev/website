<script>
export default {
  data() {
    return {
      position: 0,
    }
  },
  computed: {
    /**
     * Checks if the position is higher than a specific number and returns a boolean value.
     * @returns {boolean} Higher than the given number.
     */
    isActive() {
      return this.position > 100
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updatePosition)
  },
  methods: {
    /**
     * Updates the Vue data when it's called.
     */
    updatePosition() {
      this.position = window.scrollY
    },
    /**
     * Scrolls window to top.
     */
    goTop() {
      window.scrollTo(0, 0)
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updatePosition)
  },
}
</script>

<template>
  <transition name="fade">
    <div
      v-show="isActive"
      class="rounded-full cursor-pointer flex b p-2 text-white items-center bg-gray-900 bg-opacity-30 hover:shadow-md"
      @click="goTop"
    >
      <IconChevron up class="h-6 w-6" />
    </div>
  </transition>
</template>
