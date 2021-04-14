<template>
    <section>

        <div class="posts">
            <div class="post-card" v-for="post in posts" :key="post.id">
                <div class="card">
                    <div class="image-container">
                        <img :src="post.image" class="card-img-top" alt="">
                        <div class="date">
                            <span>15</span>
                            <span>jan</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">
                            <nuxt-link :to="`/blog/${post.slug}`"> {{ post.title }}</nuxt-link>
                        </h3>
                        <p class="card-text">{{ post.shortDescription }}</p>
                        <div class="info">
                            <div class="tags">
                                <i class="fas fa-user"></i>
                                <p>
                                    <a href="javascript:;" v-for="(tag, i) in post.tags" :key="`tag-${i}`">
                                        <span v-if="i === (post.tags.length - 1)">{{ tag }}</span>
                                        <span v-else>{{ tag }},</span>
                                    </a>
                                </p>
                            </div> |
                            <div class="comments">
                                <i class="fas fa-comments"></i>
                                <span>{{ post.comments < 10 ? `0${post.comments}` : post.comments }} comments</span>
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
    components: {AppBanner},
    layout: 'blog',
    async asyncData (context) {
        let posts = await context.$axios.get('/blog.json')
            .then(res => {
                return Object
                    .entries(res.data)
                    .map(post => {
                        return Object.assign({}, post[1], {
                            comments: Object.keys(post[1].comments).length,
                            id: post[0]
                        })
                    })
            })

        return {posts}
    },
}
</script>

<style lang="scss">

.posts {
    .post-card {
        box-shadow: 0 8px 13px 2px #d2d2d2ab;
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

                .date {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-color: var(--primary-color);
                    color: #fff;
                    position: absolute;
                    bottom: -20px;
                    left: 30px;
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;

                    @media (max-width: 767px) {
                        width: 60px;
                        height: 60px;
                    }

                    span {
                        &:first-of-type {
                            font-weight: bold;
                            font-size: 1.5rem;

                            @media (max-width: 767px) {
                                font-size: 1.1rem;
                            }
                        }

                        &:last-of-type {
                            @media (max-width: 767px) {
                                font-size: .9rem;
                            }

                            &:first-letter {
                                text-transform: capitalize;
                            }
                        }
                    }

                }
            }

            .card-body {
                padding-top: 2.3rem;

                .card-title {
                    //font-weight: bold;
                    font-family: textBoldFont, sans-serif;
                    font-size: 1.4rem;
                    text-decoration: none;
                    line-height: 1.2;
                    transition: all .2s ease-in-out;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;


                    a {
                        text-decoration: none;
                        color: var(--dark-blue-color);
                        transition: all .2s ease-in-out;

                        &:hover {
                            color: var(--primary-color);
                        }
                    }

                    @media (max-width: 797px) {
                        font-size: 1.2rem;
                    }
                }

                .card-text {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-top: 1.1rem;
                    color: var(--gray-text-color);

                    @media (max-width: 767px) {
                        font-size: .9rem;
                    }
                }

                .info {
                    margin-top: 1.3rem;
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
}

</style>
