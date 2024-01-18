<script setup></script>

<template>
  <section class="opener">
    <div class="opener__title-wrapper">
      <div class="opener__title">Flowers, 🌻 what the world needs</div>
      <div class="opener__sub-text">Browse between hundreds of flowers</div>
      <button class="opener__button button">Browse</button>
    </div>
    <ul class="opener__img-warapper">
      <li class="opener__img-item">
        <img class="opener__img" src="@/assets/img/flower1.png" alt="" />
      </li>
      <li class="opener__img-item">
        <img class="opener__img" src="@/assets/img/flower2.png" alt="" />
      </li>
      <li class="opener__img-item">
        <img class="opener__img" src="@/assets/img/flower3.png" alt="" />
      </li>
      <li class="opener__img-item">
        <img class="opener__img" src="@/assets/img/flower4.png" alt="" />
      </li>
      <li class="opener__img-item">
        <img class="opener__img" src="@/assets/img/flower5.png" alt="" />
      </li>
      <li class="opener__img-item">
        <img class="opener__img" src="@/assets/img/flower6.png" alt="" />
      </li>
    </ul>
  </section>
</template>

<style lang="sass">
.opener
  display: flex
  gap: 1em
  &__title-wrapper
    flex: 1
    display: flex
    flex-direction: column
    gap: 2em
    align-items: flex-start
  &__title
    font-size: 3.4em
    width: 7em
  &__img-warapper
    flex: 1.1
    display: flex
    flex-wrap: wrap
    gap: 1em
</style>
