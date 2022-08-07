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
            console.log(commit)
            return axios.post('v1/client', params);
        },
        login({commit}, params){
            console.log(commit)
            return axios.post('/sanctum/token',params).then((response) => {
                const token = response.data.token
                localStorage.setItem(TOKEN_NAME, token)
            });
        }
    }
}