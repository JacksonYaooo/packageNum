<script setup>
import packageNum from "./components/packageNum.vue";
import Header from "./components/Header.vue";
import { ref } from "vue";
const todoNum = ref("123");
const insertTodo = (e) => {
  todoNum.value = e;
};
</script>

<template>
  <div class="box">
    <Header @add-todo="insertTodo"></Header>
    <packageNum :value=todoNum />
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
