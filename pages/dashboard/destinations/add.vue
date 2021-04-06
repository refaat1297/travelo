<template>
    <div class="new-destination">
        <AppBanner
            title="new destination"
            :image="require(`~/assets/img/shared/new-destination-banner.jpeg`)"
        />
        <div class="add-new-form">
            <div class="container">
                <form @submit.prevent="onSubmit()">
                    <div class="row">
                        <div class="col-lg-7">
                            <h3>destination info</h3>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="name.."
                                            id="name"
                                            v-model="form.name">
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="slug.."
                                            disabled
                                            id="slug"
                                            :value="slug">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="short description.."
                                    id="shortDescription"
                                    v-model="form.shortDescription">
                            </div>

                            <h3>destination description</h3>

                            <div class="form-group" v-for="(description,index) in form.description"
                                 :key="`description-${index}`">
                                <input type="text" class="form-control" v-model="description.content"
                                       :placeholder="`description number ${index + 1}`">
                                <div class="actions">
                                    <span class="remove" @click="removeDescription(index)"
                                          v-show="index || ( !index && form.description.length > 1)">
                                        <i class="fas fa-minus"></i>
                                    </span>
                                    <span class="add" @click="addDescription(index)"
                                          v-show="index == form.description.length-1">
                                        <i class="fas fa-plus"></i>
                                    </span>
                                </div>
                            </div>

                            <h3>destination days details</h3>

                            <div class="form-group" v-for="(dayDetails,index) in form.daysDetails"
                                 :key="`daysDetails-${index}`">
                                <input type="text" class="form-control" v-model="dayDetails.content"
                                       :placeholder="`day number ${index + 1}`">
                                <div class="actions">
                                    <span class="remove" @click="removeDayDetails(index)"
                                          v-show="index || ( !index && form.daysDetails.length > 1)">
                                        <i class="fas fa-minus"></i>
                                    </span>
                                    <span class="add" @click="addDayDetails(index)"
                                       v-show="index == form.daysDetails.length-1">
                                        <i class="fas fa-plus"></i>
                                    </span>
                                </div>
                            </div>


                        </div>
                        <div class="col-lg-5">
                            <h3>destination details</h3>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="country.."
                                            id="country"
                                            v-model="form.country">
                                    </div>

                                    <div class="col-12 col-md-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="price"
                                            id="price"
                                            v-model.number="form.price">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-md-4">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="days.."
                                            id="days"
                                            v-model.number="form.days">
                                    </div>

                                    <div class="col-12 col-md-4">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="reviews.."
                                            id="reviews"
                                            v-model.number="form.reviews">
                                    </div>

                                    <div class="col-12 col-md-4">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="rate"
                                            id="rate"
                                            v-model.number="form.rate">
                                    </div>
                                </div>
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

<!--                                <button @click.prevent="onResetHandler()">reset</button>-->

                            </div>

                            <div class="form-group">
                                <input
                                    accept="image/*"
                                    type="file"
                                    class="form-control"
                                    id="banner"
                                    @change="onBannerFileSelected">
                                <label for="banner">
                                    <img src="~assets/img/input-file/banner-input-file.svg" alt="">
                                    <h5>banner</h5>
                                    <p v-if="preview.banner.name" class="img-name">{{ preview.banner.name }}</p>
                                    <p v-else>click to browse</p>

                                    <div v-if="preview.banner.url" class="img-preview">
                                        <img :src="preview.banner.url" class="img-fluid" alt="">
                                    </div>
                                </label>


                            </div>
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
        </div>
    </div>
</template>

<script>
import {storageDB} from '@/plugins/firebase'
import AppBanner from "../../../components/shared/AppBanner";
import slugify from 'slugify'


export default {
    layout: 'dashboard',
    components: {
        AppBanner,
    },
    data() {
        return {
            submitStatus: null,
            form: {
                name: '',
                slug: '',
                shortDescription: '',
                reviews: null,
                rate: null,
                price: null,
                isPopular: true,
                description: [
                    {content: ''},
                ],
                daysDetails: [
                    {content: ''}
                ],
                days: null,
                country: ''
            },
            files: {
                image: null,
                banner: null
            },
            loading: false,
            preview: {
                image: {
                    name: null,
                    url: null
                },
                banner: {
                    name: null,
                    url: null
                }
            },
        }
    },
    computed: {
        slug() {
            return slugify(this.form.name, {
                replacement: '-',
                remove: /[$*_+~.()'"!\-:@]/g,
                lower: true,
            })
        }
    },
    methods: {
        onResetHandler () {
            this.$refs.imageFile.value = null
            this.preview.image.name = null
            this.preview.image.url = null
            console.log(this.$refs.imageFile.value)
        },
        addDescription(index) {
            this.form.description.push({content: ''})
        },
        removeDescription(index) {
            this.form.description.splice(index, 1);
        },
        addDayDetails(index) {
            this.form.daysDetails.push({content: ''})
        },
        removeDayDetails(index) {
            this.form.daysDetails.splice(index, 1);
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
        onBannerFileSelected(event) {
            this.files.banner = event.target.files[0]
            this.preview.banner.name = event.target.files[0].name

            if (event.target.files[0]) {
                const reader = new FileReader()

                reader.addEventListener("load", () => {
                    this.preview.banner.url = reader.result
                })

                reader.readAsDataURL(event.target.files[0])
            }
        },
        async onSubmit() {

            this.loading = true

            const storageImageRef = await storageDB.ref(`destinations/${this.files.image.name}`)
            await storageImageRef.put(this.files.image)
            const imageURL = await storageImageRef.getDownloadURL()


            const storageBannerRef = await storageDB.ref(`banners/${this.files.banner.name}`)
            await storageBannerRef.put(this.files.banner)
            const bannerURL = await storageBannerRef.getDownloadURL()

            // this.$refs.imgDropzone.removeFile()

            let description = this.form.description.map(item => {
                return item.content
            })

            let daysDetails = this.form.daysDetails.map(item => {
                return item.content
            })


            const formData = {
                ...this.form,
                description,
                daysDetails,
                slug: this.slug,
                image: imageURL,
                banner: bannerURL
            }


            await this.$axios.$post('/destinations.json', formData)
                .then(res => {
                    this.$router.push('/dashboard/destinations')
                    this.loading = false
                })
        },
    }
}
</script>

<style lang="scss" scoped>
.new-destination {
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
