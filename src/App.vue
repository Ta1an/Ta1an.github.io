<script setup lang="ts">
import Background from "./components/layout/background.vue";
import Footer from "./components/layout/Footer.vue";
import Navbar from "./components/layout/Navbar.vue";
</script>

<template>
  <Navbar />
  <Background />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
