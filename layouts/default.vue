<template>
    <div>
        <AppNavbar />
        <Nuxt/>
        <AppEnjoyVideo />
        <AppAdvantages />
        <AppTestimonials />
        <AppRecentTrips />
        <AppFooter />
    </div>
</template>

<script>
import AppRecentTrips from "../components/shared/AppRecentTrips";
import AppEnjoyVideo from "../components/shared/AppEnjoyVideo";
import AppAdvantages from "../components/shared/AppAdvantages";
import AppFooter from "../components/shared/AppFooter";
import AppNavbar from "../components/shared/AppNavbar";
import AppTestimonials from "../components/shared/AppTestimonials";
export default {
    components: {AppTestimonials, AppNavbar, AppFooter, AppAdvantages, AppEnjoyVideo, AppRecentTrips}
}
</script>
