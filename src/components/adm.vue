/* eslint-disable curly */
<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" v-model="email" aria-describedby="inputGroup-sizing-default">
             <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Senha</span>
            </div>
            <input type="text" class="form-control" aria-label="Default"  v-model="senha" aria-describedby="inputGroup-sizing-default">
            <button type="button" class="btn btn-success" @click="adicionar()"
             aria-label="Default" aria-describedby="inputGroup-sizing-default">Adicionar</button>
            <div class="col-md-12" style="margin-top:20px;">{{  msg  }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: undefined,
      senha: undefined,
      msg: undefined
    }
  },
  methods: {
    adicionar () {
      var vm = this
      axios.post('https://rad-02-04-2020-aula2.herokuapp.com/usuario', {
        email: vm.email,
        senha: vm.senha
      })
        .then(function (response) {
          // eslint-disable-next-line curly
          if (response.data.status === 200)
            vm.msg = 'Cadastro Realizado!'
          // eslint-disable-next-line curly
          else
            vm.msg = 'Erro, tente novamente!'
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ed18e6;
}
</style>
