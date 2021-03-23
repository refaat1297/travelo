<template>
    <section class="app-testimonials">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10">
                    <VueSlickCarousel  v-bind="settings">
                        <div class="testimonial text-center">
                            <div class="img-container">
                                <img src="~assets/img/author.png" alt="">
                                <span>
                                    <i class="fas fa-quote-left"></i>
                                </span>
                            </div>
                            <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                            <h4>- Jerry Mouse</h4>
                        </div>

                        <div class="testimonial text-center">
                            <div class="img-container">
                                <img src="~assets/img/author.png" alt="">
                                <span>
                                    <i class="fas fa-quote-left"></i>
                                </span>
                            </div>
                            <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                            <h4>- Jerry Mouse</h4>
                        </div>

                        <div class="testimonial text-center">
                            <div class="img-container">
                                <img src="~assets/img/author.png" alt="">
                                <span>
                                    <i class="fas fa-quote-left"></i>
                                </span>
                            </div>
                            <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                            <h4>- Jerry Mouse</h4>
                        </div>

                        <div class="testimonial text-center">
                            <div class="img-container">
                                <img src="~assets/img/author.png" alt="">
                                <span>
                                    <i class="fas fa-quote-left"></i>
                                </span>
                            </div>
                            <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                            <h4>- Jerry Mouse</h4>
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: "AppTestimonials",
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            settings: {
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
            }
        }
    }
}
</script>

<style lang="scss">
.app-testimonials {
    padding: 4rem 0;
    background-color: var(--light-gray-color);
    overflow: hidden;

    .custom-dot-class {
        bottom: -35px;

        li {
            &.slick-active {
                button {
                    background-color: var(--primary-color);
                }
            }

            padding: 0;
            margin: 0;

            button {
                padding: 0;
                width: 13px;
                height: 13px;
                background-color: rgba(#7a838b, .5);
                border-radius: 50%;
                margin: 0;

                @media (max-width: 767px) {
                    width: 10px;
                    height: 10px;
                }

                &:before {
                    display: none;
                }
            }
        }
    }

    .testimonial {
        cursor: pointer;

        .img-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
            position: relative;
            width: 100px;
            height: 100px;


            img {
                margin: auto;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            span {
                width: 35px;
                height: 35px;
                background-color: var(--secondary-color);
                color: #fff;
                border-radius: 50%;
                display: grid;
                place-items: center;
                position: absolute;
                bottom: 0;
                right: 0;

                i {
                    font-size: .9rem;
                }
            }
        }

        p {
            width: 70%;
            margin: .6rem auto;
            font-size: 1rem;

            &:first-letter {
                text-transform: capitalize;
            }

            @media (max-width: 767px) {
                width: 95%;
                font-size: .85rem;
            }
        }

        h4 {
            font-size: .9rem;
            text-transform: capitalize;
            color: var(--gray-text-color);
        }
    }

}
</style>
