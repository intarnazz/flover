import { createRouter, createWebHistory } from "vue-router";
import Home from "@/page/PageHome.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/:catchAll(.*)",
  //   name: "Page404",
  //   component: Page404,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
