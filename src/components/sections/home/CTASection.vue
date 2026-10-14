<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: {
    opacity: 0,
    y: 32,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
};
</script>

<template>
  <section
    id="cta"
    aria-labelledby="cta-title"
    class="relative flex flex-col gap-10"
  >
    <!-- Ambient background -->

    <!-- Top label -->
    <motion.div
      :initial="reveal.initial"
      :while-in-view="reveal.whileInView"
      :transition="{ duration: 0.7, ease }"
      :in-view-options="{ once: true, amount: 0.2 }"
      class="flex items-center gap-3"
    >
      <span class="size-2 rounded-full bg-primary shadow-glow-sm" />

      <span
        class="font-mono text-[10px] tracking-[0.18em] text-fg-dim uppercase sm:text-xs"
      >
        Есть проект? Давайте обсудим
      </span>
    </motion.div>

    <!-- Main content -->

    <motion.h1
      id="cta-title"
      :initial="{ opacity: 0, y: 44 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true, amount: 0.3 }"
      :transition="{ duration: 0.85, ease }"
    >
      Давайте создадим
      <span class="block text-primary"> что-то значимое. </span>
    </motion.h1>

    <motion.p
      :initial="reveal.initial"
      :while-in-view="reveal.whileInView"
      :in-view-options="{ once: true, amount: 0.3 }"
      :transition="{
        duration: 0.7,
        delay: 0.1,
        ease,
      }"
      class="max-w-xl"
    >
      Расскажите о своей идее или задаче. Вместе обсудим, какое решение подойдёт
      вашему проекту.
    </motion.p>

    <!-- CTA link -->
    <motion.div
      :initial="reveal.initial"
      :while-in-view="reveal.whileInView"
      :in-view-options="{ once: true, amount: 0.3 }"
      :transition="{
        duration: 0.7,
        delay: 0.2,
        ease,
      }"
    >
      <RouterLink
        to="/contact"
        class="cta-link group inline-flex items-center gap-5 sm:gap-7"
      >
        <span
          class="flex size-15 shrink-0 items-center justify-center rounded-full bg-primary-strong text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow sm:size-19"
        >
          <Icon
            icon="tabler:arrow-up-right"
            class="size-7 sm:size-8"
            aria-hidden="true"
          />
        </span>

        <span
          class="border-b border-fg/50 pb-2 text-xl font-medium tracking-tight transition-colors duration-300 group-hover:border-primary group-hover:text-primary sm:text-3xl"
        >
          Обсудить проект
        </span>
      </RouterLink>
    </motion.div>
  </section>
</template>
