<script setup lang="ts">
import Background from "./components/layout/background.vue";
import Footer from "./components/layout/Footer.vue";
import Navbar from "./components/layout/Navbar.vue";
import { MotionConfig } from "motion-v";
import { onMounted, onUnmounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis: Lenis | null = null;
const route = useRoute();

onMounted(() => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduceMotion) return;

  lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true,
    lerp: 0.075,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    anchors: true,
  });
});

watch(
  () => route.path,
  async () => {
    await nextTick();

    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true,
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  },
  { flush: "post" },
);

onUnmounted(() => {
  lenis?.destroy();
});
</script>

<template>
  <Navbar />
  <Background />
  <MotionConfig
    :transition="{
      type: 'tween',
      duration: 0.5,
      ease: 'easeOut',
    }"
  >
    <main>
      <RouterView />
    </main>
  </MotionConfig>
  <Footer />
</template>
