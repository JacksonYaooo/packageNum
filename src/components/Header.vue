<template>
  <div class="header">
    <h2>不取快递别回家</h2>
    <div class="num">
      <input type="text" placeholder="请输入取件码" v-model="inputValue">
      <button @click="add">提交</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';
const inputValue = ref('')
const add = function(){
  emit('add-todo',inputValue.value)
  inputValue.value = ''
}
const emit = defineEmits(['add-todo'])
</script>

<style scoped>
h2{
  padding: 30px 0 10px 0;
}
.num input{
  width: 260px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 17px;
  margin-right: 13px;
}
.num button{
  height: 38px;
  background-color: rgb(173, 128, 215);
  font-size: 16px;
  border: 1px solid #808080;
  border-radius: 6px;
  padding: 6px 17px;
  margin-right: 13px;
}
.num input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>