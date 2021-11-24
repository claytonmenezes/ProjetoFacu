<template>
  <q-page class="q-ma-xl">
    <q-card>
      <q-card-section>
        <h4>Vender</h4>
        <q-tabs v-model="tab">
          <q-tab label="Cabeçalho" name="one" />
          <q-tab label="Itens" name="two" />
        </q-tabs>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-md justify-between">
          <q-input v-model="numero" label="Número" class="col-2"/>
          <q-input v-model="cliente" label="Cliente" class="col-10"/>
          <div class="row q-col-gutter-md col-4">
            <q-input v-model="dataCompra" type="date" label="Data da Compra" class="col-6"/>
            <q-input v-model="dataVencimento" type="date" label="Data de Vencimento" class="col-6"/>
          </div>
          <q-input v-model="valorTotal" label="Valor Total" class="col-3"/>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row justify-between">
          <div class="row q-col-gutter-sm">
            <div> <q-btn label="Novo" /> </div>
            <div> <q-btn label="Editar" /> </div>
            <div> <q-btn label="Salvar" /> </div>
            <div> <q-btn label="Cancelar" /> </div>
          </div>
          <div>
            <q-btn label="Excluir" />
          </div>
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
  { name: 'numero', align: 'left', label: 'Número', field: 'numero' },
  { name: 'cliente', align: 'left', label: 'Cliente', field: 'cliente' },
  { name: 'valor', align: 'left', label: 'Valor', field: 'valor' }
]

const rows = [
  { numero: 1, cliente: 'cliente de Shampoo Pet', valor: '20.000,00' },
  { numero: 2, cliente: 'cliente de Ração', valor: '36.000,00' }
]

export default defineComponent({
  name: 'Comprar',
  setup () {
    return {
      numero: ref(3),
      cliente: ref('Clayton Menezes'),
      dataCompra: ref('2021-10-25'),
      dataVencimento: ref('2021-10-25'),
      valorTotal: ref('50.000,00'),
      tab: ref('one'),
      columns,
      rows
    }
  }
})
</script>

<style>

</style>
