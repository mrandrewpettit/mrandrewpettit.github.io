
<template>
<div>
  <HeaderComponent/>
  <div class="reelContainer" v-scroll-lock="isScrollLocked">
	<div id="passwordContainer">
		<div class="headerProxy" id="passwordHeader"></div>
			<form class="passwordForm" @submit.prevent="checkPassword">
				<p id="passwordError">Incorrect password</p>
				<input type="password" id="passwordInput" v-model="passwordInput" placeholder="Reel Password" rows="1" cols="35"/>
				<button id="passwordSubmit" type="submit">Submit</button>
			</form>
		</div>
    <div class="headerProxy"></div>
    <h1 class="title">REEL</h1>
    <div class="content">
		<iframe src="https://www.youtube.com/embed/TbBkM-1PyI8?si=IisiQKxvXZGoCCpk" title="YouTube iframe player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		<div class="breakdownContainer">
			<h2 class="title">BREAKDOWN</h2>
			<h4>Elemental - Fire Characters (00:02 - 00:19)</h4>
			<ul>
				<li>I used prebuilt Katana and Houdini networks to develop the final aggregate volume materials of shown fire characters.</li>
				<li>I handled shot fixes for fire characters and consequently developed new and more optimized volume carving and texture projection technologies for fire characters in shots where the rig is deformed dramatically.</li>
				<li>I am wholly responsible for developing procedural chainmail garments and shading materials for shown characters.</li>
			</ul>
			<h4>Elemental - Air Characters (00:20 - 00:37)</h4>
			<ul>
				<li>I finalized Katana and Houdini networks for shading 35 background air characters.</li>
				<li>I am responsible for developing technologies to rim light aggregate volumes with traditional rim lighting workflows.</li>
				<li>I ported iris gleam controls from traditional mesh characters to volumetric characters. Traditionally Pixar heavily uses UVs and 2D Manifolds to control gleam shaping in character eyes, the challenge was porting the same technology to aggregate volumes where UVs and 2D Manifolds are non-existent.</li>
				<li>Shaded air character garments from scratch</li>
				<li>Our SIGGRAPH paper on air character look development can be seen <a href="https://graphics.pixar.com/library/">here</a>.</li>
			</ul>
			<h4>Elemental - Props (00:38 - 01:00)</h4>
			<ul>
				<li>I shaded, from scratch, semi-translucent and spongy materials for shown character garments and props.</li>
				<li>I worked closely with CFX to develop burnt material variants driven by CFX signals.</li>
			</ul>
			<h4>Shader Library (01:00 - 01:19)</h4>
			<ul>
				<li>I have developed from the ground up my own shader library. It is primarily OSL nodes but I have developed a handful of C++ nodes as well, for trace functionality that isn’t supported in OSL. The patterns shown are a sample of the many utility nodes that I have created from simple mathematics to pattern mixing.</li>
				<li>The library’s make system patterned after Laika Studios open source shader library</li>
				<li>My library source code can be found <a href="https://github.com/mrandrewpettit/shader_library">here</a>.</li>
			</ul>
			<h4>Custom C++ Ray Tracer (01:20 - 01:23)</h4>
			<ul>
				<li>Out of my own desire to better understand path tracing, I developed my own ray tracer, from scratch, in C++. I am currently adding path tracing technologies and USD support. </li>
			</ul>
			<h4>SNES Controller (01:24 - 1:31)</h4>
			<ul>
				<li>I am responsible for all aspects, and it was developed from scratch.</li>
			</ul>
			<h4>Procedural Strawberry Shader (01:32 - 01:45)</h4>
			<ul>
				<li>I am responsible for all aspects, and it was developed from scratch. The tool takes in an input geometry, and then procedurally generated leaves, seeds and a shader. Users can then control the look of the shader via exposed UI parameters.</li>
			</ul>
			<h4>Cenote - Xochimilco (01:46 - 01:57)</h4>
			<ul>
				<li>Cenote was my university class’s capstone project that was awarded the 2023 College Television Award ( or College Emmy). I was the producer and a technical artist on the film. In these shots I created all the environment models (except for seaweed), materials,  and set dress.</li>
				<li>I worked with three others to develop any shot VFX including plant movement, underwater murk look, and comp work.</li>
			</ul>
			<h4>Cenote - Tree Generator (01:58 - 02:11)</h4>
			<ul>
				<li>I had experience with Houdini’s internal 3-node system to procedurally develop curve based trees. To support art on Cenote, I used the node system as a base, exposed the inner nodes and developed a tree generator that gave a default look art desired. My tool  accepts an input curve as a tree trunk, and considerably simplified the exposed UI controls for other artists to easily control branch length, scatter, and amount.</li>
				<li>A large portion of development was creating a procedural bark and leaf material, from scratch, that would work for any tree generated.</li>
			</ul>
			<h4>Cenote - Ivy Generator (02:12 - 02:19)</h4>
			<ul>
				<li>I developed this system, from scratch, to quickly populate our jungle with ivy and allow artists to quickly paint out undesired ivy, per shot. Controls include the leaf thickness, variation, and direction; and vine thickness, variation, and scatter.</li>
				<li>I also developed a procedural material for the geometry outputted.</li>
			</ul>
			<h4>Cenote - Moss Generator (02:20 - 02:27)</h4>
			<ul>
				<li>I developed, from scratch, a moss generator that accepted a mask and then generated moss dependent on the mask. Exposed controls include scaling, direction, root color, leaf color and color randomness. It was initially designed to generate only curves, but out of a desire to not have it look like hair, I modified the tool to instance pre-shaded cards onto the curves.</li>
			</ul>
			<h4>Cenote - Jungle (02:28 - 02:33)</h4>
			<ul>
				<li>I was entirely responsible for the models of the jungle (except the stone building), materials, and set dress, to support the desired look from art.</li>
			</ul>
		</div>
    </div>
  </div>
  <FooterComponent/>
