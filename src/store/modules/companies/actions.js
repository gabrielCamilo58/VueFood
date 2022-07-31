import axios from "axios"
import { URI_BASE_API } from "../../../../configs/api"

//const RESOURCE = '/tenants'
export default {
    getCompanies({commit}){
        commit('SET_PRELOADER', true)
        commit('SET_TEXTPRELOADER', 'carregando as empresas')
        axios.get('http://larafood.test/api/v1/tenants').then((response) => {
            commit('setCompany', response.data)
        }).finally(() => commit('SET_PRELOADER', false));
    },
    setCompany({commit}, company){
        commit('SET_COMPANY_SELECT', company)
    },
    setCategoriesByCompany({commit}, token_company){
        commit('SET_PRELOADER', true)
        commit('SET_TEXTPRELOADER', 'carregando categorias')

        axios.get(`${URI_BASE_API}v1/categories`, {params : {token_company}}).then((response) => {
            commit('SET_CATEGORIES_COMPANY_SELECTED', response.data)
        }).finally(() => {commit('SET_PRELOADER', false)})
       
    }
}