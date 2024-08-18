<template>
    <Head>
        <Link rel="stylesheet" type="text/css" :href="seo.seo_color"></Link>
    </Head>
</template>
<script lang="ts" setup>

const props = defineProps({
    colorConfig: {
        type: String,
        default: ''
    }
})
const { colorConfig } = props;
const seo = {
    seo_color: colorConfig
}
</script>