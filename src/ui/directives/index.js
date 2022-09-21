/**
 *  自定义指令
 *  */
import clickout from "./clickout";

const directives = [clickout];
export default {
  install(Vue) {
    directives.forEach(el => {
      Vue.directive(el.name, el);
    });
  }
};
