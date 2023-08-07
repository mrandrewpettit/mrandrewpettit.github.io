<template>
    <div class="galleryContainer">
        <router-link class="poster" to="/"><img src="../assets/posters/ElementalPoster.png" /></router-link>
        <router-link class="poster" to="/"><img src="../assets/posters/InsideOut2Poster.png" /></router-link>
        <router-link class="poster" to="/"><img src="../assets/posters/CenotePoster.png" /></router-link>
    </div>
</template>

<script>
export default {
    name: "GalleryComponent"
}
</script>

<style scoped>
    .galleryContainer {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
    }

    .poster {
        height: 100%;
    }

    img {
        height: 100%;
    }
</style>