<template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
    <slot>{{ text }}</slot>
  </button>
</template>
<script>
// https://bulma.io/documentation/elements/button/
export const types = [
  "primary",
  "success",
  "warning",
  "danger",
  "info",
  "link",
  "dark"
];
export const sizes = ["small", "normal", "medium", "large"];
export default {
  name: "sm-button",
  props: {
    // 按钮文字 可以用slot覆盖
    text: [String, Number],
    // 按钮大小
    size: {
      type: String,
      default: "normal",
      validator(v) {
        return sizes.includes(v);
      }
    },
    //  按钮类型
    type: {
      type: String,
      default: "primary",
      validator(v) {
        return types.includes(v);
      }
    },
    // 禁用状态
    disabled: Boolean,
    // 边框按钮
    outline: Boolean,
    // 圆角按钮
    round: Boolean,
    // loading状态
    loading: Boolean
  },
  computed: {
    // 按钮的class
    classes() {
      return {
        button: true,
        "is-loading": this.loading,
        "is-outlined": this.outline,
        "is-rounded": this.round,
        [`is-${this.type}`]: this.type,
        [`is-${this.size}`]: this.size
      };
    }
  },
  methods: {
    handleClick() {
      this.$emit("on-click");
    }
  }
};
</script>
