<template>
    <div>
        <h1>blog</h1>

        <ol v-if="!!blog">
            <li v-for="post in blog" :key="post.id">
                <nuxt-link :to="`/dashboard/blog/${post.slug}/edit`">{{ post.title }}</nuxt-link>
                <button>delete</button>
            </li>
        </ol>

        <nuxt-link to="/dashboard/blog/new" class="btn btn-primary">add new</nuxt-link>
    </div>
</template>

<script>
export default {
    layout: 'dashboard',
    data () {
        return {
            blog: null
        }
    },
    async created () {
        this.blog = await this.$axios.$get('blog.json')
            .then(res => {
                return Object.entries(res).map(post => {
                    return Object.assign({}, post[1], {id: post[0]})
                })
            })
    },
}
</script>

<style scoped>

</style>
