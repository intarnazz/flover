<script setup>
const props = defineProps(["title"]);
</script>

<template>
  <div class="title">
    <hr />
    <h3 class="title__text">{{ props.title }}</h3>
    <hr />
  </div>
</template>

<style scoped lang="sass">
.title
  display: flex
  align-content: center
  justify-content: space-between
  font-size: 1.7em
  gap: 1em
  &__text
    font-weight: 500
hr
  width: 150px
</style>
