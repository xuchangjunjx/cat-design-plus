import Dropdown from "./dropdown.vue";
import DropdownItem from "./dropdown-item";
export default {
  install(Vue) {
    Vue.component("Dropdown", Dropdown);
    Vue.component("DropdownItem", DropdownItem);
  }
};
