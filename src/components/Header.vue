<template>
  <div class="header">
    <h2>-今天要取快递啦-</h2>
    <div class="num1">
      <select class="select" @change="getselect">
        <option value="1">菜鸟</option>
        <option value="2">兔喜</option>
      </select>
      <div class="inputbox">
        <input type="text" placeholder="请输入取件码" v-model.trim="inputValue.input">
      </div>
      <button @click="add">提交</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { defineEmits } from 'vue';
import axios from 'axios'

const inputValue = reactive({
  select: '1',
  input: '',
  checked: false
})
const emit = defineEmits(['add-todo'])
const add = function () {
  if (!inputValue.input) alert('输入不能为空')
  const { select, input } = inputValue
  axios({
    method: 'post',
    url: 'http://124.70.188.74:3001/api/todolist',
    data: {
      select,
      input
    }
  }).then(res=>{
    emit('add-todo', res.data)
  })
  inputValue.input = ''
}
const getselect = function (e) {
  // console.log(e.target.value);
  // 获取select的值,插入input.value
  inputValue.select = e.target.value
}
</script>

<style scoped>
.header {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

h2 {
  padding: 30px 0 10px 0;
  text-align: center;
  color: #534141;
}

.select {
  outline: 0;
  border: none;
  color: #534141;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url("../assets/三角.png") no-repeat scroll right center transparent;
  padding-right: 1rem;
  background-size: 10% 10%;
  font-size: 1rem;
  font-weight: 550;
  box-sizing: border-box;
}


.num1 {
  width: 82%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}

.num1 .inputbox{
  margin: 0 auto;
}
.num1 input {
  font-size: 14px;
  padding: 6px 17px;
  border-radius: 6px;
  margin: 0 16px;
  width: 70%;
  border: 1px solid #ccc;
}
.num1 input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
.num1 button {
  width: 64px;
  background-color: rgb(194, 154, 232);
  color: rgb(69, 0, 142);
  font-size: 0.8rem;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
}

@media screen and (min-width:768px){
  .num1{
    width: 72%;
  }
  .inputbox{
    width: 100%;
  }
  .inputbox input{
    flex: 1;
    margin: 0 auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}

</style>
