<script setup>
import { computed, onMounted, ref } from "vue";
import { GetFlovers } from "@/api/api.js";
import { addToCart } from "@/AddToCart/addToCart.js";

const API_URL = import.meta.env.VITE_API_URL;
const flovers = ref({});
const floversArr = ref([]);
const search = ref("");
const sortingOpen = ref(false);
const sortBy = ref("price");
const reverse = ref(false);

onMounted(async () => {
  flovers.value = await GetFlovers();
  floversArr.value = Object.values(flovers.value);

  floversArr.value = floversArr.value.sort((a, b) => a.price - b.price);
});

const floversSort = computed(() => {
  if (sortBy.value == "price") {
    return floversArr.value.sort((a, b) =>
      !reverse.value ? a.price - b.price : b.price - a.price
    );
  } else if (sortBy.value == "name") {
    return floversArr.value.sort((a, b) =>
      !reverse.value
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }
});

function sortingOpenEvent() {
  if (sortingOpen.value) {
    sortingOpen.value = false;
  } else {
    sortingOpen.value = true;
  }
}

function sortByChange(value) {
  sortBy.value = value;
}

function reverseChange() {
  if (reverse.value) {
    reverse.value = false;
  } else {
    reverse.value = true;
  }
}
</script>

<template>
  <section class="sales">
    <div class="sales__search search">
      <div
        @click="sortingOpenEvent()"
        class="search__sorting"
        :class="{ 'search__sorting-activ': sortingOpen }"
      >
        Sorting
      </div>
      <div v-if="sortingOpen" class="search__popup-scorting popup">
        <ul class="search__scorting-list">
          <li @click="sortByChange('name')" class="search__scorting-item">
            <div class="search__scorting-item-radio">
              <div
                class="search__scorting-item-radio-inner"
                :class="{ 'radio-inner-activ': sortBy == 'name' }"
              ></div>
            </div>
            <div class="search__scorting-item-name">Name</div>
          </li>
          <li @click="sortByChange('price')" class="search__scorting-item">
            <div class="search__scorting-item-radio">
              <div
                class="search__scorting-item-radio-inner"
                :class="{ 'radio-inner-activ': sortBy == 'price' }"
              ></div>
            </div>
            <div class="search__scorting-item-name">Price</div>
          </li>
        </ul>
      </div>
      <input
        v-model="search"
        type="text"
        placeholder="Search..."
        class="search__input"
      />
      <div @click="reverseChange" class="search__reverse">Reverse</div>
    </div>
    <ul class="sales__list">
      <template v-for="(value, key) in floversSort" :key="key">
        <li
          v-if="value.name.toLowerCase().includes(search.toLowerCase())"
          class="sales__item slider"
        >
          <div class="sales__item-header">
            <img
              class="sales__img"
              :src="`${API_URL}api/GetFloverImage/${value.file_name}`"
              alt=""
            />
            <h4 class="sales__flover-name">{{ value.name }}</h4>
          </div>
          <div class="sales__price-warpper">
            <div class="sales__price">{{ value.price }}$</div>
            <div @click="addToCart(value.name, value.file_name)" class="sales__add-to-cart add-to-cart">
              <span class="material-symbols-outlined"> shopping_cart </span>
              add to car
            </div>
          </div>
        </li>
      </template>
    </ul>
  </section>
</template>

<style scoped lang="sass">
.search
  position: relative
  width: 100%
  background-color: #fff
  padding: 1em 2em
  display: flex
  justify-content: space-between
  align-items: center
  &__input
    border: 3px solid $greyText
    border-radius: 10px
    padding: .5em 1em
    width: 500px
    transition: .5s
  &__input:hover
    border: 3px solid $mainColor
  &__input:focus
    border: 3px solid $mainColor
  &__sorting
    padding: .5em 1em
    border-radius: 10px
    border: 3px solid rgba(0, 0, 0, 0)
    transition: .1s
    cursor: pointer
  &__sorting:hover
    border: 3px solid $mainColor
  &__popup-scorting
    position: absolute
    left: 160px
  &__scorting-item
    display: flex
    align-items: center
    gap: .3em
    cursor: pointer
  &__scorting-item-radio
    border-radius: 20px
    border: 1px solid $gray1
    width: 14px
    height: 14px
    display: flex
    align-items: center
    justify-content: center
  &__scorting-item-radio-inner
    border-radius: 20px
    background-color: rgba(0, 0, 0, 0)
    transition: .5s
    width: 8px
    height: 8px
  &__reverse
    cursor: pointer

.material-symbols-outlined
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24
  color: $mainColor
  font-size: 1.5em
.sales
  display: flex
  flex-direction: column
  align-items: center
  gap: 1em
  padding: 2em 0
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
  &__list
    display: flex
    justify-content: space-between
    gap: .8em
    flex-wrap: wrap
  &__item
    padding: 1em
    background-color: #fff
    border-radius: 5px
    display: flex
    flex-direction: column
    gap: 2em
    transition: .1s
  &__item:hover
    box-shadow: 0 0 5px $customizeHover
    scale: 1.03
  &__flover-name
    font-size: 1.4em
    font-weight: 500

.search__sorting-activ
  border: 3px solid $mainColor

.radio-inner-activ
  background-color: $mainColor
</style>
