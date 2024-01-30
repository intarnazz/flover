<script setup>
import SectionOpener from "@/components/section/SectionOpener.vue";
import SectionSales from "@/components/section/SectionSales.vue";
import SectionLatestReviews from "@/components/section/SectionLatestReviews.vue";
</script>

<template>
  <main class="main">
    <SectionOpener />
    <SectionSales />
    <SectionLatestReviews />
  </main>
</template>

<style lang="sass" scoped>
.main
  display: flex
  flex-direction: column
  margin: 4em 0
  gap: 4em
</style>
