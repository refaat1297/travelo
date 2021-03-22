<template>
    <section class="about-uu">
        <AppBanner
            title="about us"
            description="Pixel Perfect Design With Awesome Content"
            :image="require(`assets/img/shared/slider/about-us.png`)"
        />
    </section>
</template>

<script>
import AppBanner from "../../components/shared/AppBanner";
export default {
    components: {AppBanner}
}
</script>

<style scoped>

</style>
