<template>
  <h3 class="q-pa-md">Форма для заполнения</h3>

  <form @submit.prevent="postData" class="card text-center m-3">
    <div>
      <label for="dateId">Дата</label>
      <input type="date" id="dateId" v-model="formData.dateId" />
    </div>
    <div>
      <label for="title">Текст</label>
      <input type="text" id="title" v-model="formData.title" />
    </div>
    <div>
    <select id="selectid" v-model="formData.selectid" style="margin-top: 16px">
      <option disabled value="">Выберите один из вариантов</option>
      <option>А</option>
      <option>Б</option>
      <option>В</option>
    </select>
  </div>
    <button style="margin-top: 16px">Сохранить</button>
  </form>
  <!-- <div class="q-pa-md">Отправленные данные (в консоли): {{ formData }}</div> -->
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreatePost',
  data: () => ({
    formData: {
      dateId: '',
      title: '',
      selectid: ''
    }
  }),
  methods: {
    postData () {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', this.formData)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped>
label {
  display: block;
}
</style>
