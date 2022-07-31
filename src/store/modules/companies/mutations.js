export default {
    setCompany(state, companies){
        state.items = companies;
    },
    SET_COMPANY_SELECT(state, company){
        state.companySelect = company
    },
    SET_CATEGORIES_COMPANY_SELECTED(state, categories){
        state.categoriesCompanySelected = categories;
    },
    SET_PRODUCTS_COMPANY(state, products){
        state.productCompany = products
    }
}
