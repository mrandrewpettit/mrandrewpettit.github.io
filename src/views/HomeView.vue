<template>
  <div>
    <div class="section reel">
      <video autoplay muted loop class="highlightReel">
        <source src="../assets/video/temp/HighlightTemp_mobile.mp4" type="video/mp4">
      </video>
      <a class="arrow" href="#bio">&#11206;</a>
    </div>
    <div id="bio">
      <div class="margin"></div>
      <div class="content">
        <div class="about">
          <img src="../assets/TMP/TMPProfile.jpg" />
          <div class="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet 
              risus feugiat in ante metus dictum at.</p>
            <p> Elementum nibh tellus molestie nunc non. Cursus sit amet dictum 
              sit amet.</p>
          </div>
          <div class="laurels">
            <img src="../assets/laurels/CTAWinnerLaurel.png" />
            <img src="../assets/laurels/LAFilmFestivalLaurel.png" />
          </div>
        </div>
        <div class="work">
          <CarouselComponent />
        </div>
        <div class="employers">
          <img id="pixarLogo" src="../assets/logos/PixarLogo_black.svg" />
          <img src="../assets/logos/AngelStudiosLogo_black.svg" />
          <img src="../assets/logos/BYUTvLogo_black.svg" />
        </div>
      </div>
      <div class="margin"></div>
    </div>
  </div>
</template>

<script>
import CarouselComponent from "../components/CarouselComponent.vue"

export default {
  name: 'HomeView',
  components: {
    CarouselComponent,
  }
}
</script>

<style>
.section {
  display: flex;

  height: 100vh;
  width: 100vw;
}

.margin {
  height: 100vh;
  width: 10vw;
}

.content {
  width: 80vw;
}

.reel {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}

.highlightReel {
  height: 100%;
}

.arrow {
  position: absolute;
  top: 85vh;
  left: auto;

  font-size: 5em;

  text-decoration: none;
  color: white;
  opacity: 75%;
}

.arrow:hover {
  opacity: 100%;
}

.arrow:active {
  color: gray;
}

#bio {
  display: flex;

  height: 150vh;
  width: 100vw;
}

.margin {
  height: 100%;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45%;
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
  height: 42.5%;
  padding: 1em;
}

.employers {
  position: relative;
  left: -10vw;
  height: 12.5%;
  width: 100vw;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.employers img {
  max-height: 30%;
  margin: 0.75em 1em;
}

#pixarLogo {
  max-width: 100%;
}

</style>
