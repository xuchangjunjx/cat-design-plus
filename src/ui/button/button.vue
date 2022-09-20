<template>
  <button :class="classes" @click="handleClick" :disabled="disabled">
    <!--没有text就用default slot-->
    <slot>{{ text }}</slot>
  </button>
</template>
<script>
import "./button.less";
// Vue组件内是可以export多个东西的，但是只能export一个default
export const types = ["primary", "success", "warning", "error", "info"];
export default {
  props: {
    text: String,
    type: {
      type: String,
      default() {
        return "default";
      },
      validator(v) {
        return types.includes(v);
      }
    },
    // 圆角按钮
    circle: Boolean,
    // 按钮大小
    size: String,
    // 禁用按钮
    disabled: Boolean,
    // 幽灵按钮
    ghost: Boolean
  },
  computed: {
    classes() {
      return {
        button: true,
        [`button-${this.type}`]: this.type,
        "button-ghost": this.ghost,
        circle: this.circle,
        [`button-${this.size}`]: this.size,
        "button-icon":
          this.icon || this.aftericon ? this.slots.length > 1 : false
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
