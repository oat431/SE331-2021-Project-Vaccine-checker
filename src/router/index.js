import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import VaccinatedInfo from '../pages/VaccinatedInfo.vue'
// import vaccineAPI from '../services/vaccineAPI.js'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: (route) => ({page: parseInt(route.query.page) || 1})
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/vaccinated/:id',
        name: 'Vaccinated',
        component: VaccinatedInfo
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
