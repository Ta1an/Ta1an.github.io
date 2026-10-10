
<script setup lang="ts">
import { motion } from "motion-v";
import { Icon } from "@iconify/vue";
</script>

<template>
  <a
    href="#projects"
    class="group inline-flex items-center gap-4"
    aria-label="Прокрутить к разделу проектов"
  >
    <!-- Mouse outline -->
    <div
      class="relative flex h-11 w-7 items-start justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-primary"
    >
      <!-- Animated wheel -->
      <motion.span
        class="mt-2 h-2 w-0.5 rounded-full bg-primary"
        :animate="{
          y: [0, 12, 0],
          opacity: [1, 0.15, 1],
        }"
        :transition="{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
      />
    </div>

    <!-- Label -->
    <div class="flex flex-col gap-1">
      <span
        class="font-mono text-[10px] tracking-[0.18em] text-fg-dim uppercase transition-colors group-hover:text-fg"
      >
        Scroll to explore
      </span>

      <span
        class="flex items-center gap-2 text-xs text-fg-muted"
      >
        Смотреть проекты
        <Icon
          icon="tabler:arrow-down-right"
          class="size-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        />
      </span>
    </div>
  </a>
</template>
