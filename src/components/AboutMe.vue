<template>
  <header class="w-full flex flex-col items-start space-y-2">
    <div class="md:flex profile items-center">
      <nuxt-img src="/icon.png" format="webp" class="h-36 w-36 rounded-md" />
      <div class="grid items-center about md:(ml-2 mt-0)">
        <h1 class="font-bold text-2xl text-2xl">Hello, I'm Mehmet Ali</h1>
        <p>
          I am a young developer (I'm 14 years old) from Turkey. I write desktop
          programs and web applications using Vue.js, JavaScript and C#.
        </p>
      </div>
    </div>

    <WidgetDiscord />
    <WidgetSpotify/>
  </header>
</template>

<script>
export default {}
</script>

<style>
@media screen and (max-device-width: 950px) {
  .profile {
    @apply grid;
  }
  .about {
    @apply mt-2 ml-0;
  }
}
</style>
