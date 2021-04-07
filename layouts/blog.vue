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
                        <BlogSearchKeyword />
                        <BlogCategoriesList />
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
import BlogCategoriesList from "../components/site/blog/BlogCategoriesList";
import BlogSearchKeyword from "../components/site/blog/BlogSearchKeyword";

export default {
    components: {BlogSearchKeyword, BlogCategoriesList, BlogNewsLetter, AppBanner, AppNavbar, AppFooter}
}
</script>

<style scoped>
.blog {
    padding: 4rem 0;
}
</style>
