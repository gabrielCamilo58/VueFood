import HomeView from '../pages/HomeView.vue';
import ProductsComponent from '../pages/ProductsView.vue';
import CartComponent from '../pages/CartView.vue';
import LoginView from '../pages/Auth/LoginView.vue';
import RegisterView from '../pages/Auth/RegisterView.vue'
import MyOrders from '../pages/Auth/MyOrders.vue'

const routes = [
    {
        path: '/',
        component: () => import('../layout/DefaulTemplate'),
        children: [
            {path: '/', component: HomeView, name: 'home'},
            {path: '/loja/:companyFlag', component: ProductsComponent, name: 'products', props: true},
            {path: '/carrinho', component: CartComponent, name: 'cart'}      
        ]
    },
    {
        path: '/',
        component: () => import('../layout/AuthTemplate'),
        children: [
            {
                path: '/meus-pedidos',
                component: MyOrders,
                name: 'my.orders'
            },
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