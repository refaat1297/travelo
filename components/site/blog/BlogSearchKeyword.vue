<template>
    <section class="search-keyword">
        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="search keyword">
            </div>
            <button>search</button>
        </form>
    </section>
</template>

<script>
export default {
    name: "BlogSearchKeyword"
}
</script>

<style lang="scss" scoped>
.search-keyword {
    padding: 1.4rem 1.3rem;
    background-color: var(--light-gray-color);

    form {
        display: block;

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
