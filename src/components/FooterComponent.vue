<template>
    <footer>
        <div class="txt-container">
            <h4>CONTACT ME</h4>
            <p>mrandrewpettit@gmail.com</p>
        </div>
        <div class="social-container">
            <a class="logo-container" href="https://www.linkedin.com/in/mrandrewpettit"><div class="logo-mask" id="linkedin-logo"></div></a>
            <a class="logo-container" href="https://github.com/mrandrewpettit"><div class="logo-mask" id="github-logo"></div></a>
            <a class="logo-container" href="https://vimeo.com/mrandrewpettit"><div class="logo-mask" id="vimeo-logo"></div></a>
        </div>
        <p id="copyright">© Andrew Pettit 2023</p>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
}

.txt-container {
    width: 100%;
    margin: 2em 0em 0em 0em;
}

.txt-container h4,
.txt-container p {
    margin: 0.5em;
    color: #313539;
    text-align: center;
}

.social-container {
    display: flex;
    height: 2em;
    width: 50%;
    margin: 1em 0;
}

.social-container .logo-container {
    height: 100%;
    width: 100%;
}

.social-container .logo-mask {
    height: 100%; 
    width: 100%;

    background-color: #313539;

    mask-mode: alpha;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
}

.social-container #linkedin-logo {
    mask-image: url(../assets/logos/LinkedInLogo_Mask.svg);
}

.social-container #github-logo {
    mask-image: url(../assets/logos/GithubLogo_Mask.svg);
}

.social-container #vimeo-logo {
    mask-image: url(../assets/logos/VimeoLogo_Mask.svg);
}

#copyright {
    margin: 0.5em 0em 1.5em 0em;
}

@media only screen and (min-width: 600px) and (max-width: 899px) {
    .txt-container h4 {
        font-size:  2.5em;
    }

    .txt-container p {
        font-size: 1.5em;
    }

    .social-container {
        width: 30%;
    }

    #copyright {
        font-size: 1.25em;
    }
}

@media only screen and (min-width: 900px) {
    .social-container {
        width: 20%;
    }
}
</style>