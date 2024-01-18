<script setup>
import SectionOpener from "@/components/section/SectionOpener.vue";
import SectionSales from "@/components/section/SectionSales.vue";
</script>

<template>
  <main class="main">
    <SectionOpener />
    <SectionSales />
  </main>
</template>

<style lang="sass">
.main
  display: flex
  flex-direction: column
  margin: 4em 0
  gap: 4em
</style>
