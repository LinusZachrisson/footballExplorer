<script setup>
import { ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const email = ref("");
const password = ref("");

const userLogin = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((data) => console.log(data))
    .catch((err) => alert(err.message));
};
</script>

<template>
  <div class="login">
    <h1>Let's login</h1>
    <form @submit.prevent="userLogin">
      <input type="text" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <input type="submit" value="login" />
      <p>
        No Account yet?<router-link to="/register">register here!</router-link>
      </p>
    </form>
  </div>
</template>

<style></style>
