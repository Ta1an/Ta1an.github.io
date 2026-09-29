<script setup lang="ts">
import Footer from "./components/layout/Footer.vue";
import Navbar from "./components/layout/Navbar.vue";
import HeroSection from "./components/sections/HeroSection.vue";

const sections = [HeroSection];
</script>

<template>
  <Navbar />
  <main class="flex flex-col gap-8">
    <div class="fixed inset-0 bg-dots opacity-50 -z-1" />
    <div
      class="pointer-events-none fixed -right-40 top-20 size-125 rounded-full bg-primary/10 blur-[120px]"
    />
    <div
      class="pointer-events-none fixed -left-40 bottom-0 size-100 rounded-full bg-primary/5 blur-[100px]"
    />

    <component v-for="section in sections" :is="section" />
  </main>
  <Footer />
</template>
