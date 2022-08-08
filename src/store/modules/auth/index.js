import axios from "axios";
import {TOKEN_NAME} from "../../../../configs/api";

export default {
    state : {
        me: {
            name: '',
            email: ''
        },
        autenticated: false
    },
    mutations: {
        SET_ME(state, me){
            state.me = me;
            state.autenticated = true;
        },
        SET_AUTENTICATED(state, status){
            state.autenticated = status;
        },
        logout(state){
            state.me = {
                name: '',
                email: ''
            };
            state.autenticated = false;
        }
    },
    actions: {
        register({commit}, params){
            commit;
            return axios.post('v1/client', params);
        },
        login({commit}, params){
            commit;
            return axios.post('/sanctum/token',params).then((response) => {
                const token = response.data.token
                localStorage.setItem(TOKEN_NAME, token)

              this.dispatch('getMe');
            });
        },
        getMe({commit}){
           
            const token = localStorage.getItem(TOKEN_NAME);

            if(!token) return;

            axios.get('me', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }).then(response => commit('SET_ME', response.data.data))
            .catch(() => localStorage.removeItem(TOKEN_NAME))
        },

        logout({commit}){
           
            const token = localStorage.getItem(TOKEN_NAME);

            if(!token) return;

            axios.post('logout', {},{
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }).then(() => {
                commit('logout');
                localStorage.removeItem;
            })
        }
    }
}