<template>
    <div class="footer-container w-full px-16 flex justify-between items-center">
        <div class="copy-right">
            <p class="text-xl text-gray-800 dark:text-white number-only"> {{ `${year} &copy; All Right Reserved.` }}</p>
        </div>
        <div class="footer-dev-name">
            <span class="text-sm text-gray-800 dark:text-white">Designed & Developed by</span>
            <a href="https://www.instagram.com/isthatutobi/" target="_blank" class="text-base text-primary dark:text-primary">Than Limphengeang</a>
        </div>
        <div class="contact">
            <p>Say Hello</p>
        </div>
    </div>
</template>
<style scoped lang="scss">
.footer-container {
    height: 100px;
    background: var(--primary-color);
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    border-top: 1px solid var(--background1);
}
@media screen and (max-width: 768px) {
    .footer-container {
        height: 150px;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
    }
    .footer-dev-name {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        span {
            font-size: 0.8rem;
        }
        a {
            font-size: 15px;
        }
    }
    .contact {
        display: none;
    }
    
}
</style>
<script setup lang="ts">
const year: number = new Date().getFullYear();
const copySymbol: string = '&copy;';
</script>