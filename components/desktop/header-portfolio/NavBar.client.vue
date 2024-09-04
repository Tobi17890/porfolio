<template>
    <nav class="flex items-center justify-evenly">
        <div v-for="(item, index) in navItems" :key="index" class="relative group">
            <nuxt-link :to="item.link" class="inline-block text-sm pb-1 mx-4 text-gray-800 link"
                :class="{ 'active': isActive(item.link) }">
                {{ item.name }}
            </nuxt-link>
            <span class="underline"></span>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Articles', link: '/articles' }
];

const route = useRoute();
console.log(route.path, route);
const isActive = (link: string): boolean => {
    if ( link === '/' && route.path === '/' ) return true;
    return route.path === link;
};
</script>

<style scoped lang="scss">
.link {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: inherit;
}

.link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease, opacity 0.3s ease;
}

.link:hover::after,
.link.active::after {
    width: 100%;
    opacity: 1;
}
</style>
