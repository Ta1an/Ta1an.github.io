
import {
  createRouter,
  createWebHistory,
} from "vue-router";

import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/pages/ProjectsPage.vue"),
    },
    {
      path: "/projects/:slug",
      name: "project-details",
      component: () => import("@/pages/ProjectDetailsPage.vue"),
      props: true,
    },
    {
      path: "/process",
      name: "process",
      component: () => import("@/pages/ProcessPage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/AboutPage.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/pages/ContactPage.vue"),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },
});

export default router;
