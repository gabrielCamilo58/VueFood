<template>
    <header>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-vuefood">
      <div class="container">
        <router-link class="navbar-brand" :to="{name: 'home'}">
        <img src="@/assets/imgs/logo-vuefood.png" alt="VueFood" class="logo">
        </router-link>
        <div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-cart active">
              <router-link class="nav-link" :to="{name: 'cart'}"><i class="fas fa-shopping-cart">({{productCart.length}})</i></router-link>
            </li>
            <li class="nav-item nav-cart active">
              <a href="#" v-if="me.name != '' ">Ola {{me.Nome}}! (<span @click.prevent="logout">sair</span>)</a>
              <router-link v-else :to="{name: 'login'}">Entrar</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      productCart: state => state.cart.products,
      me: state => state.auth.me
    })
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>