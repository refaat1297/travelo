<template>
    <section class="app-slider">
        <VueSlickCarousel  v-bind="settings">
            <div class="single-place">
                <img src="~assets/img/shared/slider/slider-1.png" class="img-fluid" alt="">
                <div class="content">
                    <h2>california</h2>
                    <p>Pixel perfect design with awesome contents</p>
                    <nuxt-link to="/destinations/california">explore more</nuxt-link>
                </div>
            </div>

            <div class="single-place">
                <img src="~assets/img/shared/slider/slider-2.png" class="img-fluid" alt="">
                <div class="content">
                    <h2>London</h2>
                    <p>Pixel perfect design with awesome contents</p>
                    <nuxt-link to="/destinations/london">explore more</nuxt-link>
                </div>
            </div>

            <div class="single-place">
                <img src="~assets/img/shared/slider/slider-3.png" class="img-fluid" alt="">
                <div class="content">
                    <h2>korola megna</h2>
                    <p>Pixel perfect design with awesome contents</p>
                    <nuxt-link to="/destinations/korola-megna">explore more</nuxt-link>
                </div>
            </div>
        </VueSlickCarousel>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: "AppSlider",
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            settings: {
                "dots": false,
                arrows: true,
                "dotsClass": "slick-dots custom-dot-class",
            },
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

<style lang="scss">
.app-slider {
    height: 80vh;
    transition: all .2s ease-in-out;

    @media (max-width: 767px) {
        height: 60vh;
    }


    .single-place {
        height: 100%;
        width: 100%;
        position: relative;

        img {
            height: 80vh;
            width: 100%;
            object-fit: cover;
            transition: all .2s ease-in-out;

            @media (max-width: 767px) {
                height: 60vh;
            }

        }

        .content {
            padding: 0 .4rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            z-index: 44;
            text-align: center;
            width: 100%;

            h2 {
                font-family: headingFont, sans-serif;
                color: #fff;
                font-size: 4rem;
                text-transform: capitalize;
                transform: scale(1.2);
                margin-bottom: 0;
                font-weight: 500;

                @media (max-width: 767px) {
                    transform: scale(1);
                    font-size: 3.1rem;
                }
            }

            p {
                font-size: 1.3rem;
                margin: 0;

                @media (max-width: 767px) {
                    font-size: 1rem;
                }
            }

            a {
                text-decoration: none;
                color: #fff;
                background-color: var(--secondary-color);
                padding: .7rem 1.2rem;
                text-transform: capitalize;
                border-radius: .3rem;
                font-size: .9rem;
                display: inline-block;
                margin-top: 1.3rem;
                transition: all .2s ease-in-out;

                @media (max-width: 767px) {
                    font-size: .8rem;
                }

                &:hover {
                    background-color: var(--primary-color);
                }
            }
        }
    }

    .slick-arrow {
        z-index: 55;
        height: 100px;
        width: 50px;
        background-color: rgba(#fff, .3);
        color: #fff;
        transition: all .2s ease-in-out;

        @media (max-width: 767px) {
            display: none !important;
        }

        &:hover {
            background-color: #fff;

            &.slick-prev, &.slick-next {
                &:before {
                    color: var(--black-text-color) !important;
                }
            }
        }


        &.slick-prev {
            left: 0;
            transform: translate(0, -50%);

            &:before {
                content: "\f053";
                font-family: "Font Awesome 5 Free", sans-serif;
                font-weight: 600;
                font-size: 1.2rem;
                color: #fff;
                transition: all .2s ease-in-out;
            }
        }

        &.slick-next {
            right: 0;
            transform: translate(o, -50%);

            &:before {
                content: "\f054";
                font-family: "Font Awesome 5 Free", sans-serif;
                font-weight: 600;
                color: #fff;
                font-size: 1.2rem;
                transition: all .2s ease-in-out;
            }
        }
    }
}
</style>
