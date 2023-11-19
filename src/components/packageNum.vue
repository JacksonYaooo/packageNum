<script setup>
import { onMounted, ref, toRef, watch } from 'vue'
import { defineProps } from 'vue';
import axios from 'axios';

const birdArr = ref([])
const rabbArr = ref([])

const props = defineProps({
  value: {
    type: Object,
    default: {}
  }
})
const { value } = props

onMounted(() => {
  // 发起一个get请求
  axios({
    method: 'get',
    url: 'http://124.70.188.74:3001/api/todolist'
  }).then(res => {
    const data = res.data
    data.map(i => {
      if (i.select === '1') {
        birdArr.value.push(i)
      } else {
        rabbArr.value.push(i)
      }
    })
  })
})

watch(() => value, (newValue, oldValue) => {
  if (!newValue.input) return
  if (newValue.select === '1') {
    birdArr.value.unshift({ ...newValue })
  } else {
    rabbArr.value.unshift({ ...newValue })
  }
  console.log(birdArr.value)
}, { deep: true });

const change = (e, index) => {
  console.log(e)
  e.checked = !e.checked
  if (e.select === '1') {
    // console.log(e)
    console.log(birdArr.value)
    birdArr.value = birdArr.value.filter(item => item._id !== e._id)
    birdArr.value.push({ ...e });
  } else {
    rabbArr.value = rabbArr.value.filter(item => item._id !== e._id)
    rabbArr.value.push({ ...e });
  }
}

function getId() {
  const birdId = birdArr.value.filter(item => item.checked).map(item => item._id)
  const rabbId = rabbArr.value.filter(item => item.checked).map(item => item._id)
  return [...birdId, ...rabbId]
}

function clearItem() {
  const ids = getId()
  axios({
    method: 'post',
    url: 'http://124.70.188.74:3001/api/todolist/delete',
    data: ids
  }).then(res => {
    console.log(res)
    if (res.status === 200) {
      birdArr.value = birdArr.value.filter(item => {
        return item.checked !== true
      })
      rabbArr.value = rabbArr.value.filter(item => {
        return item.checked !== true
      })
    }
  })
}
</script>

<template>
  <div class="listBox">
    <ul>
      <li v-for="(item, index) in rabbArr" :key="item._id">
        <input type="checkbox" class="checkBox" @change="change(item, index)" :checked="item.checked">
        <span :class="item.checked ? 'checked' : ''">兔喜 ☺ <br />{{ item.input }}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in birdArr" :key="item._id">
        <input type="checkbox" class="checkBox" @change="change(item, index)" :checked="item.checked">
        <span :class="item.checked ? 'checked' : ''">菜鸟 ✌ <br />{{ item.input }}</span>
      </li>
    </ul>
  </div>
  <button class="clear" @click="clearItem">一键清除</button>
</template>

<style scoped>
.listBox {
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
}

.checked {
  color: #e18fe3;
  text-decoration: line-through;
}

ul {
  width: 100%;
  margin: 0 auto;
  margin-top: 1.5rem;
  padding: 0;
}

ul:nth-child(2) {
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
  font-size: 0.8rem;
}

.clear {
  background-color: rgb(245, 143, 143);
  position: absolute;
  bottom: 48px;
  right: 64px;
  color: #a31818;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
}
</style>
