<script setup>
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss";

const date = ref(new Date().toISOString());

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
      noHoursOverlay
      @update:modelValue="setDate"
    />
  </div>
</template>

<style lang="scss" scoped></style>
