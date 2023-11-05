<template>
  <div class="header">
    <h2>不取快递别回家</h2>
    <div class="num">
      <select class="select" @change="getSelectNum">
        <option value="1">菜鸟</option>
        <option value="2">兔喜</option>
      </select>
      <input type="text" placeholder="请输入取件码" v-model.trim="inputValue.inputNum">
      <button @click="add">提交</button>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { defineEmits } from 'vue';

const inputValue = reactive({
  selectNum: '1',
  inputNum:''
})
const emit = defineEmits(['add-todo'])
const add = function () {
  if(!inputValue.inputNum) alert('输入不能为空')
  emit('add-todo', inputValue)
  inputValue.inputNum = ''
}
const getSelectNum = function(e){
  // console.log(e.target.value);
  // 获取select的值,插入input.value
  inputValue.selectNum = e.target.value
}
</script>

<style scoped>
h2 {
  padding: 30px 0 10px 0;
  text-align: center;
}

.num {
  display: flex;
  height: 40px;
  width: 72%;
  margin: 0 auto;
  justify-content: space-between;
}

.num input {
  flex: 1;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 17px;
  margin: 0 13px;
}

.num button {
  background-color: rgb(173, 128, 215);
  font-size: 16px;
  padding: 0 20px;
  border: 1px solid #808080;
  border-radius: 6px;
  /* padding: 6px 17px; */
}

.num input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}

.select {
  outline: 0;
  border: none;
  color: #000000;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url("../assets/三角.png") no-repeat scroll right center transparent;
  padding-right: 1rem;
  margin-right: 8px;
  background-size: 10% 10%;
  font-size: 18px;
}</style>
