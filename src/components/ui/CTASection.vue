<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";
import { fadeUp, delayChildren, viewport } from "@/components/utils/motion";

type CtaButton = {
  text: string;
  to: string;
};

type Props = {
  label: string;
  title: string;
  colorTitle?: string;
  text: string;

  primaryButton: CtaButton;
};

defineProps<Props>();
</script>

<template>
  <motion.section
    :variants="delayChildren"
    initial="hidden"
    while-in-view="visible"
    :in-view-options="viewport"
    id="cta"
    aria-labelledby="cta-title"
    class="relative flex flex-col gap-10"
  >
    <!-- Top label -->
    <motion.div
      :variants="fadeUp"
      :in-view-options="viewport"
      class="flex items-center gap-3"
    >
      <span class="size-2 rounded-full bg-primary shadow-glow-sm" />

      <span
        class="font-mono text-[10px] tracking-[0.18em] text-fg-dim uppercase sm:text-xs"
      >
        {{ label }}
      </span>
    </motion.div>

    <!-- Main content -->

    <motion.h1 id="cta-title" :variants="fadeUp">
      {{ title }}
      <span class="block text-primary"> {{ colorTitle }} </span>
    </motion.h1>

    <motion.p :variants="fadeUp" class="max-w-xl">
      {{ text }}
    </motion.p>

    <!-- CTA link -->
    <motion.div :variants="fadeUp">
      <RouterLink
        :to="primaryButton.to"
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
          {{ primaryButton.text }}
        </span>
      </RouterLink>
    </motion.div>
  </motion.section>
</template>
