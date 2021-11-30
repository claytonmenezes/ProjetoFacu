<template>
  <div class="row justify-center q-my-xl">
    <div class="col-6">
      <q-card class="row col-12 justify-center q-gutter-md">
        <q-card-section class="col-12 row justify-center">
          <div class="text-h3"> Gerenciamento Petshop </div>
        </q-card-section>
        <q-card-section class="col-12 row justify-center q-gutter-md">
          <q-form class="row justify-center q-gutter-sm">
            <q-input filled v-model="email" label="E-mail *" lazy-rules :rules="[ val => val && val.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi) || 'Email inválido']" />
            <q-input filled type="password" v-model="senha" label="Senha *" lazy-rules :rules="[ val => !!val || 'Digite a senha' ]" />
            <div class="col-12 row justify-center">
              <q-btn label="Logar" type="submit" color="primary" class="q-ma-md"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      email: ref('donodaempresa@gerenciamentopetshop.com.br'),
      senha: ref('123456')
    }
  }
}
</script>
