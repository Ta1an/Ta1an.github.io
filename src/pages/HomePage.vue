<script setup lang="ts">
import HeroSection from "@/components/sections/home/HeroSection.vue";
import ProjectsSection from "@/components/sections/home/ProjectsSection.vue";
import ServicesSection from "@/components/sections/home/ServicesSection.vue";
import ExpertiseSection from "@/components/sections/home/ExpertiseSection.vue";
import CTASection from "@/components/ui/CTASection.vue";
</script>

<template>
  <HeroSection />
  <ProjectsSection />
  <ExpertiseSection />
  <ServicesSection />
  <CTASection
    label="Есть проект? Давайте обсудим"
    title="Давайте создадим"
    color-title="что-то значимое."
    text="Расскажите о своей идее или задаче. Вместе обсудим, какое решение подойдёт
      вашему проекту."
    :primary-button="{
      text: ' Обсудить проект',
      to: '/contact',
    }"
  />
</template>
