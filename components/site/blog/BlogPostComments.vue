<template>
    <div class="visitors-comments">
        <h3>{{ comments.length < 10 ? `0${comments.length}` : comments.length }} comments</h3>
        <div class="comment" v-for="comment in comments" :key="comment.id">
            <h4>{{ comment.name }}</h4>
            <div class="info">
                <span>{{ comment.email }}</span>
                <span>{{ $moment(comment.addedOn).format('LLLL') }}</span>
            </div>
            <p>{{ comment.comment }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogPostComments",
    props: {
        comments: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
.visitors-comments {
    padding: 1rem 0;

    h3 {
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: capitalize;
        //border-bottom: 1px solid rgba(#7a838b, .1);
        padding-bottom: .6rem;
        color: var(--dark-blue-color);

        @media (max-width: 767px) {
            font-size: 1rem;
        }
    }

    .comment {
        margin-bottom: 1.4rem;

        h4 {
            font-size: 1rem;
            font-weight: 600;
            text-transform: capitalize;
            //border-bottom: 1px solid rgba(#7a838b, .1);
            //padding-bottom: .6rem;
            color: var(--dark-blue-color);
            margin-bottom: 0;

            @media (max-width: 767px) {
                font-size: .9rem;
            }
        }

        .info {
            margin-bottom: .3rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            @media (max-width: 767px) {
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
            }

            span {
                color: var(--gray-text-color);

                &:first-of-type {
                    font-size: .8rem;
                    font-weight: 600;
                    display: inline-block;
                    margin-right: .3rem;
                }

                &:last-of-type {
                    font-size: .7rem;
                    position: relative;
                    top: 1px;
                }
            }
        }

        p {
            margin-bottom: 0;
            font-size: .9rem;

            @media (max-width: 767px) {
                font-size: .8rem;
            }
        }
    }
}
</style>
