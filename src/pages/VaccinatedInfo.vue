<script>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import VaccinatedDeatails from '../layouts/VaccinatedDetails.vue'
export default {
    inject:['GlobalState'],
    components: {
        DefaultLayout,
        VaccinatedDeatails
    },
}
</script>

<template>
    <DefaultLayout>
        <div class="divide-x-2 divide-green-500">
            <router-link :to="{name:'VaccinatedAllInfo'}" class="text-2xl px-2 font-medium hover:text-green-300">{{GlobalState.vaccinatedPerson.name}} </router-link>
            <router-link :to="{name:'VaccinatedInfo'}"  class="text-2xl px-2 font-medium hover:text-green-300"> Info </router-link>
            <router-link :to="{name:'VaccinatedVaccine'}"  class="text-2xl px-2 font-medium hover:text-green-300"> Vaccine </router-link>
            <span></span>
        </div>
    </DefaultLayout> 
    <VaccinatedDeatails :vaccinatedPerson="GlobalState.vaccinatedPerson"/>
    <DefaultLayout>
        <p class="text-3xl text-green-800">Doctor Comment</p>     
    </DefaultLayout>
</template>

