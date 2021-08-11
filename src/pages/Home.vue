<template>

    <div class="home-page">
        <div class="home-pic">
            <img id="banner" src="../assets/home-pic.jpeg">
            <div class="banner-before">
                <h3 class="h3">GET VACCINE</h3>
                <div class="para"> 
                    <p>You can check here who have been vaccinated</p>
                    <p>————————————————————————————————————————————————</p>
                    <p>COVID-19 vaccines remain safe and effective. They prevent severe illness,</p>
                    <p>hospitalization, and death. Additionally, even among the uncommon cases of COVID-19</p>
                    <p>among the fully or partially vaccinated vaccines make people more likely to have a milder</p>
                    <p>and shorter illness compared to those who are unvaccinated</p>
                </div>
            </div>
        </div>

        
            <h1>List of Vaccinated Patient</h1>

  <div class="vaccinated">
    <card v-for="vaccinated in vaccinated" :key="vaccinated.id" :vaccinated="vaccinated">
    {{vaccinated.name}} {{vaccinated}}
    </card>

     <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'Home', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 0"
      >
        Prev Page</router-link
      >

      <router-link
        id="page-next"
        :to="{ name: 'Home', query: { page: page + 1 } }"
        rel="next"
      >
        Next Page</router-link
      >
    </div>
  </div>

        </div>
</template>

<script>
// import HomePic from '../assets/home-pic.jpeg'
// import DefaultLayout from '../layouts/Default.vue'
// export default {
//     components:{
//         DefaultLayout,
//         HomePic
//     }
// }

import VaccinatedCard from '../components/VaccinatedCard.vue'
import vaccineAPI from '../services/vaccineAPI.js'
export default {
  name: 'Home',
  props: ['perPage', 'page'],
  components: {
    VaccinatedCard
    // HomePic
  },
  data() {
    return {
      vaccinated: null,
      totalVaccinated: 0
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    vaccineAPI.getVaccinatedPeople(parseInt(routeTo.query.perPage) || 0, 4)
      .then((response) => {
        next((comp) => {
          comp.vaccinated = response.data.data
          comp.totalVaccinated = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    vaccineAPI.getVaccinatedPeople(parseInt(routeTo.query.perPage) || 0, 4)
      .then((response) => {
        this.vaccinated = response.data.data
        this.totalVaccinated = response.headers['x-total-count'] // <--- Store it
        console.log(this.totalPatients)
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
}
</script>

<style scoped>

h1{
    text-align: center;
    font-size: 60px;
    padding-top: 600px;
}

/* .pagination {
  display: flex;
  width: 290px;
  padding-left: 1000px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: rgb(20, 85, 55);
} */
#page-prev {
  
  padding-left: 900px;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#page-next {
  padding-left: 100px;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
/* #selectedpage {
  flex: 1;
  text-align: left;
  flex-direction: column;
} */

.para{
    color: white;
    font-size: 30px;
    text-align: center;
}

.home-pic {
  background: url("home-pic.jpeg") repeat;
}
#banner {
  position: absolute;
  top: 100px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 600px;
  z-index: -1;
}

.h3{
    font-size: 80px;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
}

.banner-before{
    background-color: black;
    position: absolute;
    opacity: 0.4;
    top: 150px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 500px;   
}

</style>