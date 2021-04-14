<template>
    <section class="categories-list">
        <h3>category</h3>

        <ul class="list-unstyled">
            <li><a href="javascript:;">restaurant food (37)</a></li>
            <li><a href="javascript:;">travel news (37)</a></li>
            <li><a href="javascript:;">modern technology (37)</a></li>
            <li><a href="javascript:;">product (37)</a></li>
            <li><a href="javascript:;">Inspiration (37)</a></li>
            <li><a href="javascript:;">Health Care (37)</a></li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "BlogCategoriesList"
}
</script>

<style lang="scss" scoped>
.categories-list {
    padding: 1.4rem 1.3rem;
    background-color: var(--light-gray-color);
    margin-top: 1.4rem;

    h3 {
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: capitalize;
        border-bottom: 1px solid rgba(#7a838b, .1);
        padding-bottom: .6rem;
        color: var(--dark-blue-color);

        @media (max-width: 767px) {
            font-size: 1rem;
        }
    }

    .list-unstyled {
        padding: 0;
        margin: 0;

        li {
            padding: .7rem 0;

            &:not(:last-of-type) {
                border-bottom: 1px solid rgba(#7a838b, .1);
            }

            a {
                text-transform: capitalize;
                text-decoration: none;
                color: var(--gray-text-color);
                font-size: .9rem;
                transition: all .2s ease-in-out;

                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }


}
</style>
