<template>
    <div class="reelContainer">
      <div class="headerProxy" />
      <h1 class="title">REEL</h1>
      <div class="videoContainer">
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/839743736?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Andrew Pettit Demo Reel 2023"></iframe></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ReelView',
}
</script>

<style scoped>
.reelContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.headerProxy {
  height: 6em;
  background-color: black;
}

.title {
  padding: 0.5em;
}

.videoContainer {
  width: 70vw;
  padding: 1em;
}
</style>