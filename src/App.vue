<script setup>
import packageNum from "./components/packageNum.vue";
import Header from "./components/Header.vue";
import { reactive, ref } from "vue";

let inputNum = reactive({});

const insertTodo = (e) => {
  Object.assign(inputNum, e)
};
</script>

<template>
  <div class="box">
    <Header @add-todo="insertTodo"></Header>
    <packageNum :value=inputNum />
  </div>
</template>

<style scoped>
.box {
  height: 700px;
  /* width: 540px; */
  background-color: rgb(250, 210, 250);
  border-radius: 32px;
  /* margin: auto; */
  position: relative;
}
@media screen and (max-width:768px){
  .box{
    width: 100%;
  }
}
</style>
