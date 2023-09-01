<template>
    <div class="auto-slider">
        <transition-group class="slider-container" name="fade" tag="div"> <!--couldn't get name="fade" wokring without popping-->
            <div class="image-container" v-for="i in [currentIndex]" :key="i">
                <img :src="currentImg" />
            </div>
        </transition-group>
    </div>
</template>

<script scope>
export default {
    name: "AutoSlideshowComponent",
    data() {
        return {
            images: [
            /* images are being pulling from public folder */
            "images/homeAutoSlider/Fire_2.png",
            "images/homeAutoSlider/water_1.png",
			"images/homeAutoSlider/Fire_1.png",
			"images/homeAutoSlider/AirStadium_1.png"
            ],
            timer: null,
            currentIndex: 0
        };
    },
    mounted: function() {
        this.startSlide();
    },
    methods: {
        startSlide: function() {
            this.timer = setInterval(this.next, 4000);
        },
        next: function() {
            this.currentIndex += 1;
        }
    },
    computed: {
        currentImg: function() {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    }
};
</script>

<style scoped>
/* slider */
.auto-slider {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.slider-container {
    width: 100%;
    height: 100%;
}

.image-container {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.auto-slider img {
    height: 100%;
}

/* animation */

.fade-enter-active,
.fade-leave-active {
    opacity: 1;
    transition: all 0.9s ease;
}

.fade-enter-active {
    position: relative;
    top: -100%;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>