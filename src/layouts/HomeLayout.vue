<template>
    <div class="page">
        <HeaderComponent />
        <slot />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"

export default {
    name: "HomeLayout",
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>