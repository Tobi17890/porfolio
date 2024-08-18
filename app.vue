<template>
  <client-only>
    <lazy-seo :color-config="globalState.colorConfig"></lazy-seo>
    <nuxt-layout
    :layout="globalState.stateThemeName"    
    :name="globalState.layout"
    :theme-color="globalState.themeColor"
    >
    <nuxt-page :theme="globalState.themeDirectory"></nuxt-page>
    </nuxt-layout>
  </client-only>
</template>

<script lang="ts" setup>
const globalState = reactive<any>({
  themeColor: 'playful_coral',
  themeDirectory: 'coral-desktop',
  stateThemeName: 'coral-desktop',
  layout: 'coral-desktop',
  colorConfig: '/colors/playful_coral.css'
})
</script>
<style lang="scss">
html {
  zoom: reset;
  touch-action: manipulation;
}
</style>