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
    class="relative isolate overflow-hidden border-t border-border/40 !px-5 py-24 sm:!px-8 lg:!px-12 lg:py-40"
  >
    <!-- Ambient background -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_50%_65%,rgb(37_99_235_/_0.09),transparent_75%)]"
      />

      <div
        class="absolute top-1/2 left-1/2 size-[min(90vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"
      />
    </div>

    <div class="mx-auto w-full max-w-350">
      <!-- Top label -->
      <motion.div
        :initial="reveal.initial"
        :while-in-view="reveal.whileInView"
        :viewport="{ once: true, amount: 0.4 }"
        :transition="{ duration: 0.65, ease }"
        class="flex flex-wrap items-center justify-between gap-4"
      >
        <div class="flex items-center gap-3">
          <span class="size-2 rounded-full bg-primary shadow-glow-sm" />

          <span
            class="font-mono text-[11px] tracking-[0.15em] text-fg-muted uppercase"
          >
            Есть проект? Давайте обсудим
          </span>
        </div>

        <span
          class="font-mono text-[11px] tracking-[0.15em] text-fg-dim uppercase"
        >
          04 / Contact
        </span>
      </motion.div>

      <!-- Main content -->
      <div class="flex flex-col items-start py-16 sm:py-24">
        <motion.h2
          id="cta-title"
          :initial="{ opacity: 0, y: 44 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.3 }"
          :transition="{ duration: 0.85, ease }"
          class="max-w-280 !text-[clamp(2.7rem,7vw,7rem)] !leading-[1.08] !font-medium !tracking-[-0.06em]"
        >
          Давайте создадим
          <span class="block text-primary"> что-то значимое. </span>
        </motion.h2>

        <motion.p
          :initial="reveal.initial"
          :while-in-view="reveal.whileInView"
          :viewport="{ once: true, amount: 0.3 }"
          :transition="{
            duration: 0.7,
            delay: 0.1,
            ease,
          }"
          class="mt-8 max-w-150 !text-base sm:!text-lg"
        >
          Расскажите о своей идее или задаче. Вместе обсудим, какое решение
          подойдёт вашему проекту.
        </motion.p>

        <!-- CTA link -->
        <motion.div
          :initial="reveal.initial"
          :while-in-view="reveal.whileInView"
          :viewport="{ once: true, amount: 0.3 }"
          :transition="{
            duration: 0.7,
            delay: 0.2,
            ease,
          }"
          class="mt-12"
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
                class="size-7 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-8"
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
      </div>

      <!-- Bottom divider -->
      <motion.div
        :initial="{ opacity: 0 }"
        :while-in-view="{ opacity: 1 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.8, ease }"
        class="flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-6"
      >
        <span
          class="font-mono text-[10px] tracking-[0.15em] text-fg-dim uppercase"
        >
          От идеи до реализации
        </span>

        <span
          class="font-mono text-[10px] tracking-[0.15em] text-fg-dim uppercase"
        >
          Ta1an © {{ new Date().getFullYear() }}
        </span>
      </motion.div>
    </div>
  </section>
</template>
