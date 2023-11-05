<script setup>
import { ref, toRef, watch } from 'vue'
import { defineProps } from 'vue';
const props = defineProps({
  value: {
    type: Object,
    default: {}
  },
})
const birdArr = ref([])
const rabbArr = ref([])
const { value } = props
watch(() => value, (newValue, oldValue) => {
  console.log(newValue)
  if(!newValue.inputNum) return
  if(newValue.selectNum === '1'){
    birdArr.value.unshift({...newValue})
  }else{
    rabbArr.value.unshift({...newValue})
  }
}, { deep: true });
// const map = {
//   '1' : '菜鸟',
//   '2' : '兔喜'
// }
</script>

<template>
  <div class="listBox">
    <ul>
      <li v-for="(item) in rabbArr" :key="Math.random()">
        <input type="checkbox" class="checkBox" >
        <span>兔喜 ☺ {{ item.inputNum }}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(item) in birdArr" :key="Math.random()">
        <input type="checkbox" class="checkBox"  >
        <span>菜鸟 ✌ {{ item.inputNum }}</span>
      </li>
    </ul>
  </div>
  
</template>

<style scoped>
.listBox{
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
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
}</style>
