<template>
    <div>
        <AppNavbar />
        <Nuxt/>
        <AppSubscribe />
        <AppFooter />
    </div>
</template>

<script>
import AppSubscribe from "../components/shared/AppSubscribe";
import AppFooter from "../components/shared/AppFooter";
import AppNavbar from "../components/shared/AppNavbar";

export default {
    components: {AppNavbar, AppFooter, AppSubscribe   }
}
</script>
