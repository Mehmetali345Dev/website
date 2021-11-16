<template>
  <header class="w-full flex flex-col items-start gap-2">
    <nuxt-img
      src="/icon.png"
      format="webp"
      class="h-36 w-36 ring-5 ring-green-800 rounded-full"
    />
    <div class="grid items-center">
      <h1 class="font-bold text-2xl sm:text-3xl">Hello, I'm Mehmet Ali</h1>
      <p>
        I am a young developer (I'm 14 years old) from Turkey. I write desktop
        programs and web applications using Vue.js, JavaScript and C#.
      </p>
    </div>
    <WidgetDiscord/>
  </header>
</template>

<script>
export default {}
</script>

<style></style>
