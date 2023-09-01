<template>
<div>
	<HeaderComponent/>
    <div class="resumeContainer">
      <div class="headerProxy" />
      <h1 class="title">RESUME</h1>
      <div class="content">
        <div class="margin"></div>
        <object id="resume" data="resume2023.pdf"></object>
        <div class="margin"></div>
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
  height: 100vh;
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

  height: 100%;
  width: 100%;
}

#resume {
  height: 100%;
  width: 100%;
}

@media only screen and (min-width: 400px) {
  .margin {
    width: 20vw;
  }
}
</style>