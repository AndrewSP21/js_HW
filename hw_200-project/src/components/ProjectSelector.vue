<template>
  <div>
    <div class="project">
      <div class="project__buttons">
        <div @click="selectProject(id)" v-for="(button, id) in getButtonProjects" :key="button.id"
          :class="button.styleClass">
          {{ button.name }}
        </div>
      </div>
    </div>
    <div class="projectType">
      <div class="projectType__card">
        <div v-for="item in chosenProject" :key="item.id" class="projectType__bid">
          <img v-bind:src="item.src" alt="" class="bid__img" />
          <div class="bid__data">
            <div class="bid__name">
              <div class="projectType__title">{{ item.bid__title }}</div>
              <div class="projectType__text">{{ item.bid__text }}</div>
            </div>

            <router-link to="/RProjectDetails">
              <svg class="bid__button" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </router-link>

          </div>
          <svg v-if="item.lighting" class="projectType__star" xmlns="http://www.w3.org/2000/svg" width="36" height="35"
            viewBox="0 0 36 35" fill="none">
            <g filter="url(#filter0_d_993_156)">
              <path
                d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                fill="#FFA928" />
            </g>
            <defs>
              <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "ProjectSelector",
  data() {
    return {
      chosenProject: [],
    };
  },
  methods: {
    selectProject(id) {
      for (let i = 0; i < this.getButtonProjects.length; i++) {
        if (i === id) {
          this.SET_Button_Style_PROJECT([i, "project__button project__selected"]);
          this.chosenProject = this.getProjects.filter(
            (project) => project.type === this.getButtonProjects[i].name
          );
        } else {
          this.SET_Button_Style_PROJECT([i, "project__button"]);
        }
      }
    },
    ...mapMutations(["SET_BUTTONS_PROJECT", "SET_Button_Style_PROJECT"])
  },
  created() {
    this.fetchButtonProjects;
    this.fetchProject;
    this.chosenProject = this.getProjects.filter(
      (project) => project.type === "Bed Room"
    );

  },
  computed: {
    ...mapActions(["fetchButtonProjects", "fetchProject"]),
    ...mapGetters(["getButtonProjects", "getProjects"]),

  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.css";

.project {
  display: flex;
  justify-content: center;

  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 880px;
    height: 75px;
    margin-top: 200px;
    border: 1px solid #cda274;
    border-radius: 18px;
  }

  &__button {
    margin-left: auto;
    margin-right: auto;
    color: #292f36;
    background-color: #fff;
    width: 219px;

    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
  }

  &__selected {
    border-radius: 18px;
    background: #cda274;
    height: 100%;

    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.projectType {
  display: flex;
  justify-content: center;
  margin-top: 61px;
  min-height: 850px;

  &__card {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    justify-content: space-between;
    align-items: flex-start;
    // flex-direction: column;
    // padding: 10px;
    gap: 10px;
    // flex-grow: 0;
  }

  &__bid {
    width: 585px;
    height: auto;
    position: relative;
  }

  &__star {
    position: absolute;
    right: 0;
    top: 3px;
    visibility: visible;
  }

  // &__bid:nth-child(2) {
  //     align-self: flex-start;
  // }

  // &__bid:nth-child(3) {
  //     align-self: flex-end;
  // }

  &__title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
  }

  &__text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}

.bid__img {
  width: 585px;
}
</style>
