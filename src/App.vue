<script setup lang="ts">
import Background from "./components/layout/background.vue";
import Footer from "./components/layout/Footer.vue";
import Navbar from "./components/layout/Navbar.vue";
import { MotionConfig } from "motion-v";
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
