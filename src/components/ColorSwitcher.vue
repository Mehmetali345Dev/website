<template>
  <div
    class="
      text-gray-900
      cursor-pointer
      select-none
      focus:outline-none
      dark:bg-gray-800
      dark:text-gray-100
    "
    @click="switchTheme"
  >
    <h1 v-if="getSelectedTheme === 'light'">Light</h1>
    <h1 v-else>Dark</h1>
  </div>
</template>

<script>
export default {
  computed: {
    /**
     * Returns the selected color mode value.
     * @returns {'light'|'dark'} The color mode as "light" or "dark".
     */
    getSelectedTheme() {
      return this.$colorMode.value;
    },
  },
  methods: {
    /**
     * Updates the color mode value.
     * @param {'light'|'dark'} option The color mode option.
     */
    switchTheme() {
      this.$colorMode.preference = this.getSelectedTheme === "dark" ? "light" : "dark";
    },
  },
};
</script>
