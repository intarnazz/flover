<script setup>
import ComponentTitle from "@/components/ComponentTitle.vue";
</script>

<template>
  <section class="sales">
    <ComponentTitle title="Best sales" />
    <ul class="sales__list">
      <li class="sales__item">
        <div class="sales__item-header">
          <img class="sales__img" src="@/assets/img/periwinkle.png" alt="" />
          <h4 class="sales__flover-name">periwinkle</h4>
        </div>
        <div class="sales__price-warpper">
          <div class="sales__price">7$</div>
          <div class="sales__add-to-car">
            <span class="material-symbols-outlined"> shopping_cart </span> add
            to car
          </div>
        </div>
      </li>
      <li class="sales__item">
        <div class="sales__item-header">
          <img class="sales__img" src="@/assets/img/daisy.png" alt="" />
          <h4 class="sales__flover-name">daisy</h4>
        </div>
        <div class="sales__price-warpper">
          <div class="sales__price">7$</div>
          <div class="sales__add-to-car">
            <span class="material-symbols-outlined"> shopping_cart </span> add
            to car
          </div>
        </div>
      </li>
      <li class="sales__item">
        <div class="sales__item-header">
          <img class="sales__img" src="@/assets/img/sunFlower.png" alt="" />
          <h4 class="sales__flover-name">sunFlower</h4>
        </div>
        <div class="sales__price-warpper">
          <div class="sales__price">7$</div>
          <div class="sales__add-to-car">
            <span class="material-symbols-outlined"> shopping_cart </span> add
            to car
          </div>
        </div>
      </li>
      <li class="sales__item">
        <div class="sales__item-header">
          <img class="sales__img" src="@/assets/img/whiteRose.png" alt="" />
          <h4 class="sales__flover-name">whiteRose</h4>
        </div>
        <div class="sales__price-warpper">
          <div class="sales__price">7$</div>
          <div class="sales__add-to-car">
            <span class="material-symbols-outlined"> shopping_cart </span> add
            to car
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="sass">
.material-symbols-outlined
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24
  color: $mainColor
  font-size: 1.5em
.sales
  display: flex
  flex-direction: column
  align-items: center
  gap: 1em
  &__price
    color: $colorGrayA
    font-weight: 500
  &__price-warpper
    display: flex
    justify-content: space-between
  &__add-to-car
    color: $mainColor
    display: flex
    align-items: center
    gap: .4em
  &__list
    display: flex
    justify-content: space-between
    width: 100%
  &__item
    padding: 1em
    background-color: #fff
    border-radius: 5px
    display: flex
    flex-direction: column
    gap: 2em
  &__flover-name
    font-size: 1.4em
    font-weight: 500
</style>
