<template>
    <section class="recent-trips">
        <div class="container">
            <h2>Recent Trips</h2>

            <div class="row" v-if="recentTrips">
                <div class="col-12 col-md-6 col-lg-4" v-for="trip in recentTrips" :key="trip.id">
                    <div class="trip">
                        <div class="card">
                            <div class="img-container">
                                <img :src="trip.image" class="card-img-top" alt="">
                            </div>
                            <div class="card-body">
                                <span class="date">{{ trip.date }}</span>
                                <h3 class="card-title">
                                    <nuxt-link to="/">{{ trip.title }}</nuxt-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>loading..</div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppRecentTrips",
    data () {
        return {
            recentTrips: null
        }
    },
    async fetch () {
        await this.$axios.$get('/recent-trips.json')
            .then(res => {
                let data = Object.entries(res).map(dest => {
                    return Object.assign({}, dest[1], {
                        id: dest[0]
                    })
                })

                this.recentTrips = data
            })
    }
}
</script>

<style lang="scss" scoped>
.recent-trips {
    padding: 5rem 0;

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-weight: 600;
        font-size: 1.7rem;

        @media (max-width: 767px) {
            font-size: 1.4rem;
        }
    }

    .trip {
        margin-top: 1.2rem;
        transition: all .2s ease-in-out;

        &:hover {
            .card {
                .card-body {
                    .card-title {
                        a {
                            color: var(--primary-color);
                        }
                    }
                }
            }
        }

        .card {
            border: 0;

            .img-container {
                border-radius: 7px;
                overflow: hidden;
                height: 220px;

                @media (max-width: 767px) {
                    height: 255px;
                }

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }

            .card-body {
                padding-left: 0;
                padding-right: 0;

                .date {
                    font-size: .9rem;
                    color: var(--gray-text-color);
                }

                .card-title {
                    margin-bottom: 0;

                    a {
                        transition: all .2s ease-in-out;
                        color: var(--black-text-color);
                        font-size: 1.1rem;
                        font-weight: 600;
                        text-decoration: none;

                        @media (max-width: 767px) {
                            font-size: 1rem;
                        }
                    }
                }
            }
        }
    }
}
</style>
