<template>
  <q-page class="q-ma-xl">
    <q-card>
      <q-card-section>
        <h4>Comprar</h4>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-md justify-between">
          <q-input disable borderless v-model="numero" label="Id" class="col-2"/>
          <q-input v-model="fornecedor" label="Nome do Produto" class="col-10"/>
          <div class="row q-col-gutter-md col-4">
            <q-input v-model="dataCompra" type="date" label="Data da Compra" class="col-6"/>
            <q-input v-model="dataVencimento" type="date" label="Data de Vencimento" class="col-6"/>
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
  { name: 'fornecedor', align: 'left', label: 'Nome do Produto', field: 'fornecedor' },
  { name: 'dataCompra', align: 'left', label: 'Data da Compra', field: 'dataCompra' },
  { name: 'dataVencimento', align: 'left', label: 'Data de Vencimento', field: 'dataVencimento' },
  { name: 'quantidade', align: 'left', label: 'Quantidade', field: 'quantidade' },
  { name: 'valorUnitario', align: 'left', label: 'Valor Unitário', field: 'valorUnitario' },
  { name: 'valor', align: 'left', label: 'Valor', field: 'valor' }
]

const rows = [
  { numero: 1, fornecedor: 'Shampoo Pet', dataCompra: '25/10/2021', dataVencimento: '25/10/2022', quantidade: '150', valorUnitario: '32,51', valor: '4.876,50' },
  { numero: 2, fornecedor: 'Ração', dataCompra: '15/11/2021', dataVencimento: '21/06/2023', quantidade: '100', valorUnitario: '58,51', valor: '5.851,00' }
]

export default defineComponent({
  name: 'Comprar',
  setup () {
    return {
      numero: ref(3),
      fornecedor: ref('Brinquedo Pet'),
      dataCompra: ref('2021-10-25'),
      dataVencimento: ref('2030-01-27'),
      qtde: ref('50'),
      valor: ref('25,60'),
      valorTotal: ref('1.280,00'),
      tab: ref('one'),
      columns,
      rows
    }
  }
})
</script>

<style>

</style>
