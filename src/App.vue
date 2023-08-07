<template>
  <div id="app">
    <AppLayout>
      <router-view/>
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout"

export default {
  name: "App",
  components: { AppLayout }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
}


#app {
  font-family: Verdana, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;
  background-color: #3b3b3b;
}
</style>
