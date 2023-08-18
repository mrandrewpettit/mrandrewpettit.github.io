<template>
    <header class="header" v-scroll-lock="isScrollLocked">
        <router-link class="logo-container" to="/"><div class="logo"></div></router-link>
        <input class="menu-btn" id="menu-btn" type="checkbox" />
        <label class="menu-icon" for="menu-btn" @click="ToggleScrollLock()"><span class="navicon"></span></label>
        <ul class="menu">
            <li><router-link to="/" class="menu-link">Home</router-link></li>
            <li><router-link to="/reel" class="menu-link">Demo Reel</router-link></li>
            <li><router-link to="/resume" class="menu-link">Resume</router-link></li>
        </ul>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    data() {
        return {
            isScrollLocked: false
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
        ToggleHeaderBackground() {
            let monitorWidth = window.matchMedia("(min-width: 900px)");
            let scrollPos = window.pageYOffset;
            let header = document.getElementsByClassName("header")[0];
            let menuLinks = document.getElementsByClassName("menu-link");
            let menuBtn = document.getElementsByClassName("menu-btn")[0];

            /* check if hamburger menu is toggled on */
            if(monitorWidth.matches && this.isScrollLocked) {
                this.isScrollLocked = false;
                menuBtn.checked = false;
            }

            /* toggle box shadow */
            if (scrollPos == 0) {
                header.style.boxShadow = "";
            } else {
                header.style.boxShadow = "0px 2px 4px 0 rgba(0, 0, 0, 0.2)";
            }

            /* toggle backgrund change above 900px width */
            if (monitorWidth.matches && scrollPos == 0) {
                header.style.background = "transparent";
                for(let link of menuLinks) {
                    link.style.color= "#313539";
                }
            } else {
                header.style.background = "#313539";
                for(let link of menuLinks) {
                    link.style.color= "#edefef";
                }
            }
        }
    },
    created() {
        document.addEventListener("scroll", this.ToggleHeaderBackground);
        window.addEventListener("resize", this.ToggleHeaderBackground);
    },
    destroyed() {
        document.removeEventListener("scoll", this.ToggleHeaderBackground)
        window.removeEventListener("resize", this.ToggleHeaderBackground);
    }
}
</script>

<style scoped>
/* header */

.header {
    position: fixed;
    z-index: 3;

    height: 4em;
    width: 100%;

    background: #313539;

    transition: background 0.2s ease-out;
}

.header .logo-container {
    float: left;

    height: 100%;
    width: 40vw;
    margin-left: 3%;
}

.header .logo {
    height: 100%; 
    width: 100%;

    background-color: #edefef;

    mask-image: url(../assets/logos/APettitLogo_Mask.svg);
    mask-mode: alpha;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100%;

    transition: background-color 0.2s ease-out;
}

.header ul {
    padding: 0;
    margin: 0;

    overflow: hidden;

    list-style: none;
    background-color: #313539;
}

.header li a {
    display: block;
    padding: 20px;

    color: #edefef;
    
    font-size: 1em;
    text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
    background-color: #edefef;
    color: #313539;
}

/* menu */

.header .menu {
    max-height: 0;
    clear: both;
    transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
    position: relative;
    float: right;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    aspect-ratio: 1/1;

    user-select: none;
    cursor: pointer;
}

.header .menu-icon .navicon {
    position: relative;

    display: block;
    height: 4px;
    width: 32px;

    background: #edefef;

    transition: all 0.2s ease-out;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
    position: absolute;

    display: block;
    height: 100%;
    width: 100%;

    background: #edefef;

    content: "";
    transition: all 0.2s ease-out;
}

.header .menu-icon .navicon:before {
    top: 10px;
}

.header .menu-icon .navicon:after {
    top: -10px;
}

/* menu btn */

.header .menu-btn {
    display: none;
}

.header .menu-btn:checked~.menu {
    max-height: 240px;
    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.header .menu-btn:checked~.menu-icon .navicon {
    background: transparent;
}

.header .menu-btn:checked~.menu-icon .navicon:before {
    transform: translate(0, -10px) rotate(-45deg);
}

.header .menu-btn:checked~.menu-icon .navicon:after {
    transform: translate(0, 10px) rotate(45deg);
}

@media only screen and (min-width: 600px) {
    /* header */

    .header .logo-container {
        width: 30%;
    }

    .header li a {
        color: #313539;
    }

    /* menu icon */

    .header .menu-icon .navicon {
        height: 5px;
        width: 40px;
    }

    .header .menu-icon .navicon:before {
        top: 12.5px;
    }

    .header .menu-icon .navicon:after {
        top: -12.5px;
    }

    /* menu btn */

    .header .menu-btn:checked~.menu-icon .navicon:before {
        transform: translate(0, -12.5px) rotate(-45deg);
    }

    .header .menu-btn:checked~.menu-icon .navicon:after {
        transform: translate(0, 12.5px) rotate(45deg);
    }
}

@media only screen and (min-width: 900px) {
    /* header */
    .header {
        background: transparent;
    }

    .header .logo-container {
        width: 20vw;
    }

    .header ul {
        background: transparent;
    }

    .header li {
        float: left;
    }

    /* menu */

    .header .menu {
        float: right;
        max-height: none;
        clear: none;
    }

    .header .menu-icon {
        display: none;
    }
}

@media only screen and (min-width: 1200px) {
    /* header */

    .header .logo-container {
        width: 15em;
    }
}
</style>