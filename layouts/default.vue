<template>
    <div>
        <Nuxt/>
        <AppEnjoyVideo />
        <AppRecentTrips />
    </div>
</template>

<script>
import AppRecentTrips from "../components/shared/AppRecentTrips";
import AppEnjoyVideo from "../components/shared/AppEnjoyVideo";
export default {
    components: {AppEnjoyVideo, AppRecentTrips}
}
</script>
