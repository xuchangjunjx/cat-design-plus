// 记得把main.js这个删了
import "@/ui/style/index.sass";
import Button, { types } from "./button/button.vue";
// 赋给Button 不然就丢了 或者直接把type写在组件里
Button.types = types;
// 将Button再暴露出来
export { Button };
// 临时用
const components = {
  Button
};
// 提供install函数，这样就能Vue.use
function install(Vue) {
  Object.keys(components).forEach(key => {
    // 注册组件
    Vue.component(key, components[key]);
  });
}
// 这里...components,后面就可以直接 结构使用这里的组件了
export default {
  ...components,
  install
};
