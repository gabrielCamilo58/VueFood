<template>
<div class="container container-body mt-4">

    <div class="row my-4 mx-0 details">
      <div class="col-12 mb-2">
        <h1 class="title-tenant h2">Detalhes do Pedido <strong>{{identify}}</strong></h1>
      </div>
      <div class="col-sm-6">
        <ul class="p-0">
          <li><b>Número:</b> {{identify}}</li>
          <li><b>Total:</b> R$ {{order.Total}}</li>
          <li><b>Data:</b> {{order.Date}}</li>
          <li><b>Status:</b> <span class="badge bg-success text-light p-2">{{order.Status_label}}</span></li>
        </ul>
      </div>
      <div class="col-sm-6">
        <ul class="p-0">
          <li>
            <span>Mesa</span>
            <ul class="p-0">
              <li><b>Identificador:</b> {{identify}}</li>
              <li><b>Descrição:</b> sdfds</li>
            </ul>
          </li>
          <li>
            <span>Cliente</span>
            <ul class="p-0">
              <li><b>Nome:</b> {{order.Client.Nome}}</li>
              <li><b>E-mail:</b> {{order.Client.Email}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div> <!-- details order -->

    <hr>

    <div class="row my-4">
      <div class="col-12">
        <h4>Produtos</h4>
      </div>

        <div class="col-12 col-md-6 col-lg-4 my-1" v-for="(product, index) in order.Products" :key="index">
          <div class="details-card">
            <a href="#"><img class="card-img-top" :src="product.Imagem" alt=""></a>
            <div class="details-card-body">
              <h5>{{product.Name}}</h5>
              <p><b>R$: {{product.Preço}}</b></p>
            </div>
          </div>
        </div>

    </div>    
</div>  
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['identify'],
    mounted (){
        this.getOrderByIdentify(this.identify)
            .then((response) => this.order = Object.assign(this.order, response.data.data))
            //.catch(this.$router.push({name: 'home'}));
    },
    data (){
        return{
            order:{
                Identify: null,
                Date: null,
                Status: null,
                Total: null,
                Table: {
                    identify: null,
                    description: null
                },
                Client: {
                    name: null,
                    email: null
                },
                Company: {
                    Nome: null,
                    image: null
                },
                Products: [],
                Evaluations: []
            }
        }
    },
    methods: {
        ...mapActions (['getOrderByIdentify'])
    }
}
</script>