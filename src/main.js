require('./bootstrap/index')
import { createApp } from 'vue'
import {VueStars} from 'vue-stars'
import BaseTemplate from './layout/BaseTemplate'
import router from './routes/index'
import {container} from "jenesius-vue-modal";
import store from './store'
import PreLoaderComponent from '@/components/preLoader.vue';
import Modal from "vue-bs-modal";
import BootstrapVue3 from 'bootstrap-vue-3'



/**
 * 
 */

createApp(BaseTemplate).component('PreLoaderComponent', PreLoaderComponent)
.use(BootstrapVue3)
.use(store)
.use(VueStars)
.use(container)
.use(Modal)
.use(router).mount('#app');

store.dispatch('getMe')