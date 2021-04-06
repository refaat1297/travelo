<template>
    <main>
        <AppNavbar />
        <AppBanner
            :title="$route.name === 'blog' ? 'blog' : 'single blog'"
            description="Pixel Perfect Design With Awesome Contents"
            :image="require(`assets/img/shared/slider/contact-banner.png`)"
        />
        <section class="blog">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <Nuxt/>
                    </div>
                    <div class="col-lg-4">
                        <BlogNewsLetter />
                    </div>
                </div>
            </div>
        </section>
        <AppFooter />
    </main>
</template>

<script>
import AppNavbar from "../components/shared/AppNavbar";
import AppFooter from "../components/shared/AppFooter";
import AppBanner from "../components/shared/AppBanner";
import BlogNewsLetter from "../components/site/blog/BlogNewsLetter";

export default {
    components: {BlogNewsLetter, AppBanner, AppNavbar, AppFooter}
}
</script>

<style scoped>
.blog {
    padding: 4rem 0;
}
</style>
