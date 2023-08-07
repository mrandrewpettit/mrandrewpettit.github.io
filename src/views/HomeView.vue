<template>
  <div>
    <div v-bind:class="[widthFill ? 'section reel widthFill' : 'section reel heightFill']">
      <!-- This is for sure not the best way to do responsive video because it
        loads two videos at once but it's what I got working right now-->
      <video autoplay muted loop v-show="mobileVideo" class="highlightReel">
        <source src="../assets/video/HighlightReel/HighlightReel_Mobile.mp4" type="video/mp4">
      </video>
      <video autoplay muted loop v-show="desktopVideo" class="highlightReel">
        <source src="../assets/video/HighlightReel/HighlightReel_Desktop.mp4" type="video/mp4">
      </video>
      <router-link to="/reel" class="reelButton">VIEW DEMO REEL</router-link>
      <a class="arrow" href="#bio">&#11206;</a>
    </div>
    <div id="bio">
      <div class="HasMargin">
        <div class="margin"></div>
        <div class="content">
          <div class="about">
              <img src="../assets/image/Profile.jpg" />
              <div class="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet 
                  risus feugiat in ante metus dictum at.</p>
                <p> Elementum nibh tellus molestie nunc non. Cursus sit amet dictum 
                  sit amet.</p>
                <div class="laurels">
                  <img src="../assets/laurels/CTAWinnerLaurel.png" />
                  <img src="../assets/laurels/LAFilmFestivalLaurel.png" />
                </div>
              </div>
          </div>
          <div class="work">
            <CarouselComponent v-bind:class="[showCarousel ? 'show' : 'hide']"/>
            <GalleryComponent v-bind:class="[showCarousel ? 'hide' : 'show']"/>
          </div>
        </div>
        <div class="margin"></div>
      </div>
      <div class="employers">
        <img id="pixarLogo" src="../assets/logos/PixarLogo_black.svg" />
        <img src="../assets/logos/AngelStudiosLogo_black.svg" />
        <img src="../assets/logos/BYUTvLogo_black.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselComponent from "../components/CarouselComponent.vue"
import GalleryComponent from "../components/Gallery.vue"

export default {
  name: 'HomeView',
  components: {
    CarouselComponent,
    GalleryComponent
  },
  data() {
    return {
      mobileVideo: false,
      desktopVideo: false,
      widthFill: true,
      showCarousel: true
    }
  },
  methods: {
    queryVideo() {
      var windowWidth = window.innerWidth ? window.innerWidth : this.$attrs(window).width();
      if (windowWidth > 400) {
        this.mobileVideo = false;
        this.desktopVideo = true;
      } else {
        this.mobileVideo = true;
        this.desktopVideo = false;
      }
    },
    queryFill() {
      var windowWidth = window.innerWidth ? window.innerWidth : this.$attrs(window).width();
      var windowHeight = window.innerHeight ? window.innerHeight : this.$attrs(window).height();
      var videoWidth = 1920;
      var videoHeight = 1080;

      var windowAspect = windowWidth / windowHeight;
      var videoAspect = videoWidth / videoHeight;

      if (windowAspect > videoAspect) {
        this.widthFill = true;
      } else {
        this.widthFill = false;
      }
    },
    myEventHandler() {
      this.queryVideo();
      this.queryFill();
    },
    queryPosters() {
      var windowWidth = window.innerWidth ? window.innerWidth : this.$attrs(window).width();
      if (windowWidth > 400) {
        this.showCarousel = false;
      } else {
        this.showCarousel = true;
      }
    }
  },
  mounted() {
    this.queryVideo();
    this.queryFill();
    this.queryPosters();
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.meEventHandler);
  }
}
</script>

<style scoped>
.section {
  display: flex;

  height: 100vh;
  width: 100%;
}

.reel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reelButton {
  position: absolute;
  top: 80vh;

  padding: 1em;

  text-align: center;
  font-weight: bold;
  color: rgb(58, 58, 58);

  opacity: 70%;

  text-decoration: none;
  background-color: rgb(201, 201, 201);
  backdrop-filter: blur(0.15em) brightness(0.8);

  border-radius: 0.5em;
}

.reelButton:hover {
  opacity: 100%;
  background-color: white;
}

.arrow {
  position: absolute;
  top: 85vh;

  font-size: 10vh;

  text-decoration: none;
  color: white;
  opacity: 50%;
}

.arrow:hover {
  opacity: 100%;
}

#bio {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.HasMargin {
  display: flex;
}

.work .hide {
  display: none;
}

#pixarLogo {
  max-width: 100%;
}

.heightFill {
  overflow-x: hidden;
}

.heightFill .highlightReel {
  height: 100%;
}

.widthFill {
  overflow-y: hidden;
}

.widthFill .highlightReel {
  width: 100%;
  z-index: 0;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .content {
    width: 80vw;
  }

  .margin {
    height: 100%;
    width: 10vw;
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 0;
  }

  .about img {
    max-width: 100%;
  }

  .about .description p {
    padding: 1em 0;
  }

  .laurels {
    display: flex;
    justify-content: space-around;
  }

  .laurels img{
    max-width: 40%;
  }

  .work {
    height: 35em;
  }

  .employers {
    position: relative;
    height: 10em;
    width: 100vw;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .content {
    width: 70vw;
  }

  .margin {
    height: 100%;
    width: 15vw;
  }

  .about {
    display: flex;
    justify-content: space-between;
    padding: 2em 0;
  }

  .about img {
    max-height: 20em;
  }

  .about .description {
    padding-left: 1em;
  }

  .about .description p {
    padding: 1em 0;
  }

  .laurels {
    display: flex;
    justify-content: space-around;
  }

  .laurels img{
    max-width: 40%;
  }

  .work {
    height: 21em;
    padding:2em 0em;
  }

  .employers {
    height: 5em;
    width: 100vw;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }

  .employers img {
    max-height: 50%;
    padding: 0em 2.5em;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .content {
    width: 65vw;
  }

  .margin {
    height: 100%;
    width: 17.5vw;
  }

  .main {
    display: flex;
    justify-content: space-between;
    height: 80%;
  }

  .about {
    display: flex;
    justify-content: space-between;
    padding: 2em 0;
  }

  .about img {
    max-height: 20em;
  }

  .about .description {
    padding-left: 1em;
  }

  .about .description p {
    padding: 1em 0;
  }

  .laurels {
    display: flex;
    justify-content: space-around;
  }

  .laurels img{
    max-width: 30%;
  }

  .work {
    height: 35em;
    padding: 2em;
  }

  .employers {
    height: 7em;
    width: 100vw;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }

  .employers img {
    max-height: 50%;
    padding: 0em 3.5em;
  }
}
</style>
