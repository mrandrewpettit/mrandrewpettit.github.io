<template>
  <div id="app">
    <div id="background-accent"></div>
    <div id="background-main"></div>
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
}

#background-accent {
  display: none;
}

#background-main {
  position: fixed;
  z-index: -2;

  height: 100%;
  width: 100%;

  background-color: #edefef;
}

@media only screen and (min-width: 900px) {
  #background-accent {
    position: absolute;
    z-index: -1;
    display: block;
    height: 100%;
    width: 35%;

    background-color: #313539;
  }
}

</style>
