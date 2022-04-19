<script setup>
//import LandingPage from "./components/LandingPage";
import { onBeforeMount } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

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
  <div class="home-nav">
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.home-nav {
  height: 2.5rem;
  background-color: #b2bec3;
  a {
    text-decoration: none;
    display: flex;
    align-items: baseline;
  }
}
</style>
