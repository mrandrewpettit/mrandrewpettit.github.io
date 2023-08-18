
<template>
  <div class="resumeContainer">
    <div class="headerProxy" />
    <h1 class="title">REEL</h1>
    <div class="content">
      <div class="margin"></div>
      <iframe src="https://drive.google.com/file/d/14iahnDpO74qso3da0cmhUYbBZ71PJWyQ/preview" frameborder="0"></iframe>
      <div class="margin"></div>
    </div>
  </div>
</template>

<script>
export default {
name: 'ReelView',
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

padding-top: 5em;

height: 100%;
width: 100%;
}

iframe {
  width: 100%;
  height: 58.8%;
}

@media only screen and (min-width: 400px) {
.margin {
  width: 20vw;
}
}
</style>