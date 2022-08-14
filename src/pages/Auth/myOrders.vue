<template>
    <div class="container container-body">

    <div class="row my-4">
      <h1 class="title-tenant">Meus Pedidos</h1>
    </div>

    <div class="row my-4">
      <div class="col-sm-6 my-4" v-for="(order, index) in myOrders.data" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Pedido: <strong>{{order.indentify}}</strong></h5>
            <p class="card-text">Data: {{order.data}}</p>
            <a href="detalhes-pedido.html" class="btn btn-danger">Detalhes</a>
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
        this.getMyOrders();
    },

    computed:{
        ...mapState({
            myOrders: state => state.orders.MyOrders
        })
    },
    methods: {
        ...mapActions([
            'getMyOrders'
        ])
    }
}
</script>