<script setup>
import { ref, toRef, watch } from 'vue'
import { defineProps } from 'vue';
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
})
const todoArr = ref([])
watch(() => props.value, (newValue, oldValue) => {
  todoArr.value.unshift(newValue)
}, { deep: true, immediate: true });
</script>

<template>
  <ul>
    <li v-for="(item) in todoArr" :key="Math.random()">
      <input type="checkbox" class="checkBox">
      <span>{{ item }}</span>
      <button class="back">删除</button>
    </li>
  </ul>
</template>

<style scoped>
ul {
  width: 72%;
  margin: 0 auto;
  margin-top: 24px;
  padding: 0;
}

.checkBox {
  margin-left: 0px;
}

li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0px;
  margin: 24px 0px;
}

span {
  flex: 1;
  text-align: left;
  padding: 2px 16px;
  border-bottom: 1px solid #e18fe3;
}

button {
  margin-right: 12px;
  background-color: rgb(245, 143, 143);
  color: rgb(80, 41, 41);
}</style>
