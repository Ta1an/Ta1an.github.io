<script setup lang="ts">
import { computed } from "vue";
import { motion } from "motion-v";
import Badge from "@/components/ui/badge.vue";
import CTASection from "@/components/ui/CTASection.vue";
import ProjectCard from "@/components/sections/projects/projectCard.vue";
import { projects } from "@/data/projects";
import { fadeUp, delayChildren, viewport } from "@/components/utils/motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator.vue";

const projectCount = computed(() => String(projects.length).padStart(2, "0"));

const projectLabel = computed(() => {
  const count = projects.length;
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return "реализованный проект";
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return "реализованных проекта";
  }

  return "реализованных проектов";
});
</script>

<template>
  <!-- Projects Hero -->
  <motion.section
    :variants="delayChildren"
    initial="hidden"
    animate="visible"
    aria-labelledby="projects-heading"
    id="projects"
    class="flex flex-col first-space pt-32 sm:pt-40 lg:pt-44"
  >
    <motion.div :variants="fadeUp">
      <Badge number="01" text="Selected Works" />
    </motion.div>

    <!-- Heading -->
    <div class="grid items-end grid-cols-1 lg:grid-cols-[1fr_0.5fr] second-space">
      <motion.h1 id="projects-heading" :variants="fadeUp" class="max-w-5xl">
        Работы, которые
        <span class="text-primary"> говорят за меня. </span>
      </motion.h1>

      <motion.p :variants="fadeUp" class="max-w-2xl">
        Подборка проектов, в которых я объединяю дизайн, разработку и внимание к
        деталям. Каждый из них — отдельная задача, подход и опыт.
      </motion.p>
    </div>

    <!-- Meta -->
    <motion.div
      :variants="fadeUp"
      class="flex mt-12 items-center justify-between gap-5 border-t border-border/40 pt-6 sm:mt-20"
    >
      <span
        class="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dim"
      >
        Portfolio / 2026
      </span>

      <ScrollIndicator />
    </motion.div>
  </motion.section>

  <!-- Projects Grid -->
  <section class="flex flex-col second-space">
    <motion.div
      :variants="delayChildren"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
      class="flex flex-col gap-3 border-b border-border/40 pb-6"
    >
      <motion.div :variants="fadeUp">
        <Badge number="02" text="All works" />
      </motion.div>
      <motion.div :variants="fadeUp" class="flex items-center gap-3">
        <span class="font-mono text-6xl font-medium text-primary">
          {{ projectCount }}
        </span>

        <span class="text-xl text-fg-muted">{{ projectLabel }}</span>
      </motion.div>
    </motion.div>

    <motion.div
      :variants="delayChildren"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
      class="grid grid-cols-1 second-space md:grid-cols-2"
    >
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.slug"
        :project="project"
        :index="index"
      />
    </motion.div>
  </section>

  <!-- CTA -->
  <CTASection
    label="Есть идея? Давайте обсудим"
    title="Следующий проект"
    color-title="может быть вашим."
    text="Открыт к новым проектам и
            профессиональному сотрудничеству.
            Давайте создадим что-то интересное."
    :primary-button="{
      text: 'Связаться со мной',
      to: '/contact',
    }"
  />
</template>
