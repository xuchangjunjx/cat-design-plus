import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/main.sass";
import catDesign from "@/ui";

// import catDesign from "../cat-design/cat-design.umd";
// import "../cat-design/cat-design.css";

// import catDesign from "$cat-design/dist/cat-design.esm";
// import "$cat-design/dist/cat-design.css";

// import catDesign from "cat-design";
// import "cat-design/dist/cat-design.css";

// import catDesign from "cat-design-plus";
// import "cat-design-plus/dist/cat-design.css";

Vue.config.productionTip = false;
Vue.use(catDesign);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
