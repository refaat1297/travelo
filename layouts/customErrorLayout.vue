<template>
    <div>
        <AppNavbar />
        <nuxt />
        <AppFooter />
    </div>
</template>

<script>
import AppNavbar from "../components/shared/AppNavbar";
import AppFooter from "../components/shared/AppFooter";
export default {
    name: "customErrorLayout",
    components: {AppFooter, AppNavbar}
}
</script>

<style scoped>

</style>
