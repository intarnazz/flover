<script setup>
import LayoutWrapper from "@/layout/LayoutWrapper.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footer">
    <LayoutWrapper class="footer__wrapper">
      <div class="footer__site-info">
        <h2><span class="header__color color">Flower</span> Shop</h2>
        <div class="footer__site-info-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non debitis
          recusandae numquam quos vel aliquid perspiciatis impedit nobis, fugiat
          ab sapiente assumenda, nam facilis fugit? Eos iste asperiores
          distinctio recusandae?
        </div>
      </div>
      <div class="footer__item-wrapper">
        <div class="footer__links">
          <h3>Links</h3>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li class="footer__nav-item">
                <RouterLink :to="{ name: 'Home' }"> Home </RouterLink>
              </li>

              <li class="footer__nav-item">
                <RouterLink :to="{ name: 'Shop' }"> Shop </RouterLink>
              </li>
              <li class="footer__nav-item">
                <RouterLink :to="{ name: 'Login' }"> Login </RouterLink>
              </li>

              <li class="footer__nav-item">
                <RouterLink :to="{ name: 'Reg' }"> Reg </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__contact">
          <h3>Contact</h3>
          <ul class="footer__contacts-list">
            <li class="footer__contacts-item">
              26985 Brighton Lane, Lake Forest, CA
            </li>
            <li class="footer__contacts-item">support@Flowers.com</li>
            <li class="footer__contacts-item">+7 962 648 66 82</li>
          </ul>
        </div>
      </div>
    </LayoutWrapper>
  </footer>
</template>

<style scoped lang="sass">
.color
  color: $mainColor
.footer
  background-color: #454545
  padding: 3em 0 6em
  color: #fff
  font-weight: 300
  line-height: 1.2em
  &__item-wrapper
    display: flex
    gap: 4em
  &__wrapper
    display: flex
  &__site-info
    flex: 1
    display: flex
    flex-direction: column
    gap: 1em
  &__links
    display: flex
    flex-direction: column
    gap: 1em
  &__contact
    display: flex
    flex-direction: column
    gap: 1em
  &__site-info-content
    width: 300px
  &__nav-list
    display: flex
    flex-direction: column
    gap: .4em
  &__contacts-list
    display: flex
    flex-direction: column
    gap: .4em

.footer a
  color: #fff
</style>
