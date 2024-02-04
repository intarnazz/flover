<script setup>
import { ref } from "vue";
import { PostLogin } from "@/api/api.js";

const login = ref("");
const password = ref("");

async function loginPost() {
  try {
    await PostLogin(login.value, password.value);
  } catch (e) {
    // console.log(e);
  }
}
</script>

<template>
  <section class="form-authorization">
    <div class="componemt-authorization">
      <div class="componemt-authorization__box">
        <div class="componemt-authorization__form-wrapper">
          <header class="componemt-authorization__header">
            <div class="componemt-authorization__header-top">
              <h2 class="componemt-authorization__h2">Login</h2>
              Back to home
            </div>
            <div class="componemt-authorization__header-bottom">
              Login and have more fun
            </div>
          </header>
          <form
            @submit.prevent="loginPost"
            class="componemt-authorization__form"
          >
            <input
              v-model="login"
              name="login"
              placeholder="Username"
              type="text"
            />
            <input
              v-model="password"
              name="password"
              placeholder="Password"
              type="password"
            />
            <input value="Login" class="button" type="submit" />
          </form>
        </div>
        <RouterLink :to="{ name: 'Reg' }">
          <div class="componemt-authorization__linc-to-register">
            dont have an account? <span class="main-color">Register </span>
          </div>
        </RouterLink>
      </div>

      <img
        class="componemt-authorization__img"
        src="@/assets/img/login.png"
        alt=""
      />
    </div>
  </section>
</template>

<style scoped lang="sass"></style>
