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
      <span>{{ item }}</span>
      <button class="back">删除</button>
    </li>
  </ul>
</template>

<style scoped>
li {}
</style>
