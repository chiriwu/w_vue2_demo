// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { router } from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
import store from "./store/index.js";

Vue.config.productionTip = false;

router.beforeEach(async (to, from, next) => {
  next();
  // if (store.state.token && to.name === "login") {
  //   // store.commit("setNav", noNavPages.includes(to.name));
  //   next({ name: "home" });
  // } else {
  //   // store.commit("setNav", noNavPages.includes(to.name));
  //   next();
  // }
});
router.afterEach((to, from) => {
  store.commit("isHasLeft", to.meta.hasLeftNav);
  store.commit("isHasTop", to.meta.hasTopNav);
  // to and from are both route objects.
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
