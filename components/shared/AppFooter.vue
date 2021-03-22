<template>
    <footer>
        <div class="container">
            <div class="footer-details">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="site-info">
                            <nuxt-link to="/">
                                <img src="~assets/img/shared/footer_logo.png" alt="">
                            </nuxt-link>

                            <p>5th flora, 700/D kings road, green lane New York-1782</p>
                            <a href="tel:+10 367 826 2567">+10 367 826 2567</a>
                            <a href="mailto:contact@carpenter.com">contact@carpenter.com</a>
                            <div class="social-media">
                                <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="#" target="_blank"><i class="fab fa-pinterest"></i></a>
                                <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="company-links">
                            <h3>Company</h3>

                            <div class="links">
                                <nuxt-link to="/">pricing</nuxt-link>
                                <nuxt-link to="/about-us">About</nuxt-link>
                                <nuxt-link to="/">Gallery</nuxt-link>
                                <nuxt-link to="/contact-us">Contact</nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="popular-destinations">
                            <h3>Popular Destination</h3>

                            <div class="links">
                                <nuxt-link to="/">Indonesia</nuxt-link>
                                <nuxt-link to="/">America</nuxt-link>
                                <nuxt-link to="/">India</nuxt-link>
                                <nuxt-link to="/">Switzerland</nuxt-link>
                                <nuxt-link to="/">Italy</nuxt-link>
                                <nuxt-link to="/">Canada</nuxt-link>
                                <nuxt-link to="/">France</nuxt-link>
                                <nuxt-link to="/">England</nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="instagram-pics">
                            <h3>instagram</h3>

                            <div class="links">
                                <nuxt-link to="/">
                                    <img src="~assets/img/shared/insta/insta-1.png" alt="">
                                </nuxt-link>
                                <nuxt-link to="/">
                                    <img src="~assets/img/shared/insta/insta-2.png" alt="">
                                </nuxt-link>
                                <nuxt-link to="/">
                                    <img src="~assets/img/shared/insta/insta-3.png" alt="">
                                </nuxt-link>
                                <nuxt-link to="/">
                                    <img src="~assets/img/shared/insta/insta-4.png" alt="">
                                </nuxt-link>
                                <nuxt-link to="/">
                                    <img src="~assets/img/shared/insta/insta-5.png" alt="">
                                </nuxt-link>
                                <nuxt-link to="/">
                                    <img src="~assets/img/shared/insta/insta-6.png" alt="">
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright ©2021 All rights reserved | by <a href="https://github.com/refaat1297" target="_blank">Ahmed Refaat</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "AppFooter"
}
</script>

<style lang="scss" scoped>
footer {
    background-color: var(--dark-blue-color);
    color: #fff;

    .footer-details {
        padding: 6rem 0;

        .site-info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 2rem;


            img {
                width: 130px;
                display: block;
                margin-bottom: 1.7rem;
            }

            p {
                font-size: .9rem;
                color: #AAB1B7;
                margin-bottom: .6rem;
            }

            a {
                text-decoration: none;
                color: #AAB1B7;
                font-size: .9rem;
                margin-bottom: .3rem;
                margin-top: .3rem;
                transition: all .2s ease-in-out;

                &:hover {
                    color: var(--primary-color)
                }
            }

            .social-media {
                margin-top: 1.4rem;

                a {
                    display: inline-block;
                    font-size: 1rem;


                    &:not(:last-of-type) {
                        margin-right: .8rem;
                    }
                }
            }
        }

        .company-links {
            margin-bottom: 2rem;

            h3 {
                color: #fff;
                font-size: 1.1rem;
                text-transform: capitalize;
                font-weight: 400;
                margin-bottom: 1.8rem;
            }

            .links {
                a {
                    display: block;
                    margin-bottom: 1rem;
                    color: #AAB1B7;
                    text-transform: capitalize;
                    text-decoration: none;
                    transition: all .2s ease-in-out;
                    font-size: .9rem;

                    &:hover {
                        color: var(--primary-color)
                    }
                }
            }
        }

        .popular-destinations {
            margin-bottom: 2rem;

            h3 {
                color: #fff;
                font-size: 1.1rem;
                text-transform: capitalize;
                font-weight: 400;
                margin-bottom: 1.8rem;
            }

            .links {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: 1fr;
                grid-column-gap: 0px;
                grid-row-gap: 0px;

                a {
                    display: block;
                    margin-bottom: 1rem;
                    color: #AAB1B7;
                    text-transform: capitalize;
                    text-decoration: none;
                    transition: all .2s ease-in-out;
                    font-size: .9rem;

                    &:hover {
                        color: var(--primary-color)
                    }
                }
            }
        }

        .instagram-pics {
            margin-bottom: 2rem;

            h3 {
                color: #fff;
                font-size: 1.1rem;
                text-transform: capitalize;
                font-weight: 400;
                margin-bottom: 1.8rem;
            }

            .links {
                //display: grid;
                //grid-template-columns: repeat(3, 1fr);
                //grid-template-rows: repeat(2, 1fr);
                //grid-column-gap: 0;
                //grid-row-gap: 10px;

                a {
                    width: 33.33%;
                    float: left;
                    padding: 7.5px;
                    border-radius: 5px;
                    overflow: hidden;

                    display: block;
                    //width: 60px;
                    //height: 60px;

                    img {
                        width: 100%;
                        border-radius: 5px;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    .copyright {
        border-top: 1px solid rgba(#AAB1B7, .4);
        padding: 1rem 0;

        p {
            margin-bottom: 0;
            text-align: center;
            font-size: .9rem;
            color: #AAB1B7;
            text-transform: capitalize;

            a {
                text-decoration: none;
                color: var(--primary-color);
            }
        }
    }
}
</style>
