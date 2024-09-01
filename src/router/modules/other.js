export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../../components/login/Login.vue"),
    meta: {
      hasTopNav: false,
      hasLeftNav: false
    }
  }
];
