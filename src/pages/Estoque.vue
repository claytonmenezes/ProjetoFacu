<template>
  <q-page class="q-ma-xl">
    <q-card>
      <q-card-section>
        <h4>Estoque</h4>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-md justify-between">
          <q-input disable borderless v-model="numero" label="Id" class="col-2"/>
          <q-input disable v-model="fornecedor" label="Nome do Produto" class="col-8"/>
          <q-input disable v-model="qtde" label="Quantidade" class="col-2"/>
        </div>
      </q-card-section>
      <q-card-section>
        <q-table :rows="rows" :columns="columns" row-key="name" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

const columns = [
  { name: 'numero', align: 'left', label: 'Id', field: 'numero' },
  { name: 'fornecedor', align: 'left', label: 'Nome do Produto', field: 'fornecedor' },
  { name: 'quantidade', align: 'left', label: 'Quantidade', field: 'quantidade' }
]

const rows = [
  { numero: 1, fornecedor: 'Shampoo Pet', quantidade: '147' },
  { numero: 2, fornecedor: 'Ração', quantidade: '91' },
  { numero: 3, fornecedor: 'Brinquedo Pet', quantidade: '48' }
]

export default defineComponent({
  name: 'Comprar',
  setup () {
    return {
      numero: ref(3),
      fornecedor: ref('Brinquedo Pet'),
      qtde: ref('48'),
      columns,
      rows
    }
  }
})
</script>

<style>

</style>
