<template>
    <section class="admin-destinations">
        <div class="container">
            <nuxt-link class="btn btn-primary" to="/dashboard/destinations/add">new destination</nuxt-link>

            <div class="table-responsive" v-if="destinations">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">name</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dest in destinations" :key="dest.id">
                            <th scope="row">{{ dest.id }}</th>
                            <td>{{ dest.name }}</td>
                            <td>
                                <button class="btn btn-primary">edit</button>
                                <button class="btn btn-danger" @click="deleteDestination(dest.id)">delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    layout: 'dashboard',
    data() {
        return {
            destinations: null,
        }
    },
    async mounted() {
        await this.$axios.$get('/destinations.json')
            .then(res => {
                const destinations = Object.entries(res).map(dest => {
                    return Object.assign({}, dest[1], {
                        id: dest[0]
                    })
                })

                this.destinations = destinations
            })
    },
    methods: {
        async deleteDestination (id) {
            this.loading = true
            await this.$axios.$delete(`/destinations/${id}.json`)
                .then(() => {
                    this.destinations = this.destinations.filter(dest => dest.id !== id)
                })
        }
    }
}
</script>

<style scoped>

</style>
