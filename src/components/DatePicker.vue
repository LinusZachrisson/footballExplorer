<script setup>
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref(new Date());

const setDate = (value) => {
  date.value = value;

  console.log(value);
};
</script>

<template>
  <div class="datepicker">
    <Datepicker
      v-model="date"
      range
      format="yyyy-mm-dd"
      noHoursOverlay
      @update:modelValue="setDate"
    />
  </div>
</template>

<style lang="scss" scoped>
// .datepicker {
//   width: 70px;
// }
</style>
