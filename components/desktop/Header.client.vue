<template>
    <header
        class="w-full px-32 py-8 flex items-center justify-between font-medium dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 md:hidden lg:flex">
        <DesktopNavBar />
        <DesktopIcons />
    </header>
    <div class="absolute left-[50%] top-2 translate-x-[-50%]">
        <div class="flex items-center justify-center mt-2"><a
                class="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full font-bold border border-solid border-transparent dark:border-light"
                href="/" style="background: var(--text)">PH</a></div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped lang="scss">
</style>