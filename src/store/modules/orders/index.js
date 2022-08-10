import axios from "axios";
import {TOKEN_NAME} from "../../../../configs/api";
export default {
    state: {
        MyOrders: {
            data: []
        }
    },
    mutations: {
        SET_ORDERS(state, orders){
            state.MyOrders = orders
        },
        SET_ORDER(state, order){
            state.MyOrders.data = order
        },
    },
    actions: {
        getMyOrders({commit}){
            const token = localStorage.getItem(TOKEN_NAME);
            if(!token) Promise.reject()

            commit('SET_PRELOADER', true)
            commit('SET_TEXTPRELOADER', 'carregando os pedidos')
            return axios.get('auth/v1/my-orders', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => commit('SET_ORDERS', response.data)).finally(() =>  commit('SET_PRELOADER', false))
        }

    }
}