<template>
	<div>
		<HeaderComponent/>
		<div class="home">
			<div class="header-proxy"></div>
			<div class="home-container">
				<div class="auto-slider-container"><AutoSliderComponent/></div>
				<div class="title-card-container">
					<div class="txt-container">
						<div id="name">
							<h1>ANDREW</h1>
							<h1>PETTIT</h1>
						</div>
						<div id="motto">
							<h3><span class="accent-txt">Creative</span> Collaborator</h3>
							<h3>Passionate <span class="accent-txt">Problem Solver</span></h3>
						</div>
					</div>
					<div class="btn-container">
						<router-link to="/reel" class="btn"><b>VIEW DEMO REEL</b></router-link>
						<a class="btn" href="#about-me-anchor"><b>ABOUT ME</b></a>
					</div>
				</div>
			</div>
			<div id="about-me-anchor"></div>
			<div class="about-me-container">
				<h1 class="heading"><b>ABOUT ME</b></h1>
				<div class="context">
					<img src="../assets/images/profile.png" >
					<div class="txt-container">
						<p>I solve problems. Through team collaboration, I use 
							design and software to solve visual problems.</p>
						<p>I received my B.F.A. in animation with a focus in computer 
							science from Brigham Young University. Since then, I have 
							worked in many aspects of production, from modeling to 
							pipeline; but am primarily skilled in look development, 
							and scripting.</p>
						<p>I have worked for Angel Studios and Pixar Animation Studios, 
							where I primarily developed digital tools to increase 
							artist productivity and collaborated on unique looks for 
							characters; all while supporting lighting, CFX, and 
							modeling departments with their own visual problems.</p>
						<p>I am continuously searching for new and innovative ways to 
							solve problems.</p>
					</div>
				</div>
			</div>
			<h1 class="heading"><b>NOTABLE PROJECTS</b></h1>
			<div class="poster-container"><component v-bind:is="currentPosterComponent" /></div>
			<div class="client-container">
				<div class="logo-container"><div class="logo-mask" id="pixar-logo"></div></div>
				<div class="logo-container"><div class="logo-mask" id="angel-logo"></div></div>
				<div class="logo-container"><div class="logo-mask" id="byu-tv-logo"></div></div>
			</div>
	</div>
	<FooterComponent/>
   </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import AutoSliderComponent from "../components/AutoSliderComponent"
import CarouselComponent from "../components/CarouselComponent.vue"
import PosterGridComponent from "../components/PosterGridComponent.vue"

export default {
    name: 'HomeView',
    components: {
        AutoSliderComponent,
        CarouselComponent,
        PosterGridComponent,
		HeaderComponent,
		FooterComponent
    },
    data () {
        return {
            currentPosterComponent: PosterGridComponent
        }
    },
    methods: {
        GetPosterComponent() {
            let isMobile = window.matchMedia("(max-width: 599px)");

            if (isMobile.matches) {
                this.currentPosterComponent = CarouselComponent;
            }
        },
        TogglePosterComponent() {
            let monitorWidth = window.matchMedia("(max-width: 600px)");

            if (monitorWidth.matches) {
                this.currentPosterComponent = CarouselComponent;
            } else {
                this.currentPosterComponent = PosterGridComponent;
            }
        }
    },
    created() {
        this.GetPosterComponent();
        window.addEventListener("resize", this.TogglePosterComponent);
    },
    destroyed() {
        window.addEventListener("resize", this.TogglePosterComponent);
    }
}
</script>

<style scoped>
/* utilities */

.header-proxy {
    height: 4em;
}

.btn {
    display: block;
    height: 3em;
    width: 65%;
    border: none;
    border-radius: 1.5em;
    margin: 0 auto;

    background-color: #29abe2;

    font-size: 1em;
    color: #edefef;
}

.btn:hover {
    border: solid 4px #29abe2;
    background-color: #edefef;
    color: #29abe2;
}

.btn-container a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
}

.heading {
    display: block;
    width: 85%;
    padding-bottom: 0.5em;
    border-bottom: solid 3px #29abe2;
    margin: 1em auto;

    color: #313539;

    text-align: center;
}

/* title card */

.auto-slider-container {
    height: calc(100vh - 4em);
    width: 100%;
}

