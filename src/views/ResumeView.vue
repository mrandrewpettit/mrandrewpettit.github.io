<template>
<div>
	<HeaderComponent/>
    <div class="resumeContainer">
      <div class="headerProxy" />
      <h1 class="title">RESUME</h1>
      <div class="content">
        <object id="resume" data="resume2023.pdf" ></object>
      </div>
    </div>
	<FooterComponent/>
</div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"

export default {
  name: 'ResumeView',
  components: {
		HeaderComponent,
		FooterComponent
    },
}
</script>

<style scoped>
.resumeContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.headerProxy {
  height: 6em;
  background-color: rgb(36, 36, 36);
}

.title {
  padding: 1em;
}

.content {
  display: flex;
  justify-content: space-around;
  align-items: space-around;

  width: 100%;
}

#resume {
	width: 100%;
	aspect-ratio: 8.5/11;
	}

@media only screen and (min-width: 1200px) {
	#resume {
	width: 45vw;
	aspect-ratio: 8.5/11;
	}
}
</style>