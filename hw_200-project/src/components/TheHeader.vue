<template>
    <div>
        <div class="arround">
            <header class="header main_size">
                <div class="logo">
                    <img v-if="image1" :src="image1" alt="logo" class="logo__img">
                    <div class="logo__text">Interno</div>
                </div>
                <div class="nav">
                    <nav class="nav1">Home</nav>
                    <nav class="nav2">Project</nav>
                    <nav class="nav3">Blog</nav>
                </div>
            </header>
        </div>




    </div>
</template>

<script>

export default {
    name: 'TheHeader',
    data() {
        return {
            image1: require("../assets/Logo.png")
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/style.css"
</style>

