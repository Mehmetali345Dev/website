<template>
  <div class="w-full flex justify-center p-4">
    <div class="md:w-10/12 flex justify-between items-center">
      <a
        href="https://github.com/Mehmetali345Dev/website"
        class="font-bold text-xl"
        target="_blank"
        rel="noreferrer noopener"
      >{{getText}}</a>
      <Contact />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getText() {
      if (!this.$route.path.includes('blog')){
        return "This website is open source on Github";

      } else {
        return "Bu website Github üzerinde açık kaynaklıdır";
      }
    }
  }
}
</script>

<style scoped></style>
