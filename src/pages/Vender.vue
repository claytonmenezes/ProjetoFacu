<template>
  <q-page class="q-ma-xl">
    <q-card>
      <q-card-section>
        <h4>Vender</h4>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-md justify-between">
          <q-input disable borderless v-model="numero" label="Id" class="col-2"/>
          <q-select v-model="produto" label="Produto" :options="produtoOptions" class="col-10"/>
          <div class="row q-col-gutter-md col-4">
            <q-input v-model="dataVenda" type="date" label="Data da Venda" class="col-6"/>
          </div>
          <q-input v-model="qtde" label="Quantidade" class="col-2"/>
          <q-input v-model="valor" label="Valor Unitário" class="col-2"/>
          <q-input disable borderless v-model="valorTotal" label="Valor Total" class="col-2"/>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row justify-between">
          <div class="row q-col-gutter-sm">
            <div> <q-btn disable label="Novo" /> </div>
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
  { name: 'numero', align: 'left', label: 'Id', field: 'numero' },
  { name: 'cliente', align: 'left', label: 'Produto', field: 'cliente' },
  { name: 'dataVenda', align: 'left', label: 'Data da Venda', field: 'dataVenda' },
  { name: 'quantidade', align: 'left', label: 'Quantidade', field: 'quantidade' },
  { name: 'valorUnitario', align: 'left', label: 'Valor Unitário', field: 'valorUnitario' },
  { name: 'valor', align: 'left', label: 'Valor Total', field: 'valor' }
]

const rows = [
  { numero: 1, cliente: 'Shampoo Pet', dataVenda: '29/10/2021', quantidade: '03', valorUnitario: '42,51', valor: '127,53' },
  { numero: 2, cliente: 'Ração', dataVenda: '18/11/2021', quantidade: '09', valorUnitario: '68,51', valor: '616,59' }
]

export default defineComponent({
  name: 'Comprar',
  setup () {
    return {
      numero: ref(3),
      produto: ref('Brinquedo Pet'),
      produtoOptions: ref([
        { value: 1, label: 'Shampoo Pet' },
        { value: 2, label: 'Ração' }
      ]),
      dataVenda: ref('2021-10-25'),
      qtde: ref('2'),
      valor: ref('35,60'),
      valorTotal: ref('71,20'),
      tab: ref('one'),
      columns,
      rows
    }
  }
})
</script>

<style>

</style>
