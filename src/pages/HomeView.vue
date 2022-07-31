<template>
  <div class="row">
    <div class="col-lg-12">
      <h1 class="my-4 title-tenant">Restaurantes</h1>

      <div class="row my-4" v-for="(company, index) in companies.data" :key="index">
        <div class="col-lg-4 col-md-4 col-6 mb-4">
          <div class="restaurant-card">
            <a class="logo" href="#"
            @click.prevent="goStoreCompany(company)"
              ><img
                class="card-img-top"
                :src="[company.image != '' ? company.image : require('@/assets/imgs/vue-food.png')]"
                alt=""
            /></a>
            <div class="restaurant-card-body">
              <h3>
                <a href="#" @click.prevent="goStoreCompany(company)">{{company.Nome}}</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      
      <!-- /.row -->
    </div>
    <!-- /.col-lg-9 -->
  </div>
  <!-- /.row -->
</template>

<script>
import { mapActions } from "vuex";
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  mounted() {
    this.getCompanies();
  },
  setup() {
    const store = useStore();
     return {
      companies: computed(() => store.state.companies.items),
    }
  },

  methods: {
    ...mapActions(["getCompanies", 'setCompany']),
    goStoreCompany (company) {
        this.setCompany(company)
        this.$router.push({name: 'products', params: {companyFlag: company.URL}})
    }
  },
};
</script>