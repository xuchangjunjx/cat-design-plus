import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/main.sass";
import catDesign from "@/ui";
Vue.config.productionTip = false;
Vue.use(catDesign);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
