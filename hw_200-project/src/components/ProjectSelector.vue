<template>
  <div>
    <div class="project">
      <div class="project__buttons">
        <div
          @click="selectProject(id)"
          v-for="(button, id) in buttons"
          :key="button.id"
          :class="button.styleClass"
        >
          {{ button.name }}
        </div>
      </div>
    </div>
    <div class="projectType">
      <div class="projectType__card">
        <div
          v-for="item in chosenProject"
          :key="item.id"
          class="projectType__bid"
        >
          <img v-bind:src="item.src" alt="" class="bid__img" />
          <div class="bid__data">
            <div class="bid__name">
              <div class="projectType__title">{{ item.bid__title }}</div>
              <div class="projectType__text">{{ item.bid__text }}</div>
            </div>
            <svg
              class="bid__button"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <svg
            v-if="item.lighting"
            class="projectType__star"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
          >
            <g filter="url(#filter0_d_993_156)">
              <path
                d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                fill="#FFA928"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_993_156"
                x="0.186424"
                y="0.431396"
                width="35.6271"
                height="34.3619"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_993_156"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_993_156"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSelector",
  data() {
    return {
      chosenProject: [],
      buttons: [
        {
          name: "Bathroom",
          styleClass: "project__button",
        },
        {
          name: "Bed Room",
          styleClass: "project__button project__selected",
        },
        {
          name: "Kitchan",
          styleClass: "project__button",
        },
        {
          name: "Living Area",
          styleClass: "project__button",
        },
      ],
      projects: [
        {
          src: require("../assets/Project (1).png"),
          bid__title: "Minimal Bedroom",
          bid__text: "Decor / Artchitecture",
          type: "Bed Room",
          lighting: "visible",
        },
        {
          src: require("../assets/Project (2).png"),
          bid__title: "Classic Minimal Bedroom",
          bid__text: "Decor / Artchitecture",
          type: "Bed Room",
          lighting: "",
        },
        {
          src: require("../assets/Project (3).png"),
          bid__title: "Minimal Bedroom table",
          bid__text: "Decor / Artchitecture",
          type: "Bed Room",
          lighting: "",
        },
        {
          src: require("../assets/Project (4).png"),
          bid__title: "Modern Medroom",
          bid__text: "Decor / Artchitecture",
          type: "Bed Room",
          lighting: "visible",
        },
        {
          src: require("../assets/Project (5).png"),
          bid__title: "Minimal Bedroom",
          bid__text: "Decor / Artchitecture",
          type: "Bed Room",
          lighting: "",
        },
        {
          src: require("../assets/Project (6).png"),
          bid__title: "Modern Bedroom",
          bid__text: "Decor / Artchitecture",
          type: "Bed Room",
          lighting: "",
        },
        {
          src: require("../assets/Project (7).png"),
          bid__title: "System Table",
          bid__text: "Decor / Artchitecture",
          type: "Bed Room",
          lighting: "",
        },
        {
          src: require("../assets/Project (8).png"),
          bid__title: "Modern Bedroom",
          bid__text: "Decor / Artchitecture",
          type: "Bed Room",
          lighting: "",
        },

        {
          src: "https://i.pinimg.com/originals/fd/50/47/fd5047522460563166943ba2059e82b7.jpg",
          bid__title: "Minimal Bathroom",
          bid__text: "Decor / Artchitecture",
          type: "Bathroom",
          lighting: "visible",
        },
        {
          src: "https://i.pinimg.com/originals/82/7b/0d/827b0d630792aa701cf6f70ff43a9225.jpg",
          bid__title: "Classic Minimal Bathroom",
          bid__text: "Decor / Artchitecture",
          type: "Bathroom",
          lighting: "",
        },
        {
          src: "https://santemo.ru/upload/iblock/d92/d921da59b42aecee6b60a161d7bfe567.jpg",
          bid__title: "Minimal Bathroom table",
          bid__text: "Decor / Artchitecture",
          type: "Bathroom",
          lighting: "",
        },
        {
          src: "https://www.glickmandesignbuild.com/wp-content/uploads/2022/07/Classic-Charm-iStock-157185449.jpg",
          bid__title: "Modern Bathroom",
          bid__text: "Decor / Artchitecture",
          type: "Bathroom",
          lighting: "visible",
        },

        {
          src: "https://kitchensinteriors.ru/wp-content/uploads/bench-barstools-02.jpg",
          bid__title: "Minimal Kitchan",
          bid__text: "Decor / Artchitecture",
          type: "Kitchan",
          lighting: "visible",
        },
        {
          src: "https://i5.photo.2gis.com/images/branch/0/30258560053373833_26de.jpg",
          bid__title: "Classic Minimal Kitchan",
          bid__text: "Decor / Artchitecture",
          type: "Kitchan",
          lighting: "",
        },
        {
          src: "https://hauslux39.ru/wp-content/uploads/2021/12/nobilia-focus-5-min.jpg",
          bid__title: "Minimal Kitchan table",
          bid__text: "Decor / Artchitecture",
          type: "Kitchan",
          lighting: "",
        },
        {
          src: "https://shkaf2000.ru/d/kuhnya_donat.jpg",
          bid__title: "Modern Kitchan",
          bid__text: "Decor / Artchitecture",
          type: "Kitchan",
          lighting: "visible",
        },

        {
          src: "https://i.pinimg.com/originals/16/5b/46/165b467b860ec9c7bfce64df3c157ab2.jpg",
          bid__title: "Minimal Living Area",
          bid__text: "Decor / Artchitecture",
          type: "Living Area",
          lighting: "visible",
        },
        {
          src: "https://i.pinimg.com/originals/a8/af/68/a8af688288e1b8e5c8aae53128328e1d.jpg",
          bid__title: "Classic Minimal Living Area",
          bid__text: "Decor / Artchitecture",
          type: "Living Area",
          lighting: "",
        },
        {
          src: "https://www.maisonvalentina.net/en/inspiration-and-ideas/wp-content/uploads/2018/07/open-concept-living-room_featured-image.jpg",
          bid__title: "Minimal Living Area table",
          bid__text: "Decor / Artchitecture",
          type: "Living Area",
          lighting: "",
        },
        {
          src: "https://i.pinimg.com/originals/52/2d/92/522d9262bca83701f1f482af56d70402.jpg",
          bid__title: "Modern Living Area",
          bid__text: "Decor / Artchitecture",
          type: "Living Area",
          lighting: "visible",
        },
      ],
    };
  },
  methods: {
    selectProject(id) {
      for (let i = 0; i < this.buttons.length; i++) {
        if (i === id) {
          this.buttons[i].styleClass = "project__button project__selected";
          this.chosenProject = this.projects.filter(
            (project) => project.type === this.buttons[i].name
          );
        } else {
          this.buttons[i].styleClass = "project__button";
        }
      }
    },
  },
  created() {
    this.chosenProject = this.projects.filter(
      (project) => project.type === "Bed Room"
    );
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
