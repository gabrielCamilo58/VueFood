import axios from "axios";

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
        }
    }
}