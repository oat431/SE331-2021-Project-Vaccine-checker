// app.component('review-form', {
//     template:
//     /*html*/
//     `
//     <form class="review-form" @submit.prevent="onSubmit">
//         <h3>Leave a review</h3>
//         <label for="name">Name:</label>
//         <input id ="name" v-model="name">
    
//         <label for="comment">Review:</label>
//         <textarea id="comment" v-model="comment"></textarea>

//         <label for="date">Date:</label>
//         <textarea id="date" v-model="date"></textarea>

//         <input class ="button" type="submit" value="submit">
//     </form>

//     `,
//     data(){
//         return{
//             name:'',
//             comment: '',
//             date: ''
//         }
//     },
//     methods:{
//         onSubmit(){
//             if(this.name ===''||this.comment  ===''|| this.date  === null){
//                 alert('Review is incomplete. Please full')
//                 return
//             }
//             let productReview = {
//                 name: this.name,
//                 comment: this.comment,
//                 date: this.date,
//             }
//             this.$emit('review-submited',Review)
//             this.name=''
//             this.comment = ''
//             this.date= ''
//         }
//     }


// })