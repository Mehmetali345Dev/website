<template>
  <div class="w-full flex justify-center p-4">
    <div
      class="md:w-9/12 flex flex-col md:flex-row justify-between items-start gap-2 md:items-center"
    >
      <a
        href="https://github.com/Mehmetali345Dev/website"
        class="font-bold text-xl"
        target="_blank"
        rel="noreferrer noopener"
      >{{ getText }}</a>
      <Contact />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getText() {
      if (!this.$route.path.includes('blog')) {
        return "This website is open source on Github";

      } else {
        return "Bu website Github üzerinde açık kaynaklıdır";
      }
    }
  }
}
</script>

<style scoped></style>
