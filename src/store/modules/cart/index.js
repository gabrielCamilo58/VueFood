export default {
    state: {
        products: [],
    },
    mutations: {
        ADD_PRODUCT_TO_CART(state, product){
            state.products.push({
                qtd: 1,
                uuid: product.uuid,
                product: product
            })
        },
        REMOVE_PRODUCT_TO_CART(state, product){
            state.products = state.products.filter((productCart) => {
                return productCart.uuid != product.uuid
            })
        },
        INCREMENTING_QTD_PRODUCT(state, product){
            state.products = state.products.map((productCart, index) => {
                if(productCart.uuid == product.uuid){
                    state.products[index].qtd++ 
                }
                return state.products[index];
            })
        },
        DECREMENTIG_QTD_PRODUCT(state, product){
            state.products = state.products.filter((productCart, index) => {
                if(productCart.uuid == product.uuid){
                    state.products[index].qtd--
                }
                if(state.products[index].qtd > 0){
                    return state.products[index];
                }
            })
        },
        CLEAR_CART(state){
            state.products = [];
        }
    },
    getters: {

    }
}