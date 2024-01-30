<script setup>
import { onMounted, ref } from "vue";
import { GetFlovers } from "@/api/api.js";

const API_URL = import.meta.env.VITE_API_URL;
const flovers = ref();
const flovers_LS = ref();

onMounted(async () => {
  console.log(flovers.value);
  localStorage.setItem(
    "flovers",
    JSON.stringify([
      {
        name: "borodon",
        num: 2,
        price: ''
      },
      {
        name: "sunFlower",
        num: 2,
        price: ''
      },
    ])
  );
  flovers_LS.value = JSON.parse(localStorage.getItem("flovers"));
  console.log(flovers_LS.value);

  flovers.value = await GetFlovers();
  flovers.value = Object.values(flovers.value);

  flovers.value.forEach((value) => {
    for (let i = 0; i < flovers.length; i++) {
      if (value.name == flovers_LS[i].name) {
        value.price = flovers_LS[i].price;
      }
    }
  });
  console.log("flovers_LS - ", flovers_LS.value);
});
</script>

<template>
  <section class="cart">
    <div class="cart__box">
      <h2 class="cart__h2">Your Cart</h2>
      <ul class="cart__list">
        <template v-for="(value, key) in flovers" :key="key">
          <li class="cart__item">
            <img
              class="cart__img"
              :src="`${API_URL}api/GetFloverImage/${value.name}`"
              alt=""
            />
            <div class="cart__item-info">
              <div class="cart__item-info-top">
                <h3 class="cart__h3">
                  {{ value.name }}
                </h3>
                <span class="material-symbols-outlined"> delete </span>
              </div>
              <div class="cart__item-info-bottom">
                <div class="cart__num-wrapper">
                  <div class="cart__price">$price</div>
                  <div class="cart__num-button button">{{ value.num }}</div>
                </div>
                <p>Total {{ value.price }}$</p>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <div class="cart__chek">
      <div class="cart__chek-info"></div>
      <button class="cart__chek-button button">Checkout</button>
    </div>
  </section>
</template>

<style scoped lang="sass">
.cart
  display: flex
  gap: 2em
  align-items: flex-start
  padding: 3em 0
  &__box
    flex: 1
    display: flex
    flex-direction: column
    background-color: #fff
    padding: 1.5em 3em
    border-radius: 10px
    gap: 2em
  &__h2
    font-weight: 400
  &__h3
    font-weight: 500
    font-size:  1.5em
  &__img
    width: 200px
    height: 200px
    border-radius: 5px
    object-fit: cover
  &__list
    display: flex
    flex-direction: column
    gap: 2em
  &__chek
    background: #fff
    padding: 1em
    border-radius: 10px
  &__item
    display: flex
    gap: 1em
  &__item-info
    padding: 1em
    flex: 1
    display: flex
    flex-direction: column
    justify-content: space-between
  &__item-info-top
    display: flex
    align-items: center
    justify-content: space-between
  &__num-wrapper
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 1em
  &__item-info-bottom
    display: flex
    align-items: flex-end
    justify-content: space-between
</style>
