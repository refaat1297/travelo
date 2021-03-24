<template>
    <section class="all-destinations">
        <AppBanner
            title="Destinations"
            description="Pixel Perfect Design With Awesome Contents"
            :image="require(`assets/img/shared/slider/slider-1.png`)"
        />
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4">
                    <div class="destinations-filter" >
                        <select v-model="country" class="form-control">
                            <option value="all" selected>all</option>
                            <option value="indonesia">Indonesia</option>
                            <option value="united state of america">USA</option>
                            <option value="england">England</option>
                        </select>

<!--                        <vue-slider v-model="value" :minRange="0" :maxRange="700" :enable-cross="false"></vue-slider>-->


                        <button @click="resetFilter" class="btn btn-primary">reset filter</button>
                    </div>
                </div>
                <div class="col-12 col-lg-8">
                    <div class="filter-result">
                        <div class="row">
                            <div class="col-12 col-md-6" v-for="place in places" :key="place.id">
                                <popular-places-card :place="place" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PopularPlacesCard from "../../components/site/home/PopularPlacesCard";
import AppBanner from "../../components/shared/AppBanner";

export default {
    components: {AppBanner, PopularPlacesCard},
    layout: 'destination',
    data () {
        return {
            country: 'all',
            value: 0,
        }
    },
    watch: {
        async country (oldValue, newValue) {
            const query = this.country === 'all' ? '' : `?orderBy="country"&equalTo="${this.country}"`

            this.places = await this.$axios.$get(`/destinations.json${query}`, {
                'Content-Type': 'application/json'
            })
                .then(res => {
                    let data = Object.entries(res).map(dest => {
                        return Object.assign({}, dest[1], {
                            id: dest[0]
                        })
                    })

                    return data
                })

        }
    },
    async asyncData (context) {
        let places = await context.app.$axios.$get(`/destinations.json`, {
            'Content-Type': 'application/json'
        })
            .then(res => {
                let data = Object.entries(res).map(dest => {
                    return Object.assign({}, dest[1], {
                        id: dest[0]
                    })
                })

                return data
            })

        return {
            places
        }
    },
    // watchQuery (newQuery, oldQuery) {
    //     console.log(newQuery, oldQuery)
    //     // return newQuery.foo && oldQuery.bar
    // },
    methods: {
        resetFilter () {
            this.country = 'all'
        }
    }
}
</script>

<style lang="scss" scoped>
.all-destinations {
    .filter-result {
        padding: 5rem 0;
    }
}
</style>
