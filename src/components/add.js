import { inputValue, emit } from './Header.vue';

export const add = function () {
  if (!inputValue.input) alert('输入不能为空');
  emit('add-todo', inputValue);
  const { select, input } = inputValue;
  axios({
    method: 'post',
    url: 'http://124.70.188.74:3001/api/todolist',
    data: {
      select,
      input
    }
  }).then(res => {
    console.log(res);
  });
  inputValue.input = '';
};
