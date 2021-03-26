<template>
    <div class="new-destination">
        <div class="container">
           <div class="row">
               <div class="col-lg-8">
                   <form @submit.prevent="onSubmit()">
<!--                        <div class="form-group">-->
<!--                            <label for="name">Name</label>-->
<!--                            <input-->
<!--                                type="text"-->
<!--                                class="form-control"-->
<!--                                id="name"-->
<!--                                v-model="form.name">-->
<!--                        </div>-->

<!--                       <div class="form-group">-->
<!--                           <label for="slug">Slug</label>-->
<!--                           <input-->
<!--                               type="text"-->
<!--                               class="form-control"-->
<!--                               id="slug"-->
<!--                               v-model="form.slug">-->
<!--                       </div>-->

<!--                       <div class="form-group">-->
<!--                           <label for="shortDescription">Short Description</label>-->
<!--                           <input-->
<!--                               type="text"-->
<!--                               class="form-control"-->
<!--                               id="shortDescription"-->
<!--                               v-model="form.shortDescription">-->
<!--                       </div>-->

<!--                       <div class="form-group">-->
<!--                           <label for="reviews">reviews</label>-->
<!--                           <input-->
<!--                               type="text"-->
<!--                               class="form-control"-->
<!--                               id="reviews"-->
<!--                               v-model="form.reviews">-->
<!--                       </div>-->

<!--                       <div class="form-group">-->
<!--                           <label for="rate">rate</label>-->
<!--                           <input-->
<!--                               type="text"-->
<!--                               class="form-control"-->
<!--                               id="rate"-->
<!--                               v-model="form.rate">-->
<!--                       </div>-->

<!--                       <div class="form-group">-->
<!--                           <label for="price">price</label>-->
<!--                           <input-->
<!--                               type="text"-->
<!--                               class="form-control"-->
<!--                               id="price"-->
<!--                               v-model="form.price">-->
<!--                       </div>-->

                       <div class="form-group">
                           <label for="image">image</label>
                           <input
                               type="file"
                               class="form-control"
                               id="image"
                               @change="onFileSelected">
                       </div>

<!--                       <div class="form-group">-->
<!--                           <label for="banner">banner</label>-->
<!--                           <input-->
<!--                               type="file"-->
<!--                               class="form-control"-->
<!--                               id="banner"-->
<!--                               v-model="form.banner">-->
<!--                       </div>-->

<!--                       <div class="form-group">-->
<!--                           <label for="days">days</label>-->
<!--                           <input-->
<!--                               type="text"-->
<!--                               class="form-control"-->
<!--                               id="days"-->
<!--                               v-model="form.days">-->
<!--                       </div>-->

<!--                       <div class="form-group">-->
<!--                           <label for="country">country</label>-->
<!--                           <input-->
<!--                               type="text"-->
<!--                               class="form-control"-->
<!--                               id="country"-->
<!--                               v-model="form.country">-->
<!--                       </div>-->

                       <button type="submit" class="btn btn-success">save</button>
                   </form>

               </div>
               <div class="col-lg-4"></div>
           </div>
        </div>
    </div>
</template>

<script>
import {fireDb, storageDB} from '@/plugins/firebase'

export default {
    layout: 'dashboard',
    data () {
        return {
            form: {
                name: '',
                slug: '',
                shortDescription: '',
                reviews: 9,
                rate: 5,
                price: 800,
                isPopular: true,
                banner: '',
                image: null,
                // banner: 'https://images.unsplash.com/photo-1566893298691-bfd8e0e62e10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=956&q=80',
                // image: 'https://images.unsplash.com/photo-1569148624808-07fb83e0901c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
                description: ['on description'],
                daysDetails: ['first day details'],
                days: 3,
                country: ''
            }
        }
    },
    mounted() {
        console.log(storageDB)
    },
    methods: {
        onFileSelected (event) {
            // console.log(event.target.files[0])
            this.form.image = event.target.files[0]

        },
        async onSubmit () {
            console.log(this.form.image.name)

            // const fd = new FormData()
            // fd.append('image', this.form.image, this.form.image.name)
            //
            // console.log(fd)


            const storageRef = await storageDB.ref(`test/${this.form.image.name}`)
            storageRef.put(this.form.image)

            // await this.$axios.$post('/destinations.json', this.form)
            //     .then(res => {
            //         console.log(res)
            //     })
        }
    }
}
</script>

<style scoped>

</style>
