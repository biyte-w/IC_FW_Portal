import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
// import Products from '../components/Products.vue'

const routes =[
    {
        path :'/',
        name: 'Home',
        component: Home
    },
    {
        path :'/products/:id',
        name: 'Products',
        // component : Products,
        component: ()=> import ('../components/Products.vue')
    }
]
const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router