<template>
  <div class="grid justify-items-center dark:bg-gray-900">
    <Navbar />
    <AboutMe />
    <section class="grid justify-items-center" id="repos">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My Projects
      </h2>
      <ProjectSection />
    </section>
    <section class="grid justify-items-center w-8/12" id="repos">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My GitHub repositories
      </h2>
      <RepoSection />
    </section>
    <section id="donate" class="grid w-8/12 justify-items-center mb-16">
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My Donate Links
      </h2>
      <Donate class="mt-4 w-full" />
    </section>
    <Footer class="mt-16 mb-4" />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>