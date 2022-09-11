<template>
    <div>
        <PreLoaderComponent/>
        <header-component/>
         <widget-container-modal />
        <!-- Page Content -->
        <div class="container container-body">
            <router-view></router-view>
        </div>

        <footer-component/>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import HeaderComponent from './_partials/headerView.vue'
import FooterComponent from './_partials/footerView.vue'
import {container} from "jenesius-vue-modal";
export default {
    components:{
        HeaderComponent, FooterComponent, WidgetContainerModal: container,
    }
}
</script>

<style  scoped>
@import url('../assets/css/vuefood.css');
@import url('../assets/css/reset.css');
</style>