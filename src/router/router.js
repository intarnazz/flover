import { createRouter, createWebHistory } from "vue-router";
import Home from "@/page/PageHome.vue";
import Shop from "@/page/PageShop.vue";
import About from "@/page/PageAbout.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/About",
    name: "About",
    component: About,
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
