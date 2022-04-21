<script setup>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import env from "../env";

const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", env.apiKey);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const name = ref("");
const search = ref("");
const stadiums = ref([]);

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

const searchStadiums = () => {
  if (search.value != "") {
    console.log(search.value);
    fetch(
      `https://v3.football.api-sports.io/venues?city=${search.value}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((stadiumData) => {
        console.log(stadiumData);
        stadiums.value = stadiumData.response;
        search.value = "";
      });
  }
};

const addStadiums = () => {
  //To be finished
  console.log("WIP");
};
</script>

<template>
  <div class="logedin-user-container">
    <div class="logedin-user-square">
      <div class="logedin-user-nav">
        <router-link to="/savedstadiums">My page</router-link>
      </div>
      <h2>Welcome to your own footballExploration {{ name }}</h2>
      <button class="logout-btn" @click="logoutUser">Logout</button>
    </div>

    <div class="stadium-form">
      <form @submit.prevent="searchStadiums()" class="stadium-search-box">
        <input
          type="text"
          placeholder="search for visited cities..."
          v-model="search"
          class="stadium-search-input"
        />
        <input type="submit" value="search" />
      </form>
    </div>
  </div>
  <div class="stadium-list">
    <div class="stadium-cards" v-for="stadium in stadiums" :key="stadium">
      <h2>Name: {{ stadium.name }}</h2>
      <p>Address: {{ stadium.address }}</p>
      <button @click="addStadiums">Save to your list</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logedin-user-container {
  display: flex;
  .logedin-user-square {
    font-family: "Roboto", sans-serif;
    border: 1px solid black;
    width: 30rem;
    height: 15rem;
    margin: 10px;
    border-radius: 10px;
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
    .logout-btn {
      background: #ff7675;
      border-radius: 999px;
      box-shadow: #ff7675 0 10px 20px -10px;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
        NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
        EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
        "Helvetica Neue", "Noto Sans", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      opacity: 1;
      outline: 0 solid transparent;
      padding: 8px 18px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: fit-content;
      word-break: break-word;
      border: 0;
      margin-top: 10px;
    }
  }
  .stadium-form {
    margin-left: 25%;
    margin-top: 100px;
    flex-wrap: wrap;
    input {
      border: 0;
      padding: 10px 20px;
      height: 50px;
      background: white;
      border-radius: 3px 0 0 3px;
      box-shadow: 0px 8px 15px rgba(#2d3436, 0.3);
      transition: all 0.4s ease;
      input[type="password"] {
        border-radius: 3px 0 0 3px;
      }
    }
  }
}
.stadium-list {
  margin-left: 20%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  .stadium-cards {
    font-family: "Roboto", sans-serif;
    border: 1px solid black;
    width: 30rem;
    height: 15rem;
    margin: 10px;
    border-radius: 10px;
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
    button {
      background: #00b894;
      border-radius: 999px;
      box-shadow: #00b894 0 10px 20px -10px;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
        NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
        EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
        "Helvetica Neue", "Noto Sans", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      opacity: 1;
      outline: 0 solid transparent;
      padding: 8px 18px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: fit-content;
      word-break: break-word;
      border: 0;
      margin-top: 20px;
    }
  }
}
</style>
