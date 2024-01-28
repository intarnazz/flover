<script setup>
import ComponentTitle from "@/components/ComponentTitle.vue";
import { nextTick, onMounted, ref } from "vue";

const API_URL = import.meta.env.VITE_API_URL;
const flovers = ref({});
const floversArr = ref([]);
const slider = ref(-599);
const sliderTransition = ref(false);
const sliderEventNum = ref(1);

onMounted(async () => {
  flovers.value = await fetch(`${API_URL}api/GetFlovers`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });
  console.log(flovers.value);
  floversArr.value = Object.values(flovers.value);
});

function sliderEvent(event) {
  if (sliderTransition.value == false) {
    if (event == "right") {
      slider.value += 288 * sliderEventNum.value;

      var item = floversArr.value.shift();
      floversArr.value.push(item);

      setTimeout(() => {
        sliderTransition.value = true;
        slider.value -= 288 * sliderEventNum.value;
        setTimeout(() => {
          sliderTransition.value = false;
          sliderEventNum.value = 1

        }, 1000);
      }, 1);
    } else if (event == "left") {
      sliderTransition.value = false;
      slider.value -= 288 * sliderEventNum.value;

      var item = floversArr.value.pop();
      floversArr.value.unshift(item);

      setTimeout(() => {
        sliderTransition.value = true;
        slider.value += 288 * sliderEventNum.value;
        setTimeout(() => {
          sliderTransition.value = false;
          sliderEventNum.value = 1
        }, 1000);
      }, 1);
    }
  } else {
    ++sliderEventNum.value
  }
}
</script>

<template>
  <section class="sales">
    <ComponentTitle title="Best sales" />

    <button
      @click="sliderEvent('left')"
      class="slider__button slider__button_left button"
    >
      Left
    </button>
    <button
      @click="sliderEvent('right')"
      class="slider__button slider__button_right button"
    >
      Right
    </button>
    <div class="slider-box">
      <ul
        class="sales__list"
        :class="{ transition: sliderTransition }"
        :style="`margin-left: ${slider}px;`"
      >
        <template v-for="(value, key) in floversArr" :key="key">
          <li class="sales__item slider">
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
                <span class="material-symbols-outlined"> shopping_cart </span>
                add to car
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="sass">
.transition
  transition: 1s
.slider-box // На нахуй
  width: 100%
  overflow: hidden
.slider
  position: relative
  top: 0
  left: 0
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
    overflow: hidden
    position: relative
    gap: .8em
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
