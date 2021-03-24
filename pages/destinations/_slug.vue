<template>
    <section class="destination-details">
        <AppBanner
            :image="destination.banner"
            :title="destination.name"
            :description="destination.shortDescription"
        />

        <div class="details" v-if="Object.keys(destination).length > 0">
            <div class="description">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-10">
                            <h3>Description</h3>
                            <p v-for="(desc, i) in destination.description" :key="'desc-' + i">{{ desc }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="days">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-10">
                            <div class="day" v-for="(day, i) in destination.daysDetails" :key="'day-' + i">
                                <h4>Day-{{ i < 10 ? `0${i + 1}` : i + 1 }}</h4>
                                <p>{{ day }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-for-join">
           <div class="container">
               <div class="row justify-content-center">
                   <div class="col-12 col-lg-10">
                       <form>
                           <h3>Contact for join</h3>

                           <div class="row justify-content-center">
                               <div class="col-12 col-md-6">
                                   <div class="form-group">
                                       <input type="text" class="form-control" placeholder="your name">
                                   </div>
                               </div>
                               <div class="col-12 col-md-6">
                                   <div class="form-group">
                                       <input type="text" class="form-control" placeholder="phone no.">
                                   </div>
                               </div>
                               <div class="col-12">
                                   <div class="form-group">
                                       <textarea class="form-control" placeholder="message" rows="5"></textarea>
                                   </div>
                               </div>
                           </div>

                           <button type="submit">submit</button>
                       </form>
                   </div>
               </div>
           </div>
        </div>
    </section>
</template>

<script>
import AppBanner from "../../components/shared/AppBanner";
export default {
    components: {AppBanner},
    layout: 'destination',
    // data () {
    //     return {
    //         destination: {}
    //     }
    // },
    async asyncData (context) {
        try {
            let destination = await context.app.$axios.$get(`/destinations.json?orderBy="slug"&equalTo="${context.params.slug}"`, {
                'Content-Type': 'application/json'
            })
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
    },
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

    .contact-for-join {

        form {
            display: block;
            padding: 3rem 0;
            border-top: 1px solid #E4E6E8;

            h3 {
                font-weight: 600;
                font-size: 1.5rem;
                margin-bottom: 2rem;
                text-transform: capitalize;

                @media (max-width: 767px) {
                    font-size: 1.2rem;
                }
            }
            .form-group {
                .form-control {
                    display: block;
                    width: 100%;
                    border-radius: 5px;
                    border: 0;
                    background-color: var(--light-gray-color);

                    &[type=text] {
                        height: 50px;
                    }
                    &::placeholder {
                        text-transform: capitalize;
                        font-weight: 200;
                        font-size: .9rem;

                        @media (max-width: 767px) {
                            font-size: .8rem;
                        }
                    }

                    &:focus {
                        border: 0;
                        box-shadow: 0 0 0 transparent;
                    }
                }
            }

            button {
                display: block;
                padding: .8rem 1rem;
                color: #fff;
                background-color: var(--primary-color);
                border: 1px solid var(--primary-color);
                border-radius: 5px;
                text-transform: capitalize;
                font-weight: 500;
                font-size: .9rem;
                transition: all .2s ease-in-out;
                width: 100%;

                &:hover {
                    background-color: var(--secondary-color);
                    border-color: var(--secondary-color);
                }

            }
        }
    }
}
</style>
