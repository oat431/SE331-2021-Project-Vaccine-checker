import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import VaccinatedInfo from '../pages/VaccinatedInfo.vue'
import VaccinatedProfileCard from '../components/VaccinatedProfileCard.vue'
import VaccinatedVaccineCard from '../components/VaccinatedVaccineCard.vue'
import VaccinatedAllInfo from '../components/VaccinatedAllInfo.vue'
import NProgress from 'nprogress'
import vaccineAPI from '../services/vaccineAPI.js'
import GlobalState from '../store/index'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/vaccinated/:id',
        name: 'Vaccinated',
        component: VaccinatedInfo,
        props: true,
        beforeEnter: (to) => {
            return vaccineAPI.getVaccinatedPerson(to.params.id).then((res) => {
                GlobalState.vaccinatedPerson = res.data
            }).catch((err)=>{
                console.log(err)
            })
        },
        children:[
            {
                path:'',
                name:'VaccinatedAllInfo',
                component: VaccinatedAllInfo,
            },
            {
                path:'info',
                name:'VaccinatedInfo',
                component: VaccinatedProfileCard,
            },
            {
                path:'vaccine',
                name:'VaccinatedVaccine',
                component: VaccinatedVaccineCard,
            }
        ]
        
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(() => {
    NProgress.start()
})

router.beforeEach(() => {
    NProgress.done()
})

export default router
