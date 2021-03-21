<template>
    <Slider
        animation="fade"
        v-model="sliderValue"
        :duration="5000"
        :speed="1000"
    >

        <SliderItem >
            <div class="content">
                <h3>Switzerland</h3>
                <p>Pixel perfect design with awesome contents</p>
                <nuxt-link to="/">explore more</nuxt-link>
            </div>
        </SliderItem>

        <SliderItem>
            <div class="content">
                <h3>Switzerland</h3>
                <p>Pixel perfect design with awesome contents</p>
                <nuxt-link to="/">explore more</nuxt-link>
            </div>
        </SliderItem>

        <SliderItem>
            <div class="content">
                <h3>Switzerland</h3>
                <p>Pixel perfect design with awesome contents</p>
                <nuxt-link to="/">explore more</nuxt-link>
            </div>
        </SliderItem>
<!--        <SliderItem-->
<!--            v-for="(i, index) in list"-->
<!--            :key="index"-->
<!--            @click="changeIndex(1);"-->
<!--            :style="i"-->
<!--        >-->
<!--            <div class="content">-->
<!--                <h3>Switzerland</h3>-->
<!--                <p>Pixel perfect design with awesome contents</p>-->
<!--                <nuxt-link to="/">explore more</nuxt-link>-->
<!--            </div>-->
<!--        </SliderItem>-->
    </Slider>
</template>

<script>
import {Slider, SliderItem} from 'vue-easy-slider'

export default {
    name: "AppSlider",
    components: {
        Slider,
        SliderItem
    },
    data() {
        return {
            list: [
                {
                    backgroundColor: "#3f51b5",
                    width: "100%",
                    height: "100%"
                },
                {
                    backgroundColor: "#eee",
                    width: "100%",
                    height: "100%"
                },
                {
                    backgroundColor: "#f44336",
                    width: "100%",
                    height: "100%"
                },
                {
                    backgroundColor: "#eee",
                    width: "100%",
                    height: "100%"
                }
            ],
            sliderValue: 2
        };
    },
    methods: {
        changeIndex(index) {
            this.sliderValue = index;
        }
    },
}
</script>

<style lang="scss" scoped>
.slider {
    height: 100vh !important;

    .slider-items {
        .slider-item {
            background-image: url("~assets/img/shared/slider/slider-1.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
}
</style>
