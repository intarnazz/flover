<script setup>
import LayoutWrapper from "@/layout/LayoutWrapper.vue";
</script>

<template>
  <header class="header">
    <LayoutWrapper class="header__wrapper">
      <RouterLink :to="{ name: 'Home' }">
        <h2 class="header__logo">
          <span class="header__color color">Flower</span> Shop
        </h2>
      </RouterLink>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <RouterLink :to="{ name: 'Home' }"> Home </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink :to="{ name: 'Shop' }"> Shop </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink :to="{ name: 'About' }"> About </RouterLink>
          </li>
        </ul>
      </nav>
      <div class="header__icons">
        <routerLink :to="{ name: 'Login' }">
          <span class="material-symbols-outlined"> person </span>
        </routerLink>
        <routerLink :to="{ name: 'Cart' }">
          <span class="material-symbols-outlined"> shopping_cart </span>
        </routerLink>
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
  // &__logo

  // &__icons
</style>