.title-card-container {
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 4em);
    width: 100%;
    padding: 9em 0;

    background-color: #313539cc;

    transform: translateY(-100%);

}

.title-card-container .txt-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    width: 90%;
}

.title-card-container .txt-container #name {
    padding-bottom: 0.75em;

    color: #edefef;
    
    font-size: 8vw;
    font-weight: 800;
}

.title-card-container .txt-container #motto {
    padding-top: 0.75em;

    color: #edefef;

    font-size: 5vw;
    text-align: right;
}

.title-card-container .txt-container .accent-txt {
    color: #29abe2;
}

.title-card-container .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: auto;
    width: 100%;
}

.title-card-container .btn-container .btn {
    margin: 1em auto;
}

/* about me */

#about-me-anchor {
    position: relative;
    top: -4em;
}

.about-me-container img {
    display: none;
}

.about-me-container .txt-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2em;

}

.about-me-container p {
    width: 100%;
    margin: 0.75em 0em;
    color: #313539;
}

/* posters */

.poster-container {
    width: 85%;
    margin: 2.5em auto;
}

/* clients */

.client-container {
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: space-around;
    width: 100%;
    padding-top: 1em;

    background-color: #29abe2;
}

.client-container .logo-container {
    height: 3em;
    margin: 1.5em 0;
}

.client-container .logo-mask {
    height: 100%; 
    width: 100%;

    background-color: #edefef;

    mask-mode: alpha;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
}

.client-container #pixar-logo {
    mask-image: url(../assets/logos/PixarLogo_Mask.svg);
}

.client-container #angel-logo {
    mask-image: url(../assets/logos/AngelLogo_Mask.svg);
}

.client-container #byu-tv-logo {
    mask-image: url(../assets/logos/BYUTVLogo_Mask.svg);
}

@media only screen and (min-width: 600px) {
    /* utilities */
    
    .btn {
        height: 4em;
        width: 40%;
        border-radius: 2em;

        font-size: 1.25em;
    }

    /* title card */

    .title-card-container {
        padding: 5em 0;
    }

    .title-card-container .btn-container {
        flex-direction: row;
        align-items: center;
    }

    /* about me */

    .about-me-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .about-me-container .context {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 1em;
    }

    .about-me-container img {
        display: block;
        width: 40%;
    }

    /* clients */
    .client-container {
        flex-direction: row;
    }

    .client-container .logo-container {
        width: 15em;
    }

}

@media only screen and (min-width: 900px) {
    /* utilities */

    .btn {
        height: 3.5em;
        width: 45%;
        border-radius: 2em;

        font-size: 1em;
    }

    .heading {
        display: block;
        width: 50%;
        padding-bottom: 0.5em;
        border-bottom: solid 3px #29abe2;
        margin: 1em auto;

        color: #313539;

        text-align: center;
    }

    /* title card */
    .home-container {
        display: flex;
        height: 100vh;
    }

    .auto-slider-container {
        position: absolute;
        z-index: 1;
        top: calc(((100vh - 35vw) / 2) + 2em);
        left: 2.5vw;

        height: 35vw;
        width: auto;
    }

    .title-card-container {
        position: relative;
        left: 35%;

        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        width: 65%;
        height: calc(100% - 4em);;
        padding: 15em 0;

        background-color: transparent;

        transform: translateY(0);
    }

    .title-card-container .txt-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: auto;
        width: 67.5%;
        margin-right: 3vw;
    }

    .title-card-container .txt-container #name {
        padding-bottom: 1em;

        color: #313539;
        
        font-size: 3.5vw;
        font-weight: 800;
    }

    .title-card-container .txt-container #motto {
        padding-top: 0em;

        color: #313539;

        font-size: 2vw;
        text-align: right;
    }

    .title-card-container .btn-container {
        width: 60%;
        margin-right: 7.5vw;
    }

    /* about me */

    .about-me-container .context {
        margin: 0 15%;
    }

    /* posters */

    .poster-container {
        /*height: 25em;*/
        width: 85%;
        margin: 2.5em auto;
        margin-bottom: 5em;
    }
}

@media only screen and (min-width: 1200px) {
    /* about me */

    .about-me-container .context {
        flex-direction: row;
        margin: 0 15em;
    }

    .about-me-container img {
        width: 20em;
    }
    
    /* posters */
    
    .poster-container {
        width: 60%;
    }
}
</style>