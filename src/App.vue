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
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700,800");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth; /* smooth scroll when hyperlinks lead to same page locations */
}

#app {
  font-family: "Montserrat", Verdana, sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;*/
  background-color: #edefef;
}

</style>
