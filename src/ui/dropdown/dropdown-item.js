export default {
  inject: ["Dropdown"],
  props: {
    name: String,
    active: Boolean
  },
  render(h) {
    return h(
      "a",
      {
        on: {
          click: () => {
            this.Dropdown.triggerClick(this.name);
          }
        },
        class: {
          "dropdown-item": true,
          "is-active": this.active || this.Dropdown.currentValue === this.name
        }
      },
      this.$slots.default
    );
  }
};
