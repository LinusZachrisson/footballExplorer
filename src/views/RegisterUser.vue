<script setup>
import { ref } from "vue";
import firebase from "firebase";

const email = ref("");
const password = ref("");

const userRegister = () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      alert(user);
    })
    .catch((error) => alert(error.message));
};
</script>

<template>
  <div class="register">
    <h1>Let's register you'r account!</h1>
    <form @submit.prevent="userRegister">
      <input type="text" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <input type="submit" value="register" />
      <p>
        Already have an account?<router-link to="/login"
          >login here!</router-link
        >
      </p>
    </form>
  </div>
</template>

<style></style>
