<script setup>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const name = ref("");

onBeforeMount(() => {
  const user = firebase.auth().currentUser;
  if (user) {
    name.value = user.email.split("@")[0];
  }
});

const logoutUser = () => {
  firebase
    .auth()
    .signOut()
    .then(() => console.log("signed out"))
    .catch((error) => alert(error.message));
};
</script>

<template>
  <div class="logedInUserContainer">
    <h2>Welcome to you'r own footballExploration {{ name }}</h2>
    <button class="logOutBtn" @click="logoutUser">Logout</button>
  </div>
</template>

<style></style>
