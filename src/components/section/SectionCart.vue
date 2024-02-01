<script setup>
import { computed, onMounted, ref } from "vue";
import { GetFlovers } from "@/api/api.js";

const API_URL = import.meta.env.VITE_API_URL;
const flovers = ref();
const flovers_LS = ref([]);

onMounted(async () => {
  console.log(flovers.value);
  flovers_LS.value = JSON.parse(localStorage.getItem("flovers"));
  console.log(flovers_LS.value);

  flovers.value = await GetFlovers();
  flovers.value = Object.values(flovers.value);

  for (let j = 0; j < flovers_LS.value.length; j++) {
    for (let i = 0; i < flovers.value.length; i++) {
      if (flovers_LS.value[j].name == flovers_LS.value[i].name) {
        flovers_LS.value[j].price = flovers.value[i].price;
        break;
      }
    }
  }
});

const flovers_LS_all_price = computed(() => {
  return flovers_LS.value.reduce(
    (accumulator, currentObject) =>
      accumulator + currentObject.price * currentObject.num,
    0
  );
});

const flovers_LS_all_num = computed(() => {
  return flovers_LS.value.reduce(
    (accumulator, currentObject) => accumulator + currentObject.num,
    0
  );
});

function floverNumChange(key, num) {
  flovers_LS.value[key].num += num;
  console.log("flovers_LS.value[key].num: ", flovers_LS.value[key].num);
  localStorage.setItem("flovers", JSON.stringify(flovers_LS.value));
}

function delAllEvent() {
  flovers_LS.value = [];
  localStorage.setItem("flovers", JSON.stringify([]));
}
</script>

<template>
  <section class="cart">
    <div class="cart__box">
      <div class="cart__title-wrapper">
        <h2 class="cart__h2">Your Cart</h2>
        <div @click="delAllEvent()" class="cart__button-del-all">
          del all <span class="material-symbols-outlined"> delete </span>
        </div>
      </div>
      <ul class="cart__list">
        <template v-for="(value, key) in flovers_LS" :key="key">
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
                  <div class="cart__price">{{ value.price }}$</div>
                  <div class="cart__num-button">
                    <div
                      @click="floverNumChange(key, -1)"
                      style="padding: 0.3em 0.6em"
                      class="cart__button_left button"
                    >
                      -
                    </div>
                    <div class="cart__button-value">{{ value.num }}</div>
                    <div
                      @click="floverNumChange(key, 1)"
                      style="padding: 0.3em 0.6em"
                      class="cart__button_right button"
                    >
                      +
                    </div>
                  </div>
                </div>
                <p>Total {{ value.price * value.num }}$</p>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <div class="cart__flovers_LS_all_price">
      <div class="cart__flovers_LS_all_price-info">
        Subtotal for {{ flovers_LS_all_num }} items: {{ flovers_LS_all_price }}$
      </div>
      <button class="cart__flovers_LS_all_price-button button">Checkout</button>
    </div>
  </section>
</template>

<style scoped lang="sass">
.cart
  display: flex
  gap: 2em
  align-items: flex-start
  padding: 3em 0
  &__flovers_LS_all_price-info
    font-weight: 400
    font-size: 1.3em
  &__button-del-all
    display: flex
    align-items: center
    cursor: pointer
  &__title-wrapper
    display: flex
    align-items: center
    justify-content: space-between
  &__button
    &_left
      border-top-right-radius: 0px
      border-bottom-right-radius: 0px
    &_right
      border-top-left-radius: 0px
      border-bottom-left-radius: 0px
  &__button-value
    padding: 0 .5em
    color: #fff
    background-color: $mainColor
    display: flex
    align-items: center
  &__num-button
    display: flex
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
  &__flovers_LS_all_price
    background: #fff
    padding: 1em
    border-radius: 10px
    display: flex
    flex-direction: column
    gap: 1em
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
