<template>
  <div class="row">
    <div class="list-categories">
      <a
        href="#"
        v-if="this.filters.category !== null"
        class="list-categories__item"
        @click.prevent="filterByCategory(null)"
        ><div class="icon"><i class="fas fa-pizza-slice"></i></div>
        <span>Todos</span>
      </a>
      <a
        href="#"
        v-for="(category, index) in categories.data"
        :key="index"
        :class="['list-categories__item', checkCategory(category.Identificador)]"
        @click.prevent="filterByCategory(category.Identificador)"
        ><div class="icon"><i class="fas fa-pizza-slice"></i></div>
        <span>{{category.Nome}}</span>
      </a>
    </div>
  </div>
  <!-- Cards Produtos -->
  <div class="row my-4">
    <div class="col-lg-4 col-md-6 mb-4" v-for="(product, index) in products" :key="index">
      <div :class="['card--flat', 'h-100', {'disabled': productInCart(product)}]">
        <a href="#">
          <div class="card-image">
            <img class="card-img-top" src="@/assets/imgs/pizza.png" alt="" />
          </div>
        </a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">{{product.name}}</a>
          </h4>
          <h5>R$ {{product.price}}</h5>
          <p class="card-text">
            {{product.description}}
          </p>
        </div>
        <div class="card-footer card-footer-custom">
          <a href="#" @click.prevent="addProductCart(product)">Adicionar no Carrinho <i class="fas fa-cart-plus"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- /.row -->
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  props: ["companyFlag"],
  data() {
    return{
      filters:{
        category: null
      }
    }
  },
  mounted() {
    if (this.company == null) {
      return this.$router.push({ name: "home" });
    }
    this.setCategoriesByCompany(this.company.Uuid);
    this.loadProducts()
  },
  computed: {
    ...mapState({
      company: (state) => state.companies.companySelect,
      categories: (state) => state.companies.categoriesCompanySelected,
      products: (state) => state.companies.productCompany,
      productsCart: (state) => state.cart.products,
    }),
  },
  methods: {
    ...mapActions(["setCategoriesByCompany", "setProductsCompany"]),
    filterByCategory(identify){
      this.filters.category = identify;
      this.loadProducts();
    },
        ...mapMutations({
      addProductCart: 'ADD_PRODUCT_TO_CART',
    }),
    loadProducts(){

      const params = {
        token_company: this.company.Uuid,
      }

      if(this.filters.category){
        params.categories = [ this.filters.category]
      }
        this.setProductsCompany(params);
    },
    checkCategory(identify){
      console.log(identify)
      return identify == this.filters.category ? 'active' : '';
    },
    productInCart(product){
      let incart = false;
      this.productsCart.map((productCart) => {
        if(productCart.uuid === product.uuid){
          incart = true;
        }
      });

      return incart;
    }
  },
};
</script>