<template>
    <footer>
        <div class="socialContainer">
            <a href="http://www.linkedin.com/in/mrandrewpettit"><img src="../assets/logos/linkedIn_circleWhite.svg" /></a>
            <a href="https://github.com/mrandrewpettit"><img src="../assets/logos/github_circleWhite.svg" /></a>
            <a href="https://vimeo.com/mrandrewpettit"><img src="../assets/logos/vimeo_circleWhite.svg" /></a>
        </div>
        <p>©Andrew Pettit 2023</p>
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

    height: 6rem;
    width: 100%;
}

.socialContainer {
    display: flex;
}
.socialContainer img {
    margin: 0.5em 0.5em;
}

.socialContainer img:hover {
    filter: brightness(70%);
}
</style>