</div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"

export default {
	name: 'ReelView',
	components: {
		HeaderComponent,
		FooterComponent
    },
	data() {
		return {
			passwordInput: null,
			password: "apDemoReel2023",
			isScrollLocked: true
		}
	},
	methods: {
		ToggleScrollLock() {
			if (!this.isScrollLocked) {
				this.isScrollLocked = true;
			} else {
				this.isScrollLocked = false;
			}
		},
		checkPassword() {
			if(this.passwordInput == this.password)
			{
				this.isScrollLocked = false;

				var passwordContainer = document.getElementById("passwordContainer");
				passwordContainer.style.display = "none";
				var passwordHeader = document.getElementById("passwordHeader");
				passwordHeader.style.display = "none";
			}
			else
			{
				var passwordError = document.getElementById("passwordError");
				passwordError.style.display = "block";
			}
		}
	}
}
</script>

<style scoped>
/* Password */
#passwordContainer {
	position: fixed;
	height: 100%;
	width: 100%;
	background-color: #edefef;

	z-index: 1;
}

.passwordForm{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: calc(100% - 4em);
	width: 100%;
}

#passwordError {
	display: none;
	color: red;
	font-weight: bold;
}

#passwordInput {
	resize: none;
	font-size: 1.5em;
	padding: 0.5em;
	margin: 1em;
}

#passwordSubmit {
	font-size: 1.5em;
	padding: 0.25em;
}

/* Content */
.reelContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}

.headerProxy {
	height: 4em;
	background-color: #313539;
}

.title {
	
	padding: 0.5em;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: left;

	width: 100%;
}

iframe {
  width: 100%;
  aspect-ratio: 16/9;
  padding: 1em 3em;

  margin-top: 1em;
  border: none;
}

.content .breakdownContainer {
	width: 100%;
	background-color: #edefef;
	margin-top: 2em;
	padding: 1em 3em;
}

.content h2 {
	text-align: center;
	width: 100%;
}

.content h4 {
	margin-top: 2em;
	margin-bottom: 0.5em;
}

.content li {
	margin-left: 2em;
}

.content p {
	padding: 1em 3em;
	background-color: #edefef;
}

@media only screen and (min-width: 900px) {
	#passwordHeader {
		width: 35%;
	}

	iframe {
		width: 80%;
		margin: auto;
	}

	.content .breakdownContainer {
		padding: 1em 10em;
	}
}

@media only screen and (min-width: 1200px) {
	#passwordHeader {
		width: 35%;
	}

	iframe {
		width: 60%;
		margin: auto;
	}

	.content .breakdownContainer {
		padding: 1em 20em;
	}
}

</style>