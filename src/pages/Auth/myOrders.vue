<template>
    <div class="container container-body">

    <div class="row my-4">
      <h1 class="title-tenant">Meus Pedidos</h1>
    </div>

    <div class="row my-4">
      <div class="col-sm-6 my-4" v-for="(order, index) in myOrders.data" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Pedido: <strong>{{order.Identify}}</strong></h5>
            <p class="card-text">Data: {{order.Date}}</p>
            <router-link :to="{name: 'details.order', params:{identify: order.Identify}}" class="btn btn-danger">Detalhes</router-link>
          </div>
        </div>
      </div>
    </div> <!-- orders -->

  </div>
  <!-- /.container -->
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    created(){
      if(this.me.Nome == ''){
        return this.$router.push({name: 'home'})
      }
        this.getMyOrders();
    },

    computed:{
        ...mapState({
            myOrders: state => state.orders.MyOrders,
            me: state => state.auth.me
        })
    },
    methods: {
        ...mapActions([
            'getMyOrders'
        ])
    }
}
</script>