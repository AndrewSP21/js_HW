<template>
    <div class="slider">
        <div class="slides">
            <div class='tt' v-for="(item, index) in items" :key="index" :class="{ 'slide': currentSlide === index }">
                <div class="slide__cover">
                    <img :src="item.image" :alt="item.title">
                    <div class="caption">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                    </div>

                </div>

            </div>
        </div>
        <div class="controls">
            <button class="prev" @click="prevSlide">&lt;</button>
            <button class="next" @click="nextSlide">&gt;</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheSlider',
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            currentSlide: 0,
        };
    },
    methods: {
        prevSlide() {
            this.currentSlide -= 1;
            if (this.currentSlide < 0) {
                this.currentSlide = this.items.length - 1;
            }
        },
        nextSlide() {
            this.currentSlide += 1;
            if (this.currentSlide >= this.items.length) {
                this.currentSlide = 0;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.tt {
    display: none;
}

.slide {
    display: flex;
    justify-content: center;

   /*  &__cover {
        display: flex;
    } */
}



.slider {
    // position: relative;
    // width: 100%;
    // height: 400px;
    // overflow: hidden;
}

/* .slides {
    display: flex;
    // width: calc(100% * 4);
    height: 100%;
    transition: transform 0.4s ease-in-out;
} */

/* .slide {
    flex-shrink: 0;
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
} */

.caption {
    // position: absolute;
    // bottom: 0;
    // left: 0;
    // padding: 20px;
    // color: #b11c1c;
    // text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    // background-color: rgba(0, 0, 0, 0.237);
    // width: 100%;
}

.controls {
    // position: absolute;
    // bottom: 40px;
    // left: 50%;
    // color: aqua;
    // transform: translateX(-50%);
    // display: flex;
}

.prev,
.next {
    // background-color: rgba(112, 19, 19, 0.5);
    // border: 1px solid black;
    // color: #ea0e0e;
    font-size: 24px;
    margin: 0 10px;
    padding: 10px;
    cursor: pointer;
}

.prev:hover,
.next:hover {
    background-color: rgba(6, 22, 198, 0.7);
}
</style>