import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Compare from "../views/Compare.vue";
import Favorite from "../views/Favorite.vue";
import Stat from "../views/Stat.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/compare",
    name: "Compare",
    component: Compare,
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: Favorite,
  },
  {
    path: "/stat",
    name: "Stat",
    component: Stat,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
