<template>
    <div class="flex items-center w-full min-h-screen text-dark">
        <div
            class="w-full flex h-full z-0 bg-light p-32 pt-0 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 xl:pt-0 lg:pt-3 sm:pt-0">
            <div
                class="flex items-center text-dark justify-between w-full pt-0 md:pt-16 sm:pt-8 dark:text-light">
                <div class="w-1/2">
                    <img :src="img" alt="image not found" class="represent-img">
                </div>
                <div class="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
                    <div
                        class="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
                        <h1 class="inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light !text-left xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-5xl sm:!text-3xl"
                            style="opacity:1"><span class=""
                                style="opacity: 1; transform: none;">Transforming<!-- -->&nbsp;</span><span
                                class="inline-block"
                                style="opacity: 1; transform: none;">Ideas<!-- -->&nbsp;</span><span
                                class="inline-block" style="opacity: 1; transform: none;">with<!-- -->&nbsp;</span><span
                                class="inline-block" style="opacity: 1; transform: none;">Code<!-- -->&nbsp;</span><span
                                class="inline-block"
                                style="opacity: 1; transform: none;">Craftsmanship.<!-- -->&nbsp;</span></h1>
                    </div>
                    <p class="my-4 text-base font-medium md:text-sm sm:text-xs">Experienced front-end developer
                        specializing in cutting-edge web applications. Explore my portfolio and articles showcasing
                        expertise in Vue, Nuxt and web development. Stay updated on the latest trends.</p>
                    <div class="flex items-center self-start mt-2 lg:self-center"><a target="_blank"
                            class="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent  hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                            href="/yaswanth_gosula_resume.pdf">Resume<svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" class="w-full h-auto !w-6 ml-1 md:!w-4">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5">
                                </path>
                            </svg></a><a target="_blank"
                            class="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                            href="mailto:gosulayaswanth2@gmail.com">Contact</a></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import tempLogo from '../../../assets/images/temp_logo.jpg';
const img = tempLogo;
</script>
<style lang="scss" scoped>
.represent-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>