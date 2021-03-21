<template>
    <main class="home-page">

        <nuxt-link to="/dashboard">dashboard</nuxt-link>

        <section class="popular-destination">
            <div class="container">
                <div class="info">
                    <h2>Popular Destination</h2>
                    <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                </div>

                <div class="row" v-if="popularDestinations.length > 0">
                    <div class="col-12 col-md-6 col-lg-4" v-for="destination in popularDestinations" :key="destination.id">
                        <PopularDestinationCard :destination="destination" />
                    </div>
                </div>
                <h3 v-else>loading..</h3>
            </div>
        </section>
    </main>
</template>

<script>
import PopularDestinationCard from "../components/site/home/PopularDestinationCard";
import {fireDb} from "~/plugins/firebase";

export default {
    components: {PopularDestinationCard},
    async asyncData (context) {
        let result = await context.app.$axios.$get('/popular-destinations.json')
            .then(res => {
                let data = Object.entries(res).map(dest => {
                    return Object.assign({}, dest[1], {
                        id: dest[0]
                    })
                })

                return data
            })

        console.log(result)
        // let popularDestinations = await fireDb.collection('popular-destinations')
        //     .get()
        //     .then(snapShot => {
        //         return  snapShot.docs.map(doc => {
        //             return Object.assign({}, doc.data(), {
        //                 id: doc.id
        //             })
        //         })
        //
        //     })

        return {popularDestinations: result}
    }
}
</script>

<style lang="scss">
.popular-destination {
    .info {
        text-align: center;
        margin-bottom: 1.7rem;

        h2 {
            font-weight: 600;
            font-size: 1.7rem;

            @media (max-width: 767px) {
                font-size: 1.4rem;
            }
        }

        p {
            color: var(--gray-text-color);
            max-width: 60%;
            width: 100%;
            margin: auto;

            @media (max-width: 767px) {
                max-width: 100%;
                font-size: .9rem;
            }
        }
    }
}
</style>
