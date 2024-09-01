import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
Vue.use(Vuex);

Vue.use(VueRouter);

const files = require.context("@/router/modules", false, /\.js$/);
const routesModules = files
  .keys()
  .reduce((acc, cur) => acc.concat(files(cur).default), []);

export const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/home/base"
  },
  {
    path: "/home",
    name: "home",
    redirect: "/home/base",
    meta: {
      number: 1,
      title: "首页"
    },
    children: [
      {
        path: "base",
        name: "base",
        component: () => import("../components/base/Base.vue")
      }
    ]
  },
  ...routesModules
];

export const router = new VueRouter({
  mode: "history",
  routes
});
