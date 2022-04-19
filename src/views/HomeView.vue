<script setup>
import { ref } from "vue";
import env from "../env";
import DatePicker from "../components/DatePicker.vue";

const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", env.apiKey);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const search = ref("");
const matches = ref([]);

const searchMatches = () => {
  if (search.value != "") {
    console.log(search.value);
    fetch(
      `https://v3.football.api-sports.io/teams?name=${search.value}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.response);

        fetch(
          `https://v3.football.api-sports.io/fixtures?team=${data.response[0].team.id}&next=10`,
          requestOptions
        )
          .then((response) => response.json())
          .then((newData) => {
            console.log(newData);
            matches.value = newData.response;
            search.value = "";
          });
      });
  }
};
</script>

<template>
  <div class="home">
    <h1>FootballExplorer</h1>
    <form @submit.prevent="searchMatches()" class="city-search-box">
      <input
        type="text"
        placeholder="what city are you visiting"
        v-model="search"
      />
      <DatePicker v-model="search" />
      <input type="submit" value="search" />
    </form>

    <div class="match-container">
      <div class="match-list" v-for="games in matches" :key="games">
        <div class="match-card">
          <h3>{{ games.teams.home.name }} - {{ games.teams.away.name }}</h3>
          <p>Date: {{ games.fixture.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  font-family: "Roboto", sans-serif;
  text-align: center;
  h1 {
    font-family: "Bebas Neue", cursive;
    text-align: center;
  }
  form {
    display: flex;
    justify-content: center;
  }
  .match-container {
    display: flex;
    .match-list {
      border: 1px solid black;
      width: 30rem;
      height: 15rem;
      padding: 20px;
      margin: 10px;
      .match-card {
        justify-content: center;
      }
    }
  }
}
</style>
