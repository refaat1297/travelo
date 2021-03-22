<template>
    <section class="destination-details">
        <div class="destination-banner">
            banner {{$route.params.slug}}
            <nuxt-link to="/">home</nuxt-link>
        </div>

        <div class="details" v-if="Object.keys(destination).length > 0">
            <div class="description">
                <div class="container">
                    <h3>Description</h3>
                    <p v-for="(desc, i) in destination.description" :key="'desc-' + i">{{ desc }}</p>
                </div>
            </div>

            <div class="days">
                <div class="container">
                    <div class="day" v-for="(day, i) in destination.daysDetails" :key="'day-' + i">
                        <h4>Day-{{ i < 10 ? `0${i + 1}` : i + 1 }}</h4>
                        <p>{{ day }}</p>
                    </div>
                </div>
            </div>
        </div>

<!--        <div v-else>-->
<!--            loading...-->
<!--        </div>-->
    </section>
</template>

<script>
export default {
    // layout: 'destination',
    // data () {
    //     return {
    //         destination: {}
    //     }
    // },
    async asyncData (context) {
        try {
            let destination = await context.app.$axios.$get(`/destinations.json?orderBy="slug"&equalTo="${context.params.slug}"`)
                .then(res => {
                    let data = Object.entries(res).map(dest => {
                        return Object.assign({}, dest[1], {
                            id: dest[0]
                        })
                    })

                    return  data[0]
                })

            return {destination}
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style lang="scss" scoped>
.destination-details {
   .details {
       padding: 5rem 0;

       .description {
           h3 {
               font-weight: 600;
               font-size: 1.5rem;
               margin-bottom: 1.4rem;

               @media (max-width: 767px) {
                   font-size: 1.2rem;
               }
           }

           p {
                color: var(--gray-text-color);
               font-size: 1rem;
               margin-bottom: 1.4rem;

               @media (max-width: 767px) {
                   font-size: .9rem;
               }
           }
       }

       .days {
           .day {
               margin-bottom: 1.3rem;

               h4 {
                   font-weight: 600;
                   font-size: 1.1rem;
                   margin-bottom: 1rem;

                   @media (max-width: 767px) {
                       font-size: 1rem;
                   }
               }

               p {
                   color: var(--gray-text-color);
                   font-size: 1rem;

                   @media (max-width: 767px) {
                       font-size: .9rem;
                   }
               }
           }
       }
   }
}
</style>
