<template>
  <article :class="classes">
    <div class="message-header">
      <p style="color: #fff">{{ text }}</p>
      <button class="delete" aria-label="delete" @click="handleClick"></button>
    </div>
  </article>
</template>
<script>
export default {
  name: "Message",
  props: {
    value: Boolean,
    text: String,
    type: String
  },
  computed: {
    classes() {
      return {
        message: true,
        [`is-${this.mapper[this.type]}`]: this.type,
        active: this.active
      };
    }
  },
  data() {
    return {
      mapper: {
        success: "success",
        error: "danger",
        warning: "warning",
        info: "info"
      },
      active: this.value
    };
  },
  watch: {
    value(n) {
      this.active = n;
    }
  },
  methods: {
    handleClick() {
      this.active = false;
      this.$emit("input", false);
    }
  }
};
</script>
<style lang="sass" scoped>
.message
  display: inline-block
  position: absolute
  width: 200px
  transition: all 0.2s linear
  left: 0
  right: 0
  top: 0
  opacity: 0
  margin: auto
  z-index: -1
  transform: translateY(-42px)
  &.active
      transition: all 0.2s linear
      top: 50px
      opacity: 1
      z-index: 99
      transform: translateY(0px)
  &-header
    border-radius: 4px
</style>
