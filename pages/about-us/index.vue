<template>
    <section class="about-us">
        <AppBanner
            title="about us"
            description="Pixel Perfect Design With Awesome Content"
            :image="require(`assets/img/shared/slider/about-us.png`)"
        />

        <div class="our-story">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-10">
                        <h3>our story</h3>
                        <p>Consulting represents success at realizing the company is going in the wrong direction. The
                            only time the company fails is when it is not possible to do a turnaround anymore. We help
                            companies pivot into more profitable directions where they can expand and grow. It is
                            inevitable that companies will end up making a few mistakes; we help them correct these
                            mistakes.</p>
                        <p>Consulting represents success at realizing the company is going in the wrong direction. The
                            only time the company fails is when it is not possible to do a turnaround anymore. We help
                            companies pivot into more profitable directions where they can expand and grow. It is
                            inevitable that companies will end up making a few mistakes; we help them correct these
                            mistakes.</p>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="img-box">
                                    <img src="~assets/img/about-us/about-1.png" class="img-fluid" alt="">
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="img-box">
                                    <img src="~assets/img/about-us/about-2.png" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AppBanner from "../../components/shared/AppBanner";

export default {
    components: {AppBanner}
}
</script>

<style lang="scss" scoped>
.about-us {
    .our-story {
        padding: 4rem 0;

        h3 {
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: 1.4rem;
            text-transform: capitalize;

            @media (max-width: 767px) {
                font-size: 1.2rem;
            }
        }

        p {
            color: var(--gray-text-color);
            font-size: 1rem;
            margin-bottom: 1.4rem;

            @media (max-width: 767px) {
                font-size: .9rem;
            }
        }

        .img-box {
            margin-top: 1.4rem;
            width: 100%;
            height: 300px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>
