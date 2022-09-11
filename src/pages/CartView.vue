<template>
 <!-- cart -->
    <div class="card shopping-cart my-4 ">
        <div class="card-header text-light">
            <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
            Carrinho de Compras
            <router-link :to="{name: 'home'}"  class="btn bnt-sm btn-comprando">Continuar Comprando</router-link>
            <div class="clearfix"></div>
        </div>
        <div class="card-body">
          <!-- PRODUCT -->
          <div class="row align-items-center py-2" v-for="(product, index) in products" :key="index">
            <div class="col-4 text-center">
              <div class="img-circle">
                <img class="img-responsive" src="@/assets/imgs/acai.png" alt="prewiew" width="120" height="80">
              </div>
            </div>
            <div class="col-8 text-left">
              <h4 class="product-name"><strong>{{product.product.name}}</strong></h4>
              <h5 class="h6">{{product.product.description}}</h5>
              <div class="d-flex py-4 justify-content-between align-items-center">
                <div class="col-10 d-flex align-items-center p-0 ">
                    <h6><strong>R$ {{product.product.price}} <span class="text-muted">x</span></strong></h6>
                     <div class="quantity ml-4">
                        <input type="button" value="+" class="plus" @click.prevent="incrementingQtd(product)">
                        <input type="number" step="1" max="99" min="1" :value="product.qtd" title="Qty" class="qty"
                               size="4">
                        <input type="button" value="-" class="minus" @click.prevent="decrementingQtd(product)">
                    </div>
                </div>
                <div class="col-2 col-sm-2 col-md-2 text-right">
                    <button type="button" class="btn btn-outline-danger btn-xs" @click.prevent="removeProduct(product)">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            </div>
          </div>
          <hr>
          <!-- END PRODUCT -->
          <hr>
          <div class="cart-price text-red">
              Preço Total: <b>R$ {{totalProduct()}}</b>
          </div>
        </div>
        <!-- end card body -->
        <CheckoutVue/>
    </div>
    <!-- cart-->
</template>

<script>
import { mapState } from 'vuex'
import CheckoutVue from './_partials/CheckoutComponent.vue'
export default {
  computed: {
    ...mapState({
      products: state => state.cart.products,
      me: state => state.me
    }),
  },
    methods: {
    totalProduct(){
      let total = 0
       this.products.map((prod) => {
        total += (prod.qtd * prod.product.price)
      })

      return total
    },},

    components: {CheckoutVue}
}
</script>