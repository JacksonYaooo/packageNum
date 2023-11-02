<script setup>
import { ref, toRef, watch } from 'vue'
import { defineProps } from 'vue';
const props = defineProps({
  value: String,
})

const todoArr = ref([])

watch(() => props.value, (newValue, oldValue) => {
  console.log(newValue)
  todoArr.value.unshift(newValue)
}, { deep: true });
</script>

<template>
  <ul>
    <li>props: {{ props.value }}</li>
    <li v-for="(item) in todoArr" :key="Math.random()">
      <span>{{ item }}</span>
      <button class="back">删除</button>
    </li>
  </ul>
</template>

<style scoped></style>
