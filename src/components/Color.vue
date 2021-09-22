
<template>
  <div
    class="
      text-gray-900
      cursor-pointer
      select-none
      focus:outline-none
      dark:bg-gray-700
      bg-gray-400
      hover:(animated animate-head-shake)
      rounded-xl
      p-2
    "
    @click="switchTheme"
  >
    <h1 v-if="getSelectedTheme === 'light'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"

        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
    </h1>
    <h1 v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </h1>
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
      this.$colorMode.preference =
        this.getSelectedTheme === "dark" ? "light" : "dark";
    },
  },
};
</script>