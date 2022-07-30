import axios from "axios"
//import { API_VERSION } from "../../../../configs/api"

//const RESOURCE = '/tenants'
export default {
    getCompanies({commit}){
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'carregando as empresas')
        axios.get('http://larafood.test/api/v1/tenants').then((response) => {
            commit('setCompany', response.data)
        }).finally(() => commit('SET_PRELOADER', false));
    }
}