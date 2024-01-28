<script setup>
import ComponentTitle from "@/components/ComponentTitle.vue";
import { onMounted, ref } from "vue";

const API_URL = import.meta.env.VITE_API_URL;
const flovers = ref({});
const floversObg = ref();
const slider = ref(0);

onMounted(async () => {
  flovers.value = await fetch(`${API_URL}api/GetFlovers`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });
  console.log(flovers.value);
  floversObg.value = Object.keys(flovers.value);
  console.log(floversObg.value);
  console.log(floversObg.value[0]);
});

function sliderEvent(event) {
  slider.value += event;
}
</script>

<template>
  <section class="sales">
    <ComponentTitle title="Best sales" />

    <button
      @click="sliderEvent(-1)"
      class="slider__button slider__button_left button"
    >
      Left
    </button>
    <button
      @click="sliderEvent(1)"
      class="slider__button slider__button_right button"
    >
      Right
    </button>
    <ul class="sales__list">
      <template v-for="(value, key) in flovers" :key="key">
        <li
          v-if="
            key == floversObg[0] ||
            key == floversObg[1] ||
            key == floversObg[2] ||
            key == floversObg[3] ||
            key == floversObg[4] ||
            key == floversObg[5]
          "
          class="sales__item slider"
          :style="{
            left:
              key == floversObg[0]
                ? `${-256 * (1 + slider) - 16 * 3}px`
                : key == floversObg[1]
                ? `${-256 * (1 + slider) - 16 * 2}px`
                : key == floversObg[2]
                ? `${-256 * (1 + slider) - 16}px`
                : key == floversObg[3]
                ? `${-256 * (1 + slider)}px`
                : key == floversObg[4]
                ? `${-256 * (1 + slider) + 16}px`
                : key == floversObg[5]
                ?  `${-256 * (1 + slider) + 16 * 2}px`
                : 'auto',
          }"
        >
          <div class="sales__item-header">
            <img
              class="sales__img"
              :src="`${API_URL}api/GetFloverImage/${value.name}`"
              alt=""
            />
            <h4 class="sales__flover-name">{{ value.name }}</h4>
          </div>
          <div class="sales__price-warpper">
            <div class="sales__price">{{ value.price }}$</div>
            <div class="sales__add-to-car">
              <span class="material-symbols-outlined"> shopping_cart </span> add
              to car
            </div>
          </div>
        </li>
      </template>
    </ul>
  </section>
</template>

<style scoped lang="sass">
.slider
  transition: 1s
  position: relative
  &__button
    position: absolute
    top: 200px
    &_left
      left: -90px
    &_right
      right: -90px
.material-symbols-outlined
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24
  color: $mainColor
  font-size: 1.5em
.sales
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  gap: 1em
  &__img
    width: 252px
    height: 231px
    border-radius: 10px
    object-fit: cover
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
    overflow: hidden
    position: relative
    transition: 1s
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
