<script setup>
import { ref } from "vue";

const API_URL = import.meta.env.VITE_API_URL;
const login = ref("");
const email = ref("");
const password = ref("");

async function loginPost() {
  await fetch(`${API_URL}api/PostReg`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: login.value,
      email: email.value,
      password: password.value,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.code == 200) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("password", password.value);
      }
    })
    .catch((e) => {
      throw e;
    });
}
</script>

<template>
  <section class="form-authorization">
    <div class="componemt-authorization">
      <div class="componemt-authorization__box">
        <div class="componemt-authorization__form-wrapper">
          <header class="componemt-authorization__header">
            <div class="componemt-authorization__header-top">
              <h2 class="componemt-authorization__h2">Register</h2>
              Back to home
            </div>
            <div class="componemt-authorization__header-bottom">Register and help us help you</div>
          </header>
          <form @submit.prevent="loginPost" class="componemt-authorization__form">
            <input v-model="login" name="login" placeholder="Username" type="text" />
            <input v-model="email" name="mail" placeholder="Email" type="text" />
            <input v-model="password" name="password" placeholder="Password" type="password" />
            <input value="Register" class="button" type="submit" />
          </form>
        </div>
        <RouterLink :to="{ name: 'Login' }">
          <div class="componemt-authorization__linc-to-register">
            Already have an account? <span class="main-color"> Login</span>
          </div>
        </RouterLink>
      </div>
      <img class="componemt-authorization__img" src="@/assets/img/reg.png" alt="" />
    </div>
  </section>
</template>

<style scoped lang="sass">
</style>
