<template>
  <div :class="{ modal: true, 'is-active': !!this.value }">
    <div class="modal-background" @click="clickMask"></div>
    <div class="modal-card shadow" :style="{ top }">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer">
          <Button type="default" @on-click="close">取消</Button>
          <Button type="primary" @on-click="close">确定</Button>
        </slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: Boolean,
    title: String,
    top: {
      type: String,
      default() {
        return "50px"
      }
    },
    clickMaskHide: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(n) {
      this.currentValue = n
    }
  },
  methods: {
    close() {
      this.currentValue = false
      this.$emit("input", false)
    },
    clickMask() {
      if (this.clickMaskHide) {
        this.close()
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.modal
  display: block
  opacity: 0
  z-index: -1
  transition: all 0.2s linear
  // transform: translateY(-80px)
  &.is-active
      opacity: 1
      z-index: 40
      transition: all 0.2s linear
      // transform: translateY(0px)
      .modal-background
        transition: all 0.2s linear
        background-color: rgba(35,45,65,.7)
      .modal-card
        transition: all 0.2s linear
        transform: translateY(0px)
.modal-background
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  transition: all 0.2s linear
  background-color: transparent
.modal-card
   transition: all 0.2s linear
   transform: translateY(-80px)
.modal-card-foot
  div
    flex: 1
    justify-content: right
.modal-card-body
  text-align: left
.modal-card-head,.modal-card-foot
  background-color: #fff
  border-color: #eff3f7
.modal-card-title
   text-align: left
</style>
