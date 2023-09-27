<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="~assets/quasar-logo-vertical.svg">

      <q-card-section>
        <div class="text-h5">Тестовое задание</div>
        <div class="text-subtitle2 text-bold">by Влад Черкашин</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Приветствую. Данный проект представляет собой исполнение тестового задания с
         помощью Vue/Quasar/Axios. С помощью основного меню можно перейти на соответствующие разделы проекта,
          как, например, получить полную информацию о нем.
      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
