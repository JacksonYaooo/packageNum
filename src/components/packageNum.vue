<script setup>
import { ref, toRef, watch } from 'vue'
import { defineProps } from 'vue';

const birdArr = ref([])
const rabbArr = ref([])

const props = defineProps({
  value: {
    type: Object,
    default: {}
  }
})
const { value } = props

watch(() => value, (newValue, oldValue) => {
  if(!newValue.inputNum) return
  if(newValue.selectNum === '1'){
    birdArr.value.unshift({...newValue})
  }else{
    rabbArr.value.unshift({...newValue})
  }
}, { deep: true });

const change= (e,index) => {
  e.checked = !e.checked
  if(e.selectNum === '1'){
    const delItem =  birdArr.value.splice(index,1)[0]
    birdArr.value.push({...delItem})
  }
}
const spliceFn = (arr) => {
  arr.map((item,index)=> {
    if(item.checked){
      arr.splice(index,1)
    }
  })
}

function clearItem(){
  spliceFn(birdArr.value)
  spliceFn(rabbArr.value)
}
</script>

<template>
  <div class="listBox">
    <ul>
      <li v-for="(item,index) in rabbArr" :key="Math.random()">
        <input type="checkbox" class="checkBox"  @change="change(item,index)" :checked="item.checked">
        <span :class="item.checked ? 'checked' : ''">兔喜 ☺ {{ item.inputNum }}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in birdArr" :key="Math.random()">
        <input type="checkbox" class="checkBox"  @change="change(item,index)" :checked="item.checked" >
        <span :class="item.checked ? 'checked' : ''">菜鸟 ✌ {{ item.inputNum }}</span>
      </li>
    </ul>
  </div>
  <button class="clear" @click="clearItem">一键清除</button>
</template>

<style scoped>
.listBox{
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
}
.checked{
  color: #e18fe3;
  text-decoration: line-through;
}
ul {
  width: 100%;
  margin: 0 auto;
  margin-top: 1.5rem;
  padding: 0;
}
ul:nth-child(2){
  margin-left: 24px;
}

.checkBox {
  margin-left: 0rem;
}

li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0rem;
  margin: 1.5rem 0rem;
}

span {
  flex: 1;
  text-align: left;
  padding: .125rem 1rem;
  border-bottom: .0625rem solid #e18fe3;
}

button {
  margin-right: .75rem;
  background-color: rgb(245, 143, 143);
  color: rgb(80, 41, 41);
}
.clear{
  position: absolute;
  bottom: 48px;
  right: 64px;
  background-color: rgb(228, 70, 70);
  color: #ffe1e1;
  font-size: 16px;
  padding: 12px 20px;
  border: 2px solid #820000;
  border-radius: 6px;
}
</style>
