<template>
     <!-- Page Content -->
  <div class="container container-body">

    <!-- login -->
    <div class="d-flex justify-content-center h-100 my-5">
      <div class="user_card">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <router-link :to="{name: 'home'}"><img src="@/assets/imgs/vue-food.png" class="brand_logo" alt="Logo"></router-link>
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form>
            <div class="text-danger" v-if="errors.name != null ">
              {{errors.name[0] || ''}}
            </div>
            <div class="input-group">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <input type="text" v-model="formData.name" name="name" placeholder="Nome"
              :class="['form-control', 'input_user', {'is-invalid': errors.name != null}]" >
            </div>

            <div class="text-danger" v-if="errors.email != null">
              {{errors.email[0] || ''}}
            </div>
            <div class="input-group">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
              <input type="email" v-model="formData.email" name="email"  :class="['form-control', 'input_user', {'is-invalid': errors.email != null}]"  placeholder="E-mail">
            </div>

            <div class="text-danger" v-if="errors.password != null">
              {{errors.password[0] || ''}}
            </div>
            <div class="input-group">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" v-model="formData.password" name="password"  :class="['form-control', 'input_pass', {'is-invalid': errors.password != null}]"  placeholder="Senha">
            </div>
              <div class="d-flex justify-content-center login_container">
          <button type="button" name="button" class="btn login_btn" 
            :disabled="loading"
            @click.prevent="registerClient()">
            <span v-if="loading">Cadastrando...</span>
            <span v-else>Cadastrar</span>
            </button>
           </div>
          </form>
        </div>
    
        <div class="mt-4">
          <div class="d-flex justify-content-center links">
            Já tem conta? <router-link class="ml-2" :to="{name: 'login'}">Login</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- login-->

  </div>
  <!-- /.container -->
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      formData: {
        name: '',
        email: '',
        password: '',
      },
      errors: {
        name: null,
        email: null,
        password: null,
      }
    }
  },

  methods: {
    ...mapActions([
      'register'
    ]),
    
    registerClient(){
      this.errors = {
         name: null,
        email: null,
        password: null,
      }
    this.loading = true;
    this.register(this.formData).then(() => {
      this.$router.push({name: 'login'})
    }).catch((error) => {
      const errorResponse = error.response;
      if (errorResponse.status === 422){
        this.errors = Object.assign(errorResponse.data.errors); 
      }

    }).finally(() => {
      this.loading = false
    })
  }
  },
  
}
</script>