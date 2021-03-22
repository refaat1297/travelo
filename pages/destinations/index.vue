<template>
    <section class="all-destinations">
        <AppBanner
            title="Destinations"
            description="Pixel Perfect Design With Awesome Contents"
            :image="require(`assets/img/shared/slider/slider-1.png`)"
        />
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4"></div>
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
