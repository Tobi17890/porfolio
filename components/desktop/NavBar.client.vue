<template>
    <nav class="flex items-center justify-evenly">
        <div v-for="(item, index) in navItems" :key="index" class="relative group">
            <nuxt-link :to="item.link" class="inline-block pb-1 mx-4 text-gray-800 "
                :class="{ 'before:w-full before:opacity-100': isActive(item.link) }">
                {{ item.name }}
            </nuxt-link>
            <span
                class="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full group-hover:opacity-100 before:opacity-0"></span>
        </div>
    </nav>
</template>
<script lang="ts" setup>
const navItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Projects',
        link: '/Projects'
    },
    {
        name: 'Articles',
        link: '/articles'
    }
]
const route = useRoute();
const isActive = (link: string): boolean => {
    return route.path === link;
}
</script>
<style scoped lang="scss"></style>