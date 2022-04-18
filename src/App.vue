<script setup>
import LandingPage from "./components/LandingPage";
import { onBeforeMount } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      router.replace("./LandingPage");
    } else if (route.path === "/login" || route.path === "/register") {
      router.replace("/logedInUser");
    }
  });
});
</script>

<template>
  <div>
    <LandingPage />
  </div>
</template>

<style lang="scss"></style>
