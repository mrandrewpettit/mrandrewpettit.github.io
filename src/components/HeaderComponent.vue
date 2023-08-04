<template>
    <nav class="header">
        <div class="backdrop" />
        <router-link class="logo" to="/">
            <img src="../assets/logos/apettit-logo.svg" />
        </router-link>
        <div v-bind:class="[isActive ? 'menuIcon xIcon' : 'menuIcon hamburgerIcon']"
            v-scroll-lock="scrollLock" @click="toggleMenu()">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <ul v-bind:class="[isActive ? 'menu menuActive' : 'menu menuInactive']">
            <li class="linkContainer">
                <router-link to="/reel" class="link">Reel</router-link>
            </li>
            <li class="linkContainer">
                <router-link to="/work" class="link">Work</router-link>
            </li>
            <li class="linkContainer">
                <router-link to="/resume" class="link">Resume</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "HeaderComponent",
    data() {
        return {
            isActive: false,
            scrollLock: false
        }
    },
    methods: {
        toggleMenu() {
            if (this.isActive) {
                this.isActive = false;
                this.scrollLock = false;
            } else {
                this.isActive = true;
                this.scrollLock = true;
            }
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 6em;
}

.backdrop {
    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: 100%;
    
    backdrop-filter: blur(0.15em) brightness(0.8);
}

/******************************/
/************ Logo ************/
/******************************/
.logo {
    z-index: 2;
    width: 15em;
 }

.logo img {
    max-height: 100%;
    max-width: 100%;
}

.logo img:hover {
    filter: brightness(70%);
}

.logo img:active {
    filter: brightness(100%);
}

.linkContainer {
    list-style-type: none;
}

.link {
    color: #fff;
    text-decoration: none;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
    .header {
        position: absolute;
        padding: 1em 1em;
    }

    /******************************/
    /***** Hamburger Icon/Anim ****/
    /******************************/
    .hamburgerIcon,
    .xIcon {
        z-index: 2;
    }

    .hamburgerIcon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 40px;
    }

    .bar1,
    .bar2,
    .bar3 {
        height: 0.5em;
        width: 40px;

        background-color: #fff;
        opacity: 100;

        transition: opacity 0.2s ease, transform 0.4s ease;
    }

    .xIcon .bar1 {
        transform: translate(0em, 0.5em) rotate(-45deg);
    }

    .xIcon .bar2 {
        opacity: 0;
    }

    .xIcon .bar3 {
        transform: translate(0em, -0.5em) rotate(45deg);
    }

    /******************************/
    /************ Menu ************/
    /******************************/
    .menu {
        position: fixed;
        left:0vw;
        top: 0vh;
        z-index: 1;

        height: 100vh;
        width: 100vw;

        backdrop-filter: blur(0.5em) brightness(0.25);
        background-color: transparent;

        transition: left 0.4s ease;
    }

    .menuActive {
        left: 0;
    }

    .menuInactive {
        left: 100vw;
    }

    .linkContainer {
        position: relative;
        top: 7em;

        margin: 3em;
    }

    .link {
        font-size: 2em;
        text-decoration: none;
    }

    .link:hover {
        color: gray;
    }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
    .header {
        position: absolute;
        padding: 2em 3em;
    }

    /******************************/
    /***** Hamburger Icon/Anim ****/
    /******************************/
    .hamburgerIcon,
    .xIcon {
        z-index: 2;
    }

    .hamburgerIcon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 30px;
    }

    .bar1,
    .bar2,
    .bar3 {
        height: 0.3em;
        width: 35px;

        background-color: #fff;
        opacity: 100;

        transition: opacity 0.2s ease, transform 0.4s ease;
    }

    .xIcon .bar1 {
        transform: translate(0em, 0.3em) rotate(-45deg);
    }

    .xIcon .bar2 {
        opacity: 0;
    }

    .xIcon .bar3 {
        transform: translate(0em, -0.3em) rotate(45deg);
    }

    /******************************/
    /************ Menu ************/
    /******************************/
    .menu {
        position: fixed;
        left:0vw;
        top: 0vh;
        z-index: 1;

        height: 100vh;
        width: 100vw;

        backdrop-filter: blur(0.5em) brightness(0.25);
        background-color: transparent;

        transition: top 0.4s ease;
    }

    .menuActive {
        top: 0;
    }

    .menuInactive {
        top: -100vw;
    }

    .linkContainer {
        position: relative;
        top: 7em;

        margin: 3em;
    }

    .link {
        font-size: 2em;
        text-decoration: none;
    }

    .link:hover {
        color: gray;
    }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
    .header {
        position: fixed;
        padding: 2em 3em;
    }
        
    .menuIcon {
        display: none;
    }

    .menu {
        display: flex;
        justify-content: space-between;

        width: 15em;
    }

    .linkContainer {
        z-index: 1;
    }

    .link {
        font-size: 1.1em;
    }
}

</style>