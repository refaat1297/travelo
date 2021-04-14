<template>
    <div class="leave-comment">
        <h3>leave a replay</h3>

        <form @submit.prevent="addNewComment">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="your name.."
                            v-model.trim="$v.form.name.$model">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-control"
                            placeholder="your email.."
                            v-model.trim="$v.form.email.$model">
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            placeholder="your comment.."
                            rows="5"
                            v-model.trim="$v.form.comment.$model"></textarea>
                    </div>
                </div>
            </div>
            <button>
                <b-spinner
                    v-if="loading"
                    variant="white"
                    style="width: 1.1rem; height: 1.1rem;"
                ></b-spinner>
                <span>comment</span>
            </button>
        </form>
    </div>
</template>

<script>
import { required, minLength, email, maxLength } from 'vuelidate/lib/validators'


export default {
    name: "BlogCommentForm",
    props: {
        postID: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            form: {
                name: '',
                email: '',
                comment: ''
            },
            submitStatus: null,
            loading: false
        }
    },
    validations: {
       form: {
           name: {
               required,
               minLength: minLength(4)
           },
           email: {
               required,
               email
           },
           comment: {
               required,
               minLength: minLength(6),
               maxLength: maxLength(160)
           }
       }
    },
    methods: {
        async addNewComment () {
            this.$v.$touch()

            if (this.$v.$invalid) {
                // this.submitStatus = 'ERROR'

                let errorMsg = []

                if (this.$v.form.name.$invalid) {
                    errorMsg.push(`name must be greater than ${this.$v.form.name.$params.minLength.min} characters`)
                } else if (this.$v.form.email.$invalid) {
                    errorMsg.push(`email is required and must be valid`)
                } else if (this.$v.form.comment.$invalid) {
                    errorMsg.push(`comment must be between ${this.$v.form.comment.$params.minLength.min} and ${this.$v.form.comment.$params.maxLength.max} characters`)
                }

                for (let msg of errorMsg) {
                    this.$notify({
                        message: msg,
                        type: "error",
                        top: true,
                        bottom: false,
                        left: false,
                        right: true,
                        showClose: false,
                        closeDelay: 4500
                    })
                }

            } else {
                this.loading = true

                let id = (await this.$axios.post(`/comments/${this.postID}.json`, this.form)).data.name
                await this.$axios.put(`/blog/${this.postID}/comments.json`, {[id]: true})

                this.$emit('getNewComment', this.form)

                this.form = {
                    name: '',
                    email: '',
                    comment: ''
                }

                this.loading = false

                this.$notify({
                    message: 'comment added successfully..',
                    type: "success",
                    top: true,
                    bottom: false,
                    left: false,
                    right: true,
                    showClose: false,
                    closeDelay: 4500
                })

            }
        }
    }
}
</script>

<style lang="scss" scoped>
.leave-comment {
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

    form {
        display: block;
        margin-top: 1rem;

        .form-group {

            input {
                height: 45px;
            }

            .form-control {
                background-color: #fff;
                color: var(--gray-text-color);
                font-size: .8rem;
                border-radius: 0;
                border: 1px solid rgba(#7a838b, .3);

                &:focus {
                    border: 1px solid rgba(#7a838b, .3);
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
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            text-align: center;
            background-color: var(--secondary-color);
            color: #fff;
            border: 0;
            outline: none;
            padding: .6rem 0;
            text-transform: capitalize;
            font-size: .9rem;
            transition: all .2s ease-in-out;
            margin-top: 1rem;

            span {
                &:first-of-type {
                    margin-right: .4rem;
                }
            }

            &:hover {
                background-color: var(--primary-color);
            }

            @media (max-width: 767px) {
                font-size: .8rem;
                width: 110px;
            }
        }
    }
}
</style>
