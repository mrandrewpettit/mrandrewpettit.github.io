<template>
    <div class="carouselContainer">
        <div class="slideContainer" >
            <router-link class="slide" to="/"><img src="images//posters/ElementalPoster.png" /></router-link>
            <router-link class="slide" to="/"><img src="images//posters/InsideOut2Poster.png" /></router-link>
            <router-link class="slide" to="/"><img src="images//posters/CenotePoster.png" /></router-link>
        </div>
        <div class="buttonContainer">
            <div class="button" v-on:click="plusSlide(-1)">&#10094;</div>
            <div class="indicator-container">
                <div class="indicator" v-on:click="currSlide(1)" />
                <div class="indicator" v-on:click="currSlide(2)" />
                <div class="indicator" v-on:click="currSlide(3)" />
            </div>
            <div class="button" v-on:click="plusSlide(+1)">&#10095;</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CarouselComponent",
    data() {
        return {
            slideIndex: 1,
            slides: document.getElementsByClassName("slide"),
            indicators: document.getElementsByClassName("indicator"),
            autoTimeout: null
        }
    },
    methods: {
        showSlide(n) {
            if (n > this.slides.length) {
                this.slideIndex = 1;
            }
            if (n < 1) {
                this.slideIndex = this.slides.length;
            }
            for (var i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = "none";
                this.indicators[i].style.background = "none";
            }
            this.slides[this.slideIndex - 1].style.display = "block";
            this.indicators[this.slideIndex - 1].style.background = "#313539";
        },
        plusSlide(n) {
            this.showSlide(this.slideIndex += n);
            clearTimeout(this.autoTimeout);
            this.autoTimeout = setTimeout(this.autoSlide, 5000);
        },
        currSlide(n) {
            this.showSlide(this.slideIndex = n);
            clearTimeout(this.autoTimeout);
            this.autoTimeout = setTimeout(this.autoSlide, 5000);
        },
        autoSlide(initial) {
            if (initial != true) {
                this.slideIndex++;
            }
            this.showSlide(this.slideIndex);
            this.autoTimeout = setTimeout(this.autoSlide, 5000);
        }
    },
    mounted() {
        this.autoSlide(true);
    },
    destroyed() {
        clearTimeout(this.autoTimeout);
    }
}
</script>

<style scoped>
.carouselContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    height: 100%;
    width: 100%;
}

.slideContainer {
    display: flex;
    justify-content: center;
    height: 100%;
}

.slide:hover {
    filter: brightness(85%);
}

.slide img {
    max-height: 100%;
    max-width: 100%
}

.buttonContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    width: 15em;
    margin-top: 0.5em;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 10%;

    color: #313539;

    font-size: 2em;
}

.button:hover {
    color: gray;
}

.indicator-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 33.3333%;
}

.indicator {
    height: 1em;
    width: 1em;
    padding: 0.3em;
    border: 0.15em solid #313539;
    border-radius: 0.6em;
    
    cursor: pointer;
}

.indicator:hover {
    border: 0.2em solid gray;
}
</style>