<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="row justify-center">
      <q-toolbar class="col">
        <q-toolbar-title>
          Тестовое задание Vue Quasar Axious
        </q-toolbar-title>
      </q-toolbar>

      <q-btn color="primary" label="Основное меню">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup @click="$router.push('/')">
              <q-item-section>Главная</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="$router.push('/profile-post')">
              <q-item-section>Форма</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="$router.push('/test-info')">
              <q-item-section>Текст задания</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'LayoutName',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
