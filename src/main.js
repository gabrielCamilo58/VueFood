require('./bootstrap/index')
import { createApp } from 'vue'
import BaseTemplate from './layout/BaseTemplate'
import router from './routes/index'
import store from './store'
import PreLoaderComponent from '@/components/preLoader.vue'

/**
 * 
 */

createApp(BaseTemplate).component('PreLoaderComponent', PreLoaderComponent).use(store).use(router).mount('#app');

store.dispatch('getMe')