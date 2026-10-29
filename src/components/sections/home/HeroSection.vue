<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";
import ScrollIndicator from "@/components/ui/ScrollIndicator.vue";
import { RouterLink } from "vue-router";
import { fadeUp, delayChildren } from "@/components/utils/motion";

const bottomVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.8,
      ease: "easeOut",
    },
  },
} as const;
</script>

<template>
  <motion.section
    :variants="delayChildren"
    initial="hidden"
    animate="visible"
    id="home"
    class="flex flex-col items-center first-space pt-32 sm:pt-40 lg:pt-44"
  >
    <motion.div :variants="fadeUp" class="flex items-center gap-3">
      <span class="size-2 rounded-full bg-primary shadow-glow-sm" />

      <span
        class="font-mono text-[10px] tracking-[0.18em] text-fg-dim uppercase sm:text-xs"
      >
        FRONTEND DEVELOPER / АЛМАТЫ, КАЗАХСТАН
      </span>
    </motion.div>

    <!-- Heading -->
    <div class="flex flex-col second-space text-center items-center">
      <motion.h1 :variants="fadeUp">
        От идеи — до
        <span class="block text-primary"> цифрового продукта. </span>
      </motion.h1>

      <!-- Description -->
      <motion.p :variants="fadeUp" class="max-w-2xl">
        Разрабатываю современные сайты и веб-приложения. Объединяю продуманные
        интерфейсы, чистый код и внимание к деталям, чтобы создавать удобные и
        выразительные цифровые продукты.
      </motion.p>
    </div>

    <!-- CTA -->
    <motion.div
      :variants="fadeUp"
      class="flex flex-wrap items-center justify-center third-space"
    >
      <RouterLink to="/contact" class="btn btn-primary">
        Обсудить проект
        <Icon icon="tabler:arrow-up-right" class="size-5" />
      </RouterLink>

      <RouterLink to="/projects" class="btn btn-outline">
        Смотреть работы
        <Icon icon="tabler:arrow-up-right" class="size-5" />
      </RouterLink>
    </motion.div>

    <!-- Bottom -->
    <motion.div
      :variants="bottomVariants"
      initial="hidden"
      animate="visible"
      class="mt-16 flex items-center self-stretch justify-between gap-5 border-t border-border/40 pt-6 sm:mt-20"
    >
      <div class="flex flex-col gap-1">
        <span
          class="font-mono text-[10px] tracking-[0.15em] text-fg-dim uppercase"
        >
          Frontend developer
        </span>

        <span class="text-xs text-fg-muted"> Алматы, Казахстан </span>
      </div>

      <ScrollIndicator />
    </motion.div>
  </motion.section>
</template>
