<template>
    <section class="advantages">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="advantage">
                        <img src="~assets/img/shared/advantages/1.svg" alt="">
                        <h5>Comfortable Journey</h5>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="advantage">
                        <img src="~assets/img/shared/advantages/2.svg" alt="">
                        <h5>Luxuries Hotel</h5>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="advantage">
                        <img src="~assets/img/shared/advantages/3.svg" alt="">
                        <h5>Travel Guide</h5>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppAdvantages"
}
</script>

<style lang="scss" scoped>
.advantages {
    padding: 5rem 0;

    .advantage {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin-bottom: 1.3rem;

        img {
            width: 60px;
            height: 60px;

            @media (max-width: 767px) {
                width: 50px;
                height: 50px;
            }
        }

        h5 {
            margin-top: 2rem;
            margin-bottom: .4rem;
            font-size: 1.3rem;
            color: var(--black-text-color);

            @media (max-width: 767px) {
                font-size: 1.2rem;
            }
        }

        p {
            font-size: 1rem;
            color: var(--gray-text-color);

            @media (max-width: 767px) {
                font-size: .9rem
            }
        }
    }
}
</style>
