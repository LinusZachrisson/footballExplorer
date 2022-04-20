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
          `https://v3.football.api-sports.io/fixtures?team=${data.response[0].team.id}&next=3`,
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
        placeholder="what city are you visiting..."
        v-model="search"
        class="city-search-input"
      />
      <DatePicker v-model="search" />
      <input type="submit" value="search" />
    </form>

    <div class="match-container">
      <div class="match-list" v-for="games in matches" :key="games">
        <div class="match-card">
          <h3>{{ games.teams.home.name }} - {{ games.teams.away.name }}</h3>
          <p>Date: {{ games.fixture.date }}</p>
          <p>League: {{ games.league.name }}</p>
          <p>Venue: {{ games.fixture.venue.name }}</p>
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
    margin-top: 50px;
  }
  form {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    input {
      border: 0;
      padding: 10px 20px;
      height: 50px;
      background: white;
      border-radius: 3px;
      box-shadow: 0px 8px 15px rgba(#2d3436, 0.3);
      transition: all 0.4s ease;
    }
  }
  .match-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-left: 50px;
    width: 70%;
    .match-list {
      border: 1px solid black;
      width: 30rem;
      height: 15rem;
      margin: 10px;
      border-radius: 10px;
      backdrop-filter: blur(20px);
      border: 2px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
      padding: 50px 35px;
      .match-card p {
        margin-top: 10px;
      }
    }
  }
}
</style>
