<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";
import ScrollIndicator from "@/components/ui/ScrollIndicator.vue";
import { RouterLink } from "vue-router";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};
</script>

<template>
  <section
    id="home"
    class="flex flex-col gap-10 pt-32 sm:pt-40 lg:pt-44"
  >
    <!-- Intro -->
    <div class="flex flex-col gap-8 items-center">
      <motion.div
        :initial="reveal.initial"
        :animate="reveal.animate"
        :transition="{ duration: 0.7, ease }"
        class="flex items-center gap-3"
      >
        <span class="size-2 rounded-full bg-primary shadow-glow-sm" />

        <span
          class="font-mono text-[10px] tracking-[0.18em] text-fg-dim uppercase sm:text-xs"
        >
          Независимый веб-разработчик / Казахстан
        </span>
      </motion.div>

      <!-- Heading -->
      <div class="flex flex-col gap-6 text-center items-center">
        <motion.h1
          :initial="{ opacity: 0, y: 45 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.95,
            delay: 0.12,
            ease,
          }"
        >
          От идеи — до
          <span class="block text-primary"> цифрового продукта. </span>
        </motion.h1>

        <!-- Description -->
        <motion.p
          :initial="reveal.initial"
          :animate="reveal.animate"
          :transition="{
            duration: 0.75,
            delay: 0.26,
            ease,
          }"
          class="max-w-2xl"
        >
          Создаю сайты и веб-приложения для бизнеса и личных проектов.
          Продумываю дизайн, функциональность и удобство — от первой идеи до
          запуска.
        </motion.p>
      </div>

      <!-- CTA -->
      <motion.div
        :initial="reveal.initial"
        :animate="reveal.animate"
        :transition="{
          duration: 0.7,
          delay: 0.38,
          ease,
        }"
        class="flex flex-wrap items-center justify-center gap-4"
      >
        <RouterLink to="/contacts" class="btn btn-primary">
          Обсудить проект
          <Icon icon="tabler:arrow-up-right" class="size-5" />
        </RouterLink>

        <RouterLink to="/projects" class="btn btn-outline">
          Смотреть работы
          <Icon
            icon="tabler:arrow-up-right"
            class="size-5"
          />
        </RouterLink>
      </motion.div>
    </div>

    <!-- Bottom -->
    <div
      class="mt-16 flex items-center justify-between gap-5 border-t border-border/40 pt-6 sm:mt-20"
    >
      <div class="flex flex-col gap-1">
        <span
          class="font-mono text-[10px] tracking-[0.15em] text-fg-dim uppercase"
        >
          Independent developer
        </span>

        <span class="text-xs text-fg-muted"> Алматы, Казахстан </span>
      </div>

      <ScrollIndicator />
    </div>
  </section>
</template>
