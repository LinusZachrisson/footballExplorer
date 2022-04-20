<script setup>
import { onBeforeMount } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const user = firebase.auth().currentUser;

onBeforeMount(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      router.replace("/");
    } else if (route.path === "/login" || route.path === "/register") {
      router.replace("/personalpage");
    }
  });
});
</script>

<template>
  <div class="home-container">
    <div class="home-nav" v-if="!user">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.home-container {
  background-image: url("./assets/pexels-cristian-manieri-11849230.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  height: 100vh;
}
.home-nav {
  height: 4rem;
  background-color: #2d3436;
  z-index: 2;
  display: flex;
  opacity: 0.6;
  a {
    text-decoration: none;
    align-items: baseline;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
    padding: 20px;
    text-transform: uppercase;
    color: #fdcb6e;
    opacity: 1;
    &:active &:visited {
      text-decoration: none;
    }
    &:hover {
      color: black;
    }
  }
}
</style>
