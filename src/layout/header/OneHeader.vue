<script setup>
import LayoutWrapper from "@/layout/LayoutWrapper.vue";

</script>

<template>
  <header class="header">
    <LayoutWrapper class="header__wrapper">
      <h2>
        <samn class="header__color color">Flower</samn> Shop
      </h2>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            Home
          </li>
          <li class="nav__item">
            Shop
          </li>
          <li class="nav__item">
            About
          </li>
        </ul>
      </nav>
      <div class="header__icons">
        <span class="material-symbols-outlined">
          person
        </span>
        <span class="material-symbols-outlined">
          shopping_cart
        </span>
      </div>
    </LayoutWrapper>
  </header>
</template>

<style scoped lang="sass">
.material-symbols-outlined 
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24
  color: $mainColor
  font-size: 2.3em
.nav
  &__list
    display: flex
    gap: 1em
    font-size: 1.4em
  &__item
    cursor: pointer
    transition: .1s
  &__item:hover
    color: $mainColor
.color
  color: $mainColor
.header
  background-color: #fff
  padding: 1em
  &__wrapper
    display: flex
    align-items: center
    justify-content: space-between
</style>