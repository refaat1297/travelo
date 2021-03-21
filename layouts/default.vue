<template>
    <div>
        <Nuxt/>
        <AppEnjoyVideo />
        <AppAdvantages />
        <AppRecentTrips />
    </div>
</template>

<script>
import AppRecentTrips from "../components/shared/AppRecentTrips";
import AppEnjoyVideo from "../components/shared/AppEnjoyVideo";
import AppAdvantages from "../components/shared/AppAdvantages";
export default {
    components: {AppAdvantages, AppEnjoyVideo, AppRecentTrips}
}
</script>
