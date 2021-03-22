<template>
    <div>
        <Nuxt/>
        <AppEnjoyVideo />
        <AppAdvantages />
        <AppRecentTrips />
        <AppFooter />
    </div>
</template>

<script>
import AppRecentTrips from "../components/shared/AppRecentTrips";
import AppEnjoyVideo from "../components/shared/AppEnjoyVideo";
import AppAdvantages from "../components/shared/AppAdvantages";
import AppFooter from "../components/shared/AppFooter";
export default {
    components: {AppFooter, AppAdvantages, AppEnjoyVideo, AppRecentTrips}
}
</script>
