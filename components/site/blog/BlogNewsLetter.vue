<template>
    <section class="blog-news-letter">
        <h3>Newsletter</h3>

        <form>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="enter email">
            </div>
            <button>subscribe</button>
        </form>
    </section>
</template>

<script>
export default {
    name: "BlogNewsLetter"
}
</script>

<style lang="scss" scoped>
.blog-news-letter {
    padding: 1.4rem 1.3rem;
    background-color: var(--light-gray-color);
    margin-top: 1.4rem;

    h3 {
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: capitalize;
        border-bottom: 1px solid rgba(#7a838b, .1);
        padding-bottom: .6rem;
        color: var(--dark-blue-color)
    }

    form {
        display: block;
        margin-top: 2.2rem;

        .form-group {
            .form-control {
                background-color: #fff;
                color: var(--gray-text-color);
                font-size: .8rem;
                border-radius: 0;
                border: 1px solid rgba(#7a838b, .1);
                height: 45px;

                &:focus {
                    border: 1px solid rgba(#7a838b, .1);
                    box-shadow: 0 0 0 transparent;
                }

                &::placeholder {
                    text-transform: capitalize;
                    font-size: .8rem;
                    color: var(--gray-text-color);
                }
            }
        }

        button {
            display: block;
            width: 100%;
            text-align: center;
            background-color: var(--secondary-color);
            color: #fff;
            border: 0;
            outline: none;
            padding: .6rem 0;
            text-transform: capitalize;
            font-size: .9rem;
            transition: all .2s ease-in-out;
            margin-top: 1.3rem;

            &:hover {
                background-color: var(--primary-color);
            }
        }
    }
}
</style>
