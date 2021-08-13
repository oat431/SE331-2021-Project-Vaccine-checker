<script>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import VaccinatedProfileCard from '../components/VaccinatedProfileCard.vue'
export default {
    inject:['GlobalState'],
    components: {
        DefaultLayout,
        VaccinatedProfileCard
    },
}
</script>

<template>
    <DefaultLayout>
        <p class="text-3xl font-bold">{{GlobalState.vaccinatedPerson.name}} Infomation</p>
    </DefaultLayout> 
    <VaccinatedProfileCard :vaccinatedPerson="GlobalState.vaccinatedPerson"/>
    <DefaultLayout>
        <p class="text-3xl text-green-800">Hi I'm here How are you</p>     
    </DefaultLayout>
</template>

