<template>
    <div class="new-blog">
        <AppBanner
            title="new blog"
            :image="require(`~/assets/img/shared/new-destination-banner.jpeg`)"
        />
        <section class="add-new-form">
            <div class="container">
                <form @submit.prevent="newPostHandler">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="title.." v-model="form.title">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="short description.." v-model="form.shortDescription">
                    </div>

                    <div class="form-group">
                        <input
                            ref="imageFile"
                            type="file"
                            class="form-control"
                            id="image"
                            accept="image/*"
                            @change="onImageFileSelected">
                        <label for="image">
                            <img src="~assets/img/input-file/image-input-file.svg" alt="">
                            <h5>image</h5>
                            <p v-if="preview.image.name" class="img-name">{{ preview.image.name }}</p>
                            <p v-else>click to browse</p>

                            <div v-if="preview.image.url" class="img-preview">
                                <img :src="preview.image.url" class="img-fluid" alt="">
                            </div>
                        </label>
                    </div>

                    <div class="form-group">
                        <client-only>
                            <vue-tags-input
                                placeholder="Press ENTER to add new tag.."
                                v-model="form.tag"
                                :tags="form.tags"
                                @tags-changed="newTags => form.tags = newTags"
                            ></vue-tags-input>
                        </client-only>
                    </div>

                    <div
                        class="form-group"
                        v-for="(item,index) in form.content"
                        :key="`description-${index}`">
                    <textarea
                        class="form-control"
                        v-model="item.description"
                        :placeholder="`description number ${index + 1}`" rows="5"></textarea>

                        <div class="actions">
                            <span
                                class="remove"
                                @click="removeContent(index)"
                                v-show="index || ( !index && form.content.length > 1)">
                                <i class="fas fa-minus"></i>
                            </span>
                            <span
                                class="add"
                                @click="addContent(index)"
                                v-show="index == form.content.length-1">
                                <i class="fas fa-plus"></i>
                            </span>
                        </div>
                    </div>

                    <button type="submit" :disabled="loading">
                        <b-spinner
                            v-if="loading"
                            variant="white"
                            style="width: 1.1rem; height: 1.1rem;"
                        ></b-spinner>
                        <span v-else>save</span>
                    </button>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import slugify from 'slugify'
import {storageDB} from '@/plugins/firebase'
import AppBanner from "../../../components/shared/AppBanner";


export default {
    components: {AppBanner},
    layout: 'dashboard',
    data() {
        return {
            loading: false,
            form: {
                title: '',
                shortDescription: '',
                content: [{description: ''}],
                tag: '',
                tags: [],
            },
            preview: {
                image: {
                    name: null,
                    url: null
                }
            },
            files: {
                image: null,
            },
        }
    },
    computed: {
        slug() {
            return slugify(this.form.title, {
                replacement: '-',
                remove: /[$*_+~.()'"!\-:@]/g,
                lower: true,
            })
        }
    },
    methods: {
        addContent(index) {
            this.form.content.push({description: ''})
        },
        removeContent(index) {
            this.form.content.splice(index, 1);
        },
        onImageFileSelected(event) {
            this.files.image = event.target.files[0]
            this.preview.image.name = event.target.files[0].name

            if (event.target.files[0]) {
                const reader = new FileReader()
                reader.addEventListener("load", () => {
                    this.preview.image.url = reader.result
                })
                reader.readAsDataURL(event.target.files[0])
            }
        },
        async newPostHandler() {

            this.loading = true

            const storageImageRef = await storageDB.ref(`destinations/${this.files.image.name}`)
            await storageImageRef.put(this.files.image)
            const imageURL = await storageImageRef.getDownloadURL()

            let tags = this.form.tags.map(tag => tag.text),
                content = this.form.content.map(item => item.description)

            let formData = {
                title: this.form.title,
                slug: this.slug,
                shortDescription: this.form.shortDescription,
                content,
                tags,
                addedOn: Date.now(),
                comments: 3,
                image: imageURL
            }

            console.log(formData)

            await this.$axios.$post('/blog.json', formData)
                .then(res => {
                    this.$router.push('/dashboard/blog')
                    this.loading = false
                })
        }
    }

}
</script>

<style lang="scss">
.new-blog{
    .add-new-form {
        form {
            display: block;
            padding: 3rem 0;
            border-top: 1px solid #E4E6E8;

            h3 {
                font-weight: 600;
                font-size: 1.3rem;
                margin-bottom: 2rem;
                text-transform: capitalize;

                @media (max-width: 767px) {
                    font-size: 1.2rem;
                }
            }

            .form-group {
                margin-bottom: 0;

                .vue-tags-input {
                    display: block;
                    width: 100%;
                    max-width: 100%;
                    border-radius: 5px;
                    border: 0;
                    //background-color: var(--light-gray-color);
                    background-color: #F4F4F4;
                    height: 50px;
                    margin-bottom: 1.4rem;

                    .ti-input {
                        border: none;
                        border-radius: 5px;
                        height: 100%;

                        input {
                            display: block;
                            height: 100%;
                            background-color: #F4F4F4;

                            &::placeholder {
                                text-transform: capitalize;
                                font-weight: 200;
                                font-size: .8rem;

                                @media (max-width: 767px) {
                                    font-size: .8rem;
                                }
                            }
                        }
                    }

                }

                .form-control {
                    display: block;
                    width: 100%;
                    border-radius: 5px;
                    border: 0;
                    //background-color: var(--light-gray-color);
                    background-color: #F4F4F4;
                    margin-bottom: 1.4rem;

                    &[type=text] {
                        height: 50px;
                    }

                    &[type=file] {
                        display: none;

                        & + label {
                            margin-bottom: 1.4rem;
                            cursor: pointer;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            text-align: center;
                            text-transform: capitalize;
                            padding: 1rem;
                            width: 100%;
                            border: 1px dashed var(--gray-text-color);
                            border-radius: .4rem;

                            img {
                                width: 120px;
                                display: block;
                                margin-bottom: .4rem;
                            }

                            h5 {
                                font-weight: 600;
                                font-size: 1rem;
                            }

                            p {
                                font-size: .8rem;
                                margin-bottom: 0;

                                &.img-name {
                                    text-transform: lowercase !important;
                                }

                            }
                        }
                    }


                    &::placeholder {
                        text-transform: capitalize;
                        font-weight: 200;
                        font-size: .8rem;

                        @media (max-width: 767px) {
                            font-size: .8rem;
                        }
                    }

                    &:focus {
                        border: 0;
                        box-shadow: 0 0 0 transparent;
                    }
                }

                .actions {
                    margin-bottom: 1.2rem;

                    span {
                        color: #fff;
                        cursor: pointer;
                        display: inline-grid;
                        place-items: center;
                        margin-right: .4rem;
                        width: 25px;
                        height: 25px;
                        border-radius: 7px;
                        text-align: center;

                        &.remove {
                            background-color: var(--primary-color);
                        }

                        &.add {
                            background-color: var(--secondary-color);
                        }


                        i {
                            font-size: .8rem;
                        }
                    }
                }

                .img-preview {
                    margin-top: 1.2rem;
                    width: 100%;
                    height: 100%;
                    display: grid;
                    place-items: center;


                    img {
                        max-width: 200px;
                        width: 100%;
                        object-fit: contain;
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

                &:disabled {
                    cursor: not-allowed;
                }

                &:hover {
                    background-color: var(--secondary-color);
                    border-color: var(--secondary-color);
                }

            }
        }
    }
}
</style>

