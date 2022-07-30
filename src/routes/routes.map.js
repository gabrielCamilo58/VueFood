import HomeView from '../pages/HomeView.vue';
import ProductsComponent from '../pages/ProductsView.vue';
import CartComponent from '../pages/CartView.vue';
import LoginView from '../pages/Auth/LoginView.vue';
import RegisterView from '../pages/Auth/RegisterView.vue'

const routes = [
    {
        path: '/',
        component: () => import('../layout/DefaulTemplate'),
        children: [
            {path: '/', component: HomeView, name: 'home'},
            {path: '/loja', component: ProductsComponent, name: 'products'},
            {path: '/carrinho', component: CartComponent, name: 'cart'}      
        ]
    },
    {
        path: '/',
        component: () => import('../layout/AuthTemplate'),
        children: [
            {
                path: '/login',
                component: LoginView,
                name: 'login'
            },
            {
                path: '/register',
                component: RegisterView,
                name: 'register'
            }
        ]
    }
]

export default routes