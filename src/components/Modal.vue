<template>
  <div class="modal" v-if="props.isVisible" @click="handelCancel">
    <div class="notice" @click.stop>
      <span>确认邮件提醒吗？</span>
      <button @click="handleOk">确定</button>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { defineProps } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:isVisible'])
const handelCancel = () => {
  emits('update:isVisible', false)
}
const handleOk = () => {
  emits('update:isVisible', false)
}
console.log(props)
</script>
<style scoped>
.modal {
  position: absolute;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
}

.notice {
  position: relative;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 100px;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  transform: translate(-50%, -50%);
  background: #fff;
}

.notice span {
  margin-left: 1rem;
}

button {
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
  width: 64px;
  background-color: rgb(194, 154, 232);
  color: rgb(69, 0, 142);
  font-size: 0.8rem;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
}</style>