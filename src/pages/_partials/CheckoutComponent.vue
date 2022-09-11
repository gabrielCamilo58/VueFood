<template>
    <div>
          <a href="" class="cart-finalizar">Finalizar</a>
    </div>
</template>


<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      products: state => state.cart.products
    }),
  },
    methods: {
      ...mapMutations({
          removeProduct: 'REMOVE_PRODUCT_TO_CART',
        incrementingQtd: 'INCREMENTING_QTD_PRODUCT',
        decrementingQtd: 'DECREMENTIG_QTD_PRODUCT'
    }),
    totalProduct(){
      let total = 0
       this.products.map((prod) => {
        total += (prod.qtd * prod.product.price)
      })

      return total
    },

    },
}
</script>