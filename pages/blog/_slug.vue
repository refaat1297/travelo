<template>
    <section class="post-details ">
        <div class="card">
            <div class="image-container">
                <img v-if="post.image" :src="post.image" class="card-img-top" alt="">
            </div>
            <div class="card-body">
                <h3 class="card-title">{{ post.title }}</h3>
                <div class="info">
                    <div class="tags">
                        <i class="fas fa-user"></i>
                        <p>
                            <a href="javascript:;" v-for="(tag, i) in post.tags" :key="`tag-${i}`">
                                <span v-if="i === (post.tags.length - 1)">{{ tag }}</span>
                                <span v-else>{{ tag }},</span>
                            </a>
                        </p>
                    </div>
                    |
                    <div class="comments" v-if="commentsCount">
                        <i class="fas fa-comments"></i>
                        <span>{{ commentsCount < 10 || commentsCount !== 0 ? `0${commentsCount}` : commentsCount }} comments</span>
                    </div>
                </div>

                <p class="card-text" v-for="(desc, i) in post.content" :key="`post-${i}`">{{ desc }}</p>
            </div>
        </div>

        <hr>

        <BlogPostComments :comments="comments" />

        <hr>

        <BlogCommentForm :postID="post.id" @getNewComment="getNewComment" />
    </section>
</template>

<script>
import AppBanner from "../../components/shared/AppBanner";
import BlogPostComments from "../../components/site/blog/BlogPostComments";
import BlogCommentForm from "../../components/site/blog/BlogCommentForm";

export default {
    components: {BlogCommentForm, BlogPostComments, AppBanner},
    layout: 'blog',
    async asyncData(context) {
        try {
            let post = await context.app.$axios.$get(`/blog.json?orderBy="slug"&equalTo="${context.params.slug}"`, {
                'Content-Type': 'application/json'
            })
                .then(res => {
                    let data = Object.entries(res).map(postDetails => {
                        return Object.assign({}, postDetails[1], {
                            id: postDetails[0]
                        })
                    })

                    return data[0]
                })

            // console.log(post)


            let comments = await context.app.$axios.$get(`/comments/${post.id}.json`)
                .then(res => {
                    // console.log(res)

                    if (res) {
                        return Object.entries(res).map(comment => {
                            return Object.assign({}, comment[1], {
                                id: comment[0]
                            })
                        })
                    } else {
                        return []
                    }


                })

            return {post, comments}
        } catch (error) {
            console.log(error)
        }
    },
    computed: {
        commentsCount () {
            return this.comments.length
        }
    },
    methods: {
        getNewComment (comment) {
            this.comments.push(comment)
        }
    }
}
</script>

<style lang="scss" scoped>
.post-details {
    //box-shadow: 0 8px 13px 2px #d2d2d2ab;
    margin-bottom: 2rem;

    .card {
        border: 0;
        border-radius: 0;

        .image-container {
            position: relative;

            img {
                object-fit: cover;
                width: 100%;
                //height: 100%;
                //max-height: 500px;
            }

        }

        .card-body {
            //padding-top: 2rem;
            padding-left: 0;
            padding-right: 0;

            .card-title {
                //font-weight: bold;
                font-family: textBoldFont, sans-serif;
                font-size: 1.4rem;
                text-decoration: none;
                line-height: 1.2;

                @media (max-width: 797px) {
                    font-size: 1.2rem;
                }
            }

            .card-text {
                margin-top: 1.1rem;
                color: var(--gray-text-color);

                @media (max-width: 767px) {
                    font-size: .9rem;
                }
            }

            .info {
                margin-top: 0;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .tags {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding-right: .5rem;

                    i {
                        display: inline-block;
                        margin-right: .4rem;
                        color: #666666;
                        font-size: .9rem;

                        @media (max-width: 767px) {
                            font-size: .8rem;
                        }
                    }

                    p {
                        margin-bottom: 0;

                        a {
                            text-transform: capitalize;
                            text-decoration: none;
                            font-size: .9rem;
                            color: #666666;
                            transition: all .2s ease-in-out;

                            &:hover {
                                color: var(--primary-color);
                            }

                            &:not(:first-of-type) {
                                margin-left: .2rem;
                            }

                            @media (max-width: 767px) {
                                font-size: .8rem;
                            }

                            span {
                                text-transform: capitalize;
                            }
                        }
                    }
                }

                .comments {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding-left: .5rem;

                    i {
                        display: inline-block;
                        margin-right: .4rem;
                        color: #666666;
                        font-size: .9rem;

                        @media (max-width: 767px) {
                            font-size: .8rem;
                        }
                    }

                    span {
                        color: #666666;
                        font-size: .9rem;
                        transition: all .2s ease-in-out;

                        &:hover {
                            color: var(--primary-color);
                            cursor: pointer;
                        }

                        @media (max-width: 767px) {
                            font-size: .8rem;
                        }
                    }

                }
            }
        }
    }

}
</style>
