<template>
  <div>
    <section class="numerator">
      <div
        :style="edge.presentation_left"
        @click="prev_page()"
        :class="key_arr[0].style_button"
      >
        <span class="button__text">&lt;</span>
      </div>
      <div
        @click="button_selected(id)"
        v-for="(item, id) in key_arr"
        :key="item.id"
        :class="item.style_button"
      >
        <span class="button__text">{{ item.text }}</span>
      </div>
      <div
        :style="edge.presentation_right"
        @click="next_page()"
        :class="key_arr[this.key_arr.length - 1].style_button"
      >
        <span class="button__text">&gt;</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TheNumerator",
  data() {
    return {
      key_arr: [
        {
          text: "01",
          style_button: "button__circle button__selected",
        },
        {
          text: "02",
          style_button: "button__circle",
        },
        {
          text: "03",
          style_button: "button__circle",
        },
      ],
      edge: {
        left: "button__circle",
        right: "button__circle",
        presentation_left: "display:flex",
        presentation_right: "display:flex",
      },
      idxSel: 0,
    };
  },
  methods: {
    button_selected(id) {
      for (let i = 0; i < this.key_arr.length; i++) {
        if (i === id) {
          this.key_arr[i].style_button = "button__circle button__selected";
        } else {
          this.key_arr[i].style_button = "button__circle";
        }
      }

      this.edge.presentation_left = id === 0 ? "display:none" : "display:flex";
      this.edge.presentation_right =
        id === this.key_arr.length - 1 ? "display:none" : "display:flex";

      this.$emit("idxS", id);
    },
    index_selected() {
      const idxSelected = this.key_arr.findIndex(
        (item) => item.style_button === "button__circle button__selected"
      );

      return idxSelected;
    },
    prev_page() {
      this.idxSel = this.index_selected();
      this.$emit("idxS", this.idxSel);
      this.edge.presentation_right = "display:flex";
      if (this.idxSel > 0) {
        this.button_selected(this.idxSel - 1);
        if (this.idxSel - 1 === 0) {
          this.edge.presentation_left = "display:none";
        } else {
          this.edge.presentation_left = "display:flex";
        }
      }
    },
    next_page() {
      this.idxSel = this.index_selected();
      this.$emit("idxS", this.idxSel);
      this.edge.presentation_left = "display:flex";
      if (this.idxSel < this.key_arr.length - 1) {
        this.button_selected(this.idxSel + 1);
        if (this.idxSel + 2 === this.key_arr.length) {
          this.edge.presentation_right = "display:none";
        } else {
          this.edge.presentation_right = "display:flex";
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style.css";

.button {
  &__circle {
    display: flex;
    border: 1px solid #cda274;
    width: 51px;
    height: 51px;
    border-radius: 50%;
    &:last-child {
      font-size: 28px;
    }

    &:first-child {
      font-size: 28px;
    }
    &:hover {
      background-color: rgb(199, 195, 195);
      color: white;
    }
  }
  &__text {
    margin: auto;
  }
  &__selected {
    background-color: #f4f0ec;
    border-color: #f4f0ec;
    &:hover {
      background-color: #f4f0ec;
      color: black;
    }
  }
}
</style>
