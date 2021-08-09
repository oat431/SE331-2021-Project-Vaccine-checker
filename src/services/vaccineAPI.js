import axios from 'axios'

const vaccineAPI = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    getVaccinatedPeople(perPage,page){
        return vaccineAPI.get('/vaccinated?_limit=' + perPage + '&_page=' + page)
    },
    getVaccinatedPerson(id){
        return vaccineAPI.get('/vaccinated/' + id)
    }
}