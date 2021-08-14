<script>
export default {
   data(){
       return {
           toggle:false,
           doctors:[
               "Dr. Roger",
               "Dr. Lipton",
               "Dr. SomChai",
               "Dr. Lillie",
               "Dr. Light"
           ]
       }
   }, 
   methods: {
       show(){
           this.toggle = !this.toggle
       }
   },
}
</script>
<template>
    <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold text-gray-700">
                        <router-link class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">SE331</router-link>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="flex-1 md:flex md:items-center md:justify-between">
                    <div class="flex flex-row -mx-4 md:flex-row md:items-center md:mx-8">
                        <router-link to="/" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 hover:bg-gray-300">Home</router-link>
                        <router-link to="/about" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 hover:bg-gray-300">About</router-link>
                        
                    </div>

                    <div class="flex items-right mt-4 md:mt-0 relative">
                        <button class="relative z-10 block p-2 bg-white rounded-md dark:bg-gray-800" @click="show">
                           Doctor Login 
                        </button>
                        <div v-if="toggle" class="absolute right-0 z-20 w-48 py-4 md:mt-60 bg-white rounded-md shadow-xl dark:bg-gray-800">
                            <router-link v-for="doctor in doctors" :key="doctor" to="/doctor" @click="show" 
                            class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                                 Login as {{ doctor }} 
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>