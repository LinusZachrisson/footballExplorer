<template>
  <div class="home">
    <div class="match-card">
      <router-link> </router-link>
    </div>

    <form @submit.prevent="searchMatches" class="city-search-box">
      <input type="text" placeholder="what city are you visiting" />
      <button>Search</button>
    </form>
  </div>

  <div class="match-list">List of matches</div>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");
const matches = ref([]);

const searchMatches = () => {
  if (search.value != "") {
    console.log(matches);
  }
};
</script>

<style lang="scss" scoped></style>
