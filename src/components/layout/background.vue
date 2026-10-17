<script setup lang="ts">
import { motion, useReducedMotion } from "motion-v";

const shouldReduceMotion = useReducedMotion();
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 -z-1 overflow-hidden"
  >
    <!-- Main Glow -->
    <div class="absolute inset-0 grid place-items-center">
      <motion.div
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{
          duration: 1.5,
          ease: 'easeOut',
        }"
        class="size-[min(85vw,1000px)]"
      >
        <motion.div
          class="editorial-glow size-full rounded-full"
          :animate="
            shouldReduceMotion
              ? { scale: 1, opacity: 0.6 }
              : {
                  scale: [1, 1.14, 1],
                  opacity: [0.5, 0.85, 0.5],
                }
          "
          :transition="
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  type: 'tween',
                  duration: 8,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }
          "
        />
      </motion.div>
    </div>

    <!-- Base Grid -->
    <motion.div
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{
        duration: 1.4,
        delay: 0.3,
        ease: 'easeOut',
      }"
      class="absolute inset-0"
    >
      <div class="editorial-grid absolute inset-0" />
    </motion.div>

    <!-- Highlighted Grid -->
    <motion.div
      class="editorial-grid editorial-grid--highlight absolute inset-0"
      :animate="
        shouldReduceMotion ? { opacity: 0.2 } : { opacity: [0.1, 0.45, 0.1] }
      "
      :transition="
        shouldReduceMotion
          ? { duration: 0 }
          : {
              type: 'tween',
              duration: 8,
              ease: 'easeInOut',
              repeat: Infinity,
            }
      "
    />
  </div>
</template>
