<template>
  <q-page class="q-ma-xl">
    <q-card>
      <q-card-section>
        <h4>Produto</h4>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-md justify-between">
          <q-input v-model="codigo" label="Código" class="col-1"/>
          <q-input v-model="nome" label="Nome" class="col-8"/>
          <q-input v-model="quantidade" label="Quantidade" class="col-3"/>
          <q-input v-model="tamanho" label="Tamanho" class="col-2"/>
          <q-input v-model="codigoBarras" label="Codigo de Barras" class="col-7"/>
          <q-input v-model="valorCusto" label="Valor do Custo" class="col-3"/>
          <q-select v-model="selectTipo" :options="optTipo" label="Tipo" class="col-4"/>
          <q-select v-model="selectSubTipo" :options="optSubTipo" label="SubTipo" class="col-4"/>
          <q-input v-model="valorVenda" label="Valor de Venda" class="col-3"/>
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
  { name: 'codigo', align: 'left', label: 'Código', field: 'codigo' },
  { name: 'nome', align: 'left', label: 'Nome', field: 'nome' },
  { name: 'quantidade', align: 'left', label: 'Quantidade', field: 'quantidade' }
]

const rows = [
  { codigo: 1, nome: 'Wiskas', quantidade: 6 },
  { codigo: 2, nome: 'Catnip', quantidade: 9 }
]

export default defineComponent({
  name: 'Comprar',
  setup () {
    return {
      codigo: ref(1),
      nome: ref('Wiskas'),
      quantidade: ref(10),
      tamanho: ref(10),
      codigoBarras: ref(1234567890123),
      valorCusto: ref('10,01'),
      selectTipo: ref('Produto para cães'),
      optTipo: ref(['Produto para cães']),
      selectSubTipo: ref('Shampoo'),
      optSubTipo: ref(['Shampoo']),
      valorVenda: ref('15,00'),
      columns,
      rows
    }
  }
})
</script>

<style>

</style>
