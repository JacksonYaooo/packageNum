<script setup>
import packageNum from "./components/packageNum.vue";
import Header from "./components/Header.vue";
import { ref } from "vue";
const todoNum = ref("");
const todoSelect = ref("");
const insertTodo = (select, input) => {
  todoSelect.value = select
  todoNum.value = input;
};
</script>

<template>
  <div class="box">
    <Header @add-todo="insertTodo"></Header>
    <packageNum :value=todoNum :select=todoSelect />
  </div>
</template>

<style scoped>
.box {
  height: 700px;
  width: 540px;
  background-color: rgb(254, 193, 253);
  border-radius: 6%;
}
</style>
