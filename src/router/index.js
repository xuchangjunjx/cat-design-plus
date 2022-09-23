import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/modal",
    name: "Modal",
    component: () =>
      import(/* webpackChunkName: "modal" */ "../views/modal.vue")
  },
  {
    path: "/message",
    name: "message",
    component: () =>
      import(/* webpackChunkName: "modal" */ "../views/message.vue")
  },
  {
    path: "/dropdown",
    name: "dropdown",
    component: () =>
      import(/* webpackChunkName: "modal" */ "../views/dropdown.vue")
  }
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes
});

export default router;
