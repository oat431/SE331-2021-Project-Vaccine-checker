import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
// import vaccineAPI from '../services/vaccineAPI.js'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: (route) => ({
            page: parseInt(route.query.page) || 0 ,size: parseInt(route.query.size) || 4
          })
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    // {
    //     path: '/patient/:id',
    //     name: 'PatientLayout',
    //     component: PatientLayout,
    //     props: true,
    //     beforeEnter: (to) => {
    //       return vaccineAPI.getVaccinatedPerson(to.params.id)
    //         .then((response) => {
    //           // still need to set the data here
    //           createStore.patient = response.data
    //         })
    //         .catch((error) => {
    //           if (error.response && error.response.status == 204) {
    //             return {
    //               name: '404Resource',
    //               params: { resource: 'event' }
    //             }
    //           } else {
    //             return { name: 'NetworkError' }
    //           }
    //         })
    //     },
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
