<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          PetShop
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered >
      <q-list>
        <q-item-label header ></q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      essentialLinks: ref([
        { title: 'Home', icon: 'home', link: '#/' },
        { title: 'Comprar', icon: 'shopping_cart', link: '#/Comprar' },
        { title: 'Vender', icon: 'sell', link: '#/Vender' },
        { title: 'Produto', icon: 'category', link: '#/Produto' },
        { title: 'Estoque', icon: 'inventory', link: '#/Estoque' }
      ]),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
