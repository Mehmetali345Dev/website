<template>
    <div class="bg-gray-900 p-4 w-full bg-opacity-30">
        <h1 class="text-xl font-bold mb-2">İçerikler</h1>
        <li class="list" v-for="content of contents" :key="content.id">
            <NuxtLink :to="`#${content.id}`">{{ content.text }}</NuxtLink>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        contents: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
.list::marker {
    @apply text-green-600;
}
</style>