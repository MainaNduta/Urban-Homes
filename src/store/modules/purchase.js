import Purchase from "@/components/Purchase.vue"

const state = {
    purchaseItems: []
    }
    const getters = {
    Purchase: (state) => state.purchaseItems,
    }
    const actions = {
    }
    const mutations = {
    }
    export default {
    state,
    getters,
    actions,
    mutations
    }