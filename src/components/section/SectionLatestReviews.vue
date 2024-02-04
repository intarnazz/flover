<script setup>
import ComponentTitle from "@/components/ComponentTitle.vue";
import { onMounted, ref } from "vue";
const loding = ref(false);

onMounted(() => {
  loding.value = true;
});
</script>

<template>
  <section v-if="loding" class="latest-reviews">
    <ComponentTitle title="latest reviews" />
    <div class="latest-reviews__wrapper">
      <ul class="latest-reviews__list">
        <li class="latest-reviews__item">
          <div class="latest-reviews__item-wrapper-img">
            <img src="@/assets/img/emily.png" alt="" />
          </div>
          <div class="latest-reviews__item-content">
            <div class="latest-reviews__item-name">Lara</div>
            <div class="latest-reviews__item-text">
              Only when the sweets of pleasures have flooded the sinner's mouth
              to the brim will midnight come, and the sound of the bells ring,
              turning him into a delight for the devil within him.
            </div>
            <div class="latest-reviews__item-reviews">
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
            </div>
          </div>
        </li>
        <li class="latest-reviews__item">
          <div class="latest-reviews__item-wrapper-img">
            <img src="@/assets/img/niga.png" alt="" />
          </div>
          <div class="latest-reviews__item-content">
            <div class="latest-reviews__item-name">Niga</div>
            <div class="latest-reviews__item-text">
              The secret of success is simple, but it is a secret
            </div>
            <div class="latest-reviews__item-reviews">
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/starEmpty.png" alt="" />
            </div>
          </div>
        </li>
        <li class="latest-reviews__item">
          <div class="latest-reviews__item-wrapper-img">
            <img
              class="latest-reviews__item-img"
              src="@/assets/img/hans.png"
              alt=""
            />
          </div>
          <div class="latest-reviews__item-content">
            <div class="latest-reviews__item-name">Hans</div>
            <div class="latest-reviews__item-text">
              Сидит медведь в машине, вдруг видит - снег пошел. Что за херня -
              подумал медведь, вышел из машины и замерз. 🔥💯
            </div>
            <div class="latest-reviews__item-reviews">
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
              <img src="@/assets/img/star.png" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <h2 v-else>Loding...</h2>
</template>

<style scoped lang="sass">
.latest-reviews
  display: flex
  flex-direction:  column
  align-items: center
  gap: 1em
  &__list
    display: flex
    gap: 1em
    justify-content: space-between
    align-items: flex-start
  &__item
    display: flex
    gap: 1em
    background-color: #fff
    padding: 1em
    width: 365px
  &__item-content
    display: flex
    flex-direction: column
    gap: 1em
  &__item-name
    font-weight: 700
  &__item-text
    color: rgba(0, 0, 0, .7)
  &__item-reviews
    display: flex
    gap: .2em
  &__item-img
    width: 58px
    height: 58px
    border-radius: 58px
    object-fit: cover
</style>
