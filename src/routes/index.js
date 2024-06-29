import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "./../components/Homepage.vue/"
import Products from "./../components/Products.vue/"
import OurServices from "./../components/OurServices.vue"
import Aboutus from "./../components/Aboutus.vue"
import Contactus from "./../components/Contactus.vue"
import Purchase from "./../components/Purchase.vue"
import Vuex from "vuex"


const routes = [
    {
        path: "/",
        name: "home",
        component: Homepage,
    },
    {
        path: "/products",
        name: "products",
        component: Products,
    },
    {
        path: "/ourservices",
        name: "/ourservices",
        component: OurServices,
    },
    {
        path: "/aboutus",
        name: "aboutus",
        component: Aboutus,
    },
    {
        path: "/contactus",
        name: "/contactus",
        component: Contactus,
    },
    {
        path: "/purchase",
        name: "/purchase",
        component: Purchase,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router