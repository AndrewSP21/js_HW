<template>
    <div class="mt">
        <div class="arround">
            <section class="top main_size">
                <div class="top__block">
                    <div class="top__title">Let Your Home Be Unique</div>
                    <div class="top__text">There are many variations of the passages of lorem Ipsum fromavailable,
                        majority.
                    </div>
                    <div class="top__button">
                        <div class="top__button-text">Get Started</div>
                        <svg class="top__button-img" xmlns="http://www.w3.org/2000/svg" width="18" height="17"
                            viewBox="0 0 18 17" fill="none">
                            <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

            </section>
        </div>
        <section class="middle main_size">
            <div class="middle__mainTitle">
                <div class="middle__header">
                    <div class="middle__title">Follow Our Projects</div>
                    <div class="middle__text">It is a long established fact that a reader will be distracted by the
                        of readable content of page lookings at its layouts points.</div>
                </div>
            </div>


            <div class="bids">
                <div v-for="item in getModernKitchen" :key="item.id" class="bid">
                    <img v-bind:src="item.src" alt="" class="bid__img">
                    <div class="bid__data">
                        <div class="bid__name">
                            <div class="bid__title">{{ item.bid__title }}</div>
                            <div class="bid__text">{{ item.bid__text }}</div>
                        </div>
                        <svg class="bid__button" xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                            viewBox="0 0 70 70" fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        <section class="history ">
            <div class="history__center">

                <div class="history__main_size">
                    <div class="history__size" v-for="(item, id) in getHistoryKitchen" :key="item.id">
                        <div class="history__data ">
                            <div class="history__number">{{ item.history__number }}</div>
                            <div class="history__text">{{ item.history__text }}</div>
                        </div>
                        <div v-if="id < getHistoryKitchen.length - 1" class="history__line"></div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters, mapActions, } from "vuex";
export default {
    name: 'MainPage',

    created() {
        this.fetchModernKitchen;
        this.fetchHistoryKitchen
    },
    computed: {
        ...mapActions(["fetchModernKitchen", "fetchHistoryKitchen"]),
        ...mapGetters(["getModernKitchen", "getHistoryKitchen"])
    },

}
</script>

<style lang="scss" scoped>
@import "../assets/style.css";

.mt {
    margin-top: 53px;
}
</style>