<template>
    <section class="app-banner" :style="image ? `background-image: url('${image}')` : null">
        <div class="content">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppBanner",
    props: {
        title: {
            type: String
        },
        description: {
            type: String
        },
        image: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
.app-banner {
    background-image: url("~assets/img/shared/slider/slider-1.png");
    height: 100vh;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1rem;


    .content {
        color: #fff;
        text-align: center;

        h2 {
            font-family: headingFont, sans-serif;
            color: #fff;
            font-size: 4rem;
            text-transform: capitalize;
            transform: scale(1.2);
            margin-bottom: 0;
            font-weight: 500;

            @media (max-width: 767px) {
                transform: scale(1.1);
                font-size: 3.1rem;
            }
        }

        p {
            font-size: 1.3rem;

            @media (max-width: 767px) {
                font-size: 1rem;
            }
        }
    }
}
</style>
