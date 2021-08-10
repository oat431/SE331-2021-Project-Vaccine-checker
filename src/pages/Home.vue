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
        </div>
</template>

<script>
import HomePic from '../assets/home-pic.jpeg'
import DefaultLayout from '../layouts/Default.vue'
export default {
    components:{
        DefaultLayout,
        HomePic
    }
}
</script>

<style scoped>

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



/* .home-page {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}

.home-page:hover{
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */
</style>