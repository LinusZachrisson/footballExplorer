<script setup>
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>

<template>
  <div class="datepicker">
    <Datepicker v-model="date"></Datepicker>
  </div>
</template>

<style lang="scss" scoped>
.datepicker {
  width: 70px;
}
</style>
