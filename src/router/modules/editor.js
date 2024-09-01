export default [
  {
    path: "/test",
    name: "test",
    component: () => import("../../components/test/Test.vue"),
    meta: {
      hasTopNav: true,
      hasLeftNav: true
    }
  }
];
