<template>
  <div class="dropdown" v-clickout="closeDropdown">
    <div class="dropdown-trigger" @click="toggleActive">
      <!--触发的元素-->
      <slot></slot>
    </div>
    <div :class="{ 'dropdown-menu': true, 'is-active': this.active }">
      <div class="dropdown-content">
        <!--真实的下拉内容-->
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      Dropdown: this
    };
  },
  props: {
    value: String
  },
  watch: {
    value(n) {
      this.currentValue = n;
    }
  },
  data() {
    return {
      active: false,
      currentValue: this.value
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
    closeDropdown() {
      this.active = false;
    },
    triggerClick(name) {
      this.currentValue = name;
      this.$emit("input", name);
      this.toggleActive();
      this.$emit("on-change", name);
    }
  }
};
</script>
<style lang="sass" scoped>
.dropdown-menu
  display: block
  opacity: 0
  top: 0
  z-index: -1
  transition: all 0.2s linear
  &.is-active
      opacity: 1
      top: 100%
      z-index: 1
      transition: all 0.2s linear
a.dropdown-item.is-active
  background-color: #00d1b2
</style>
