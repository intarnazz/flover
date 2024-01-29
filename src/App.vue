<script setup>
import OneHeader from "@/layout/header/OneHeader.vue";
import LayoutWrapper from "@/layout/LayoutWrapper.vue";
import OneFooter from "@/layout/footer/OneFooter.vue";
</script>

<template>
  <OneHeader />
  <LayoutWrapper>
    <RouterView />
  </LayoutWrapper>
  <OneFooter />
</template>

<style lang="sass">
@import "@/assets/css/style.sass"
</style>
