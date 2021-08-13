<script>
import VaccineType from '../components/VaccineType.vue'
export default {
    props:['vaccinatedPerson'], 
    components:{
        VaccineType
    },
    data(){
        return {
            age:0
        }
    },
    created(){
        const date = new Date()
        const current = new Date(this.vaccinatedPerson.birthday)
        this.age = parseInt(date.getFullYear()) - parseInt(current.getFullYear()) 
    }
}
</script>
<template>
    <div class="max-w-4xl flex items-center flex-wrap mx-auto my-0 lg:my-0">

        <div class="w-full lg:w-80">
            <img :src="this.vaccinatedPerson.image" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
        </div>

        <!--Main Col-->
        <div id="profile"
            class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

            <div class="p-4 md:p-12 text-center lg:text-left">
                <img class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" :src="this.vaccinatedPerson.image"/>

                <h1 class="text-3xl font-bold pt-8 lg:pt-0">
                    <span v-if="vaccinatedPerson.sex == 'male' ">Mr. </span>
                    <span v-else>Ms.</span>
                    {{this.vaccinatedPerson.name}} {{this.vaccinatedPerson.surname}}
                </h1>

                <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

                <p class="pt-4 text-base font-medium flex items-center justify-center lg:justify-start">
                    <span class="font-bold px-1">Sex: </span> {{this.vaccinatedPerson.sex}}     
                </p>
                
                <p class="pt-4 text-base font-medium flex items-center justify-center lg:justify-start">
                    <span class="font-bold px-1">Hometown: </span> {{this.vaccinatedPerson.hometown}}     
                </p>

                <p class="pt-4 text-base font-medium flex items-center justify-center lg:justify-start">
                    <span class="font-bold px-1">Age: </span> {{ this.age }}     
                </p>

                <br />

                <h1 class="text-3xl font-bold pt-8 lg:pt-0">
                    Receieved Vaccine
                </h1>

                <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>


                <div class="pt-6 pb-8">
                    <VaccineType v-for="vaccine in this.vaccinatedPerson.vaccine" :key="vaccine.title" :vaccine="vaccine"/>
                    <!-- <button v-for="vaccine in this.vaccinatedPerson.vaccine" :key="vaccine.title" class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                        {{vaccine.title}}      
                    </button> -->
                </div>
            </div>
        </div>

        <!--Img Col-->
        
    </div>
</template>

