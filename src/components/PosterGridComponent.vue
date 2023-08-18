<template>
    <div class="poster-grid-container">
        <div class="poster-container" v-for="image in images" :key="image">
            <img v-bind:src="image" />
        </div>
    </div>
</template>

<script scope>
export default {
    name: "PosterGridComponent",
    data() {
        return {
            images: [
            /* images are being pulling from public folder */
            "images//posters/ElementalPoster.png",
            "images//posters/InsideOut2Poster.png",
            "images//posters/CenotePoster.png"
            ],
            timer: null,
            currentIndex: 0
        };
    }
};
</script>

<style scoped>
.poster-grid-container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(1em, 15em));
    grid-gap: 1em;
}

.poster-container {
    width: 100%;
    height: auto;
}

img {
    height: 100%;
    width: 100%;
}
</style>