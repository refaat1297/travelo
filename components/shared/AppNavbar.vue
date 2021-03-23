<template>
    <nav>
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-xl-2 col-lg-2">
                    <div class="logo">
                        <nuxt-link to="/">
                            <img src="~assets/img/shared/logo.png" alt="">
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="main-menu d-none d-lg-block">
                        <ul class="list-unstyled">
                            <li><nuxt-link to="/">Home</nuxt-link></li>
                            <li><nuxt-link to="/about-us">about</nuxt-link></li>
                            <li><nuxt-link to="/destinations">destinations</nuxt-link></li>
                            <li><nuxt-link to="/blog">blog</nuxt-link></li>
                            <li><nuxt-link to="/contact">contact</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 d-none d-lg-block">
                    <div class="social-wrap d-flex align-items-center justify-content-center">
                        <div class="number">
                            <p>
                                <i class="fas fa-phone-alt"></i>
                                <span>10(256)-928 256</span>
                            </p>
                        </div>
                        <div class="social-links d-none d-xl-block">
                            <ul class="list-unstyled">
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="burger-menu" @click="menu = !menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="search-icon">
                    <span>
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <div class="col-12">
                    <div class="mobile-menu d-block d-lg-none" :class="{'open-small-menu': menu}">
                        <ul class="list-unstyled">
                            <li><nuxt-link to="/">home</nuxt-link></li>
                            <li><nuxt-link to="/about-us">about</nuxt-link></li>
                            <li><nuxt-link to="/destinations">destinations</nuxt-link></li>
                            <li><nuxt-link to="/blog">blog</nuxt-link></li>
                            <li><nuxt-link to="/contact">contact</nuxt-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "AppNavbar",
    data () {
        return {
            menu: false
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    padding: 2rem 0;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 44;

    @media (max-width: 991px) {
        padding: 1rem 0;
    }

    .logo {
        a {
            img {
                display: block;
                width: 120px;
            }
        }
    }

    .main-menu {
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            li {
                display: block;

                &:not(:last-of-type) {
                    margin-right: 1rem;
                }

                a {
                    text-decoration: none;
                    text-transform: capitalize;
                    font-size: 1rem;
                    color: var(--black-text-color);
                }
            }
        }
    }

    .social-wrap {
        .number {
            padding-right: .8rem;

            p {
                margin-bottom: 0;

                i {
                    color: var(--primary-color);
                    font-size: .9rem;
                    display: inline-block;
                    margin-right: .3rem;
                }

                span {
                    color: var(--black-text-color);
                    font-size: .9rem;
                }
            }
        }

        .social-links {
            padding-left: .8rem;
            border-left: 1px solid #AAB1B7;

            ul {
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                li {
                    &:not(:last-of-type) {
                        margin-right: 1rem;
                    }

                    a {
                        text-decoration: none;
                        color: #AAB1B7;

                        i {

                        }
                    }
                }
            }
        }
    }

    .burger-menu {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9;
        background: #fff;
        width: 50px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        span {
            display: block;
            background-color: #000;
            width: 80%;
            height: 3px;

            &:not(:last-of-type) {
                margin-bottom: .3rem;
            }
        }
    }

    .search-icon {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9;
        background: var(--primary-color);
        width: 80px;
        display: grid;
        place-items: center;
        cursor: pointer;

        @media (max-width: 991px) {
            right: 60px;
        }

        span {
            i {
                font-size: 1.4rem;
                color: #fff;
            }
        }
    }

    .mobile-menu {
        position: absolute;
        display: block;
        width: 96%;
        margin: auto;
        left: 50%;
        top: 16px;
        //z-index: 99;
        background-color: #fff;
        transform: translateX(-50%) translateY(-145%);
        padding: 1.3rem 1rem;
        transition: all .3s ease-in-out;

        &.open-small-menu {
            transform: translateX(-50%) translateY(0);
        }

        ul {
            li {
                display: block;

                &:not(:last-of-type) {
                    margin-bottom: .7rem;
                }

                a {
                    display: block;
                    width: 100%;
                    text-decoration: none;
                    text-transform: capitalize;
                    font-size: 1rem;
                    color: var(--black-text-color);
                    transition: all .2s ease-in-out;

                    &:hover {
                        color: var(--primary-color);
                    }
                }
            }
        }
    }
}
</style>
