<template>
    <div class="popular-destination-card">
        <img :src="destination.image" class="img-fluid" alt="">
        <div class="overlay">
            <div class="content">
                <h5>{{ destination.name }}</h5>
                <nuxt-link to="/">{{ destination.places }} places</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopularDestinationCard",
    props: {
        destination: {
            type: Object,
        }
    }
}
</script>

<style lang="scss">
.popular-destination-card {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all .2s ease-in-out;
    margin-bottom: 1.3rem;
    //min-height: 400px;
    //height: 100%;

    &:hover {
        transform: translateY(-10px);
        box-shadow: -1px 3px 7px #00000038;

        .overlay {
            .content {
                h5 {
                    color: var(--primary-color);
                }

                a {
                    background-color: var(--primary-color);
                }
            }
        }
    }

    img {
        width: 100%;
        object-fit: cover;
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        background-image: linear-gradient(to top, rgba(#040e27, .6), transparent);

        .content {
            position: absolute;
            left: 20px;
            bottom: 15px;
            text-transform: capitalize;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            h5 {
                font-weight: 500;
                color: #fff;
                margin-bottom: 0;
                font-size: 1.4rem;
                margin-right: .4rem;
                transition: all .2s ease-in-out;

                @media (max-width: 767px) {
                    font-size: 1.2rem;
                }
            }

            a {
                display: inline-block;
                text-decoration: none;
                color: #fff;
                background-color: var(--secondary-color);
                border-radius: 15px;
                outline: none;
                padding: .2rem .5rem;
                font-size: .8rem;
                transition: all .2s ease-in-out;

                @media (max-width: 767px) {
                    font-size: .7rem;
                }
            }
        }
    }
}
</style>
