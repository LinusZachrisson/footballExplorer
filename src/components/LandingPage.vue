<script setup>
import { ref } from "vue";
import env from "../env";
import DatePicker from "./DatePicker.vue";

const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", env.apiKey);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const search = ref("");
//const matches = ref([]);

const searchMatches = () => {
  if (search.value != "") {
    console.log(search.value);
    fetch(
      `https://v3.football.api-sports.io/teams?name=${search.value}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
};
</script>

<template>
  <div class="home">
    <div class="match-card"></div>

    <form @submit.prevent="searchMatches()" class="city-search-box">
      <input
        type="text"
        placeholder="what city are you visiting"
        v-model="search"
      />
      <input type="submit" value="search" />
      <DatePicker />
    </form>
  </div>

  <div class="match-list">List of matches</div>
</template>

<style lang="scss" scoped></style>
