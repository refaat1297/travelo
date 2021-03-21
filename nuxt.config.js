export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    // target: 'static',
    head: {
        title: 'travelo',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/preview.client.js',
        '~/plugins/firebase.js',
        '~/plugins/easy-slider.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: 'https://a-travelo-refaat-default-rtdb.firebaseio.com'
    },

    generate: {
        fallback: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
