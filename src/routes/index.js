//import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.map'

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes
})

export default router