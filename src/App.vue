<script setup>
import OneHeader from "@/layout/header/OneHeader.vue";
import LayoutWrapper from "@/layout/LayoutWrapper.vue";
</script>

<template>
  <OneHeader />
  <LayoutWrapper>
    <RouterView />
  </LayoutWrapper>
</template>

<style lang="sass">
@import "@/assets/css/style.sass"
</style>
