<template>
    <div>
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
          <form @submit.prevent="logar()">
          <div class="text-danger" v-if="error.email != null">
            {{error.email[0]}}
          </div>
            <div class="input-group">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
              <input type="text" v-model="formData.email" name="email" class="form-control input_user" placeholder="E-mail">
            </div>
            <div class="text-danger" v-if="error.password != null">
              {{error.password[0] || ''}}
            </div>
            <div class="input-group">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" v-model="formData.password" name="password" class="form-control input_pass" placeholder="Senha">
            </div>
            <div class="d-flex justify-content-center mt-3 login_container">
              <button type="submit" name="button" class="btn login_btn">
                <span v-if="loading">Entrando....</span>
                <span v-else>Entrar</span>
                </button>
            </div>
          </form>
        </div>
    
        <div class="mt-4">
          <div class="d-flex justify-content-center links">
                Não tem uma conta? <router-link  class="ml-2" :to="{name: 'register'}">Cadastre-se!</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- login-->

  </div>
  <!-- /.container -->
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {

  data () {
    return {
      loading: false,
      formData : {
        email: '',
        password: ''
      },
      error:{
        email: null,
        password: null
      }
    }
  },
  computed:{
    deviceName() {
      return navigator.appCodeName + navigator.appName + navigator.platform + this.email;
    } 
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    logar(){
      this.loading = true
      this.error = {
        email: null,
        password: null
      }
      const params = {
        device_name: this.deviceName,
        ...this.formData,
      }
      this.login(params).catch((error) => {
        const errorResponse = error.response;
      if (errorResponse.status === 422){
        this.error = Object.assign(errorResponse.data.errors); 
      }
      }).finally(() => this.loading = false)
    }
  }
}
</script>