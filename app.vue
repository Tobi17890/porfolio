<template>
  <client-only>
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
const globalState = reactive({
  themeColor: 'playful_coral',
  themeDirectory: 'coral-desktop',
  stateThemeName: 'coral-desktop',
  layout: 'coral-desktop',
})
</script>