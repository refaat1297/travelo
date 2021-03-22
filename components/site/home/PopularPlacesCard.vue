<template>
    <div class="popular-places-card">
        <div class="card">
            <div class="img-container">
                <img :src="place.image" class="card-img-top" alt="">
                <div class="price">${{ place.price }}</div>
            </div>
            <div class="card-body">
                <h4 class="card-title">
                    <nuxt-link :to="`/destinations/${place.slug}`">{{ place.name }}</nuxt-link>
                </h4>
                <p class="card-text">{{ place.country }}</p>

                <div class="info">
                    <div class="rate">
                        <div class="stars">
                            <Star v-for="(star, index) in place.rate" :key="'star-' + index" />
                            <OutlineStar v-for="(star, index) in (5 - place.rate)" :key="'outline-star-' + index" />
                        </div>
                        <div class="review">({{  place.reviews  }} Review)</div>
                    </div>

                    <div class="time">
                        <Clock />
                        <span>{{ place.days }} Days</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Star from "../../icons/Star";
import Clock from "../../icons/Clock";
import OutlineStar from "../../icons/OutlineStar";
export default {
    name: "PopularPlacesCard",
    components: {OutlineStar, Clock, Star},
    props: {
        place: {
            type: Object,
        }
    }
}
</script>

<style lang="scss" scoped>
.popular-places-card {
    transition: all .2s ease-in-out;
    border-radius: 7px;
    overflow: hidden;
    margin-bottom: 1.3rem;

    &:hover {
        box-shadow: 0 8px 10px #0000000a;

        .card {
            .img-container {
                .price {
                    background-color: var(--primary-color);
                }
            }

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
            position: relative;
            height: 220px;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }

            .price {
                position: absolute;
                top: 10px;
                left: 10px;
                color: #fff;
                background-color: var(--secondary-color);
                padding: .3rem .7rem;
                border-radius: 18px;
                font-size: .9rem;
                font-weight: 600;
                text-align: center;
                transition: all .2s ease-in-out;
            }
        }
        .card-body {

            .card-title {
                margin-bottom: 0;

                a {
                    text-decoration: none;
                    font-size: 1.4rem;
                    text-transform: capitalize;
                    color: var(--black-text-color);
                    transition: all .2s ease-in-out;
                }
            }

            .card-text {
                margin-bottom: 0;
                color: var(--gray-text-color);
                font-size: .9rem;
                text-transform: capitalize;
            }

            .info {
                margin-top: 1.2rem;
                margin-bottom: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .rate {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    .stars {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        margin-right: .3rem;

                        svg {
                            color: #FDAE5C;
                            width: 13px;
                            height: 13px;
                        }
                    }

                    .review {
                        color: var(--gray-text-color);
                        font-size: .8rem;
                        text-transform: capitalize;
                    }
                }

                .time {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    svg {
                        color: var(--gray-text-color);
                        width: 13px;
                        height: 13px;
                    }

                    span {
                        color: var(--gray-text-color);
                        font-size: .8rem;
                        text-transform: capitalize;
                        display: block;
                        margin-left: .3rem;
                    }
                }

            }
        }
    }
}
</style>
