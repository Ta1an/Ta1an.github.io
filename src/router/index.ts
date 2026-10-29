import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

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

  scrollBehavior() {
    return false;
  },
});

export default router;
