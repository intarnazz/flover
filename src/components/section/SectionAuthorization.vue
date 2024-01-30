<script setup>
import ComponentLogin from "@/components/ComponentLogin.vue";
import ComponentReg from "@/components/ComponentReg.vue";

const props = defineProps(["component"]);
</script>

<template>
  <section class="form-authorization">
    <ComponentLogin v-if="props.component == 'login'" />
    <ComponentReg v-if="props.component == 'reg'" />
  </section>
</template>

<style lang="sass">
.form-authorization
  display: flex
  justify-content: center
  padding: 3em 0
.componemt-authorization
  display: flex
  &__h2
    font-weight: 500
  &__box
    background-color: #fff
    padding: 2em 1em
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
  &__form-wrapper
    display: flex
    flex-direction: column
    gap: 2em
  &__header
    display: flex
    flex-direction: column
    gap: 1em
  &__header-top
    display: flex
    align-items: center
    justify-content: space-between
  &__header-bottom
    color: $gray1
  &__form
    display: flex
    flex-direction: column
    width: 428px
    gap: 1em
  &__img
    width: 464px
    height: 632px
    object-fit: cover
</style>
