<template>
    <svg class="text" :class="className !== undefined ? className : ''">
      <use :xlink:href="`#${svgName}`"></use>
    </svg>
  </template>
  
<script lang="ts" setup>
const props = defineProps({
    svgName: {
      type: String,
      required: true,
    },
    className: String,
})
  </script>
  <style>
  .text {
    fill: black;
  }
  </style>
  