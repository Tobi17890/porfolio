<template>
    <header
        class="w-full px-32 py-8 flex items-center justify-between font-medium dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
         <DesktopHeaderPortfolioNavBar/>
         <DesktopHeaderPortfolioIcons />
    </header>
    <div class="absolute left-[50%] top-2 translate-x-[-50%] z-10 hover:cursor-pointer">
        <div class="flex items-center justify-center mt-2">
            <nuxt-link class="shortcut-name w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full font-bold border border-solid border-transparent dark:border-light"
                href="/">
                PH
            </nuxt-link>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped lang="scss">
.shortcut-name {
    background: var(--text4);
    color: var(--text5);
}
.shortcut-name:hover {
    cursor: pointer;
}
@media (max-width: 1024px) {
    header {
        display: none;
    }
}
</style>