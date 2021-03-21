<template>
    <section class="subscribe">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-5">
                    <div class="info">
                        <h3>Subscribe Our Newsletter</h3>
                        <p>Subscribe newsletter to get offers and about new places to discover.</p>
                    </div>
                </div>
                <div class="col-12 col-lg-7">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Your mail">
                        </div>
                        <button type="submit">subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Subscribe"
}
</script>

<style lang="scss" scoped>
.subscribe {
    padding: 5rem 0;
    background-image: url("~assets/img/shared/subscribe.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;

    &:before {
        content: '';
        padding: 5rem 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(#040e27, .7);
    }


    .info {
        color: #fff;

        h3 {
            font-weight: 500;
            font-size: 1.7rem;

            @media (max-width: 767px) {
                font-size: 1.4rem;
            }
        }

        p {
            color: #aab1b7;
            width: 100%;

            @media (max-width: 767px) {
                max-width: 100%;
                font-size: .9rem;
            }
        }
    }

    form {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .form-group {
            //width: 375px;
            width: 490px;
            margin-bottom: 0;

            .form-control {
                display: block;
                width: 100%;
                height: 50px;
                border-radius: 5px;
                border: 0;

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
            margin-left: .5rem;
            font-weight: 500;
            font-size: .9rem;
            transition: all .2s ease-in-out;

            &:hover {
                background-color: var(--secondary-color);
                border-color: var(--secondary-color);
            }

        }

}
}
</style>
