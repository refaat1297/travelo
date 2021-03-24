<template>
    <section class="contact-us">
        <AppBanner
            title="contact"
            description="Pixel Perfect Design With Awesome Content"
            :image="require(`assets/img/shared/slider/contact-banner.png`)"
        />

        <div class="location">
            <div class="container">
                <b-embed
                    type="iframe"
                    aspect="16by9"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13754.760837018066!2d31.182491950000003!3d30.473211550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1616585769006!5m2!1sen!2seg"
                    allowfullscreen
                ></b-embed>
            </div>
        </div>

        <div class="get-in-touch">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-8">
                        <form>
                            <h3>Get in Touch</h3>

                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="your name">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Your Email">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="enter subject">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="message" rows="5"></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="submit">send</button>
                        </form>
                    </div>
                    <div class="col-12 col-md-12 col-lg-4">
                        <div class="contact-details">
                            <div class="details">
                                <HomeIcon />
                                <div class="info">
                                    <h5>Buttonwood, California.</h5>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>

                            <div class="details">
                                <TabletIcon />
                                <div class="info">
                                    <h5>+1 253 565 2365</h5>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>

                            <div class="details">
                                <EmailIcon />
                                <div class="info">
                                    <h5>support@colorlib.com</h5>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13754.760837018066!2d31.182491950000003!3d30.473211550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1616585769006!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>-->

    </section>
</template>

<script>
import AppBanner from "../../components/shared/AppBanner";
import HomeIcon from "../../components/icons/HomeIcon";
import TabletIcon from "../../components/icons/TabletIcon";
import EmailIcon from "../../components/icons/EmailIcon";
export default {
    components: {EmailIcon, TabletIcon, HomeIcon, AppBanner}
}
</script>

<style lang="scss" scoped>
.contact-us {
    .location {
        padding: 4rem 0;
    }

    .get-in-touch {
        padding: 0 0 4rem;

        form {
            display: block;

            h3 {
                font-weight: 600;
                font-size: 1.5rem;
                margin-bottom: 2rem;
                text-transform: capitalize;

                @media (max-width: 767px) {
                    font-size: 1.2rem;
                }
            }
            .form-group {
                .form-control {
                    display: block;
                    width: 100%;
                    border-radius: 5px;
                    border: 0;
                    background-color: var(--light-gray-color);

                    &[type=text], &[type=email] {
                        height: 50px;
                    }
                    &::placeholder {
                        text-transform: capitalize;
                        font-weight: 200;
                        font-size: .9rem;

                        @media (max-width: 767px) {
                            font-size: .8rem;
                        }
                    }

                    &:focus {
                        border: 0;
                        box-shadow: 0 0 0 transparent;
                    }
                }
            }

            button {
                display: block;
                padding: .8rem 1rem;
                color: #fff;
                background-color: var(--primary-color);
                border: 1px solid var(--primary-color);
                border-radius: 5px;
                text-transform: capitalize;
                font-weight: 500;
                font-size: .9rem;
                transition: all .2s ease-in-out;
                width: 100%;

                &:hover {
                    background-color: var(--secondary-color);
                    border-color: var(--secondary-color);
                }

            }
        }

        .contact-details {
            @media (max-width: 991px) {
                margin-top: 1.4rem;
            }

            .details {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;

                &:not(:last-of-type) {
                    margin-bottom: 1.3rem;
                }

                svg {
                    width: 28px;
                    height: 28px;
                    color: var(--gray-text-color);
                    display: block;
                    margin-right: .5rem;
                }

                .info {
                    h5 {
                        font-size: 1rem;
                        font-weight: 600;
                        color: var(--black-text-color);
                        margin-bottom: .2rem;

                        @media (max-width: 767px) {
                            font-size: .9rem;
                        }
                    }

                    p {
                        font-size: .8rem;
                        margin-bottom: 0;
                        color: var(--gray-text-color)
                    }
                }
            }
        }
    }
}
</style>
