require('./bootstrap/index')
import { createApp } from 'vue'
import BaseTemplate from './layout/BaseTemplate'
import router from './routes/index'
import store from './store'


/**
 * 
 */

createApp(BaseTemplate).use(store).use(router).mount('#app')