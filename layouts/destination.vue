<template>
    <div>
        <Nuxt/>
        <AppSubscribe />
        <AppFooter />
    </div>
</template>

<script>
import AppSubscribe from "../components/shared/AppSubscribe";
import AppFooter from "../components/shared/AppFooter";

export default {
    components: {AppFooter, AppSubscribe   }
}
</script>
