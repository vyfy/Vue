<template>
  <div class="q-pa-md">
    <h3>Текст тестового задания</h3>
    <div class="q-gutter-md">
      <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated control-color="white"
        navigation padding arrows height="300px" class="bg-primary text-white shadow-1 rounded-borders">
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            <h5>1. Поднять проект на VUE, подключить quasar.</h5>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            <h5>2. Главная страница -
            приветствие, в шапке ниспадающее меню (переход на 2 страницы + на
            главную)</h5>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            <h5>3. Страница1 - форма из минимум 3х полей(дата, текст, select),
            данные из которой отправляются на сервер при нажатии кнопки сохранить
            (post
            запрос через axios, можно просто на localhost, ответ не нужен)</h5>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            <h5>4. Страница2 - Текст тестового задания.</h5>
          </div>
        </q-carousel-slide>
      </q-carousel>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
