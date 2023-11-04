<script setup>
import { ref, toRef, watch } from 'vue'
import { defineProps } from 'vue';
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  select: {
    type: String,
    default: ''
  }
})
const cainiaoObj = ref([]) // { select: 'xxx', input: 'yyy'}
const tuxiObj = ref([]) // { select: 'xxx', input: 'yyy'}

watch(() => props.value, (newValue, oldValue) => {
  if (!newValue) return
  if (props.select === '菜鸟') {
    cainiaoObj.value.push({
      select: props.select,
      input: newValue
    })
  } else {
    tuxiObj.value.push({
      select: props.select,
      input: newValue
    })
  }
}, { deep: true, immediate: true });
</script>

<template>
  <div class="todoList">
    <ul>
      <li v-for="(item) in cainiaoObj" :key="Math.random()">
        <input type="checkbox" class="checkBox">
        <span>{{ item.select }} {{ item.input }}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(item) in tuxiObj" :key="Math.random()">
        <input type="checkbox" class="checkBox">
        <span>{{ item.select }} {{ item.input }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todoList{
  display: flex;
  justify-content: space-between;
}
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
}
</style>
