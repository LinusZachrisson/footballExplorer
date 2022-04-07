<script setup>
import { ref } from "vue";

const match = ref();
</script>

<template>
  <div class="match-cards">
    <div>
      <h1>City: {{ match.city }}</h1>
      <div>Team: {{ match.team }}</div>
      <div>Upcoming games: {{ match.game }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
