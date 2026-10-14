<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";
import type { Project } from "@/data/projects";

const props = defineProps<{
  project: Project;
  index: number;
}>();

const number = computed(() => String(props.index + 1).padStart(2, "0"));

const ease = [0.22, 1, 0.36, 1] as const;
</script>

<template>
  <motion.article
    :initial="{ opacity: 0, y: 36 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :viewport="{ once: true, amount: 0.12 }"
    :transition="{ duration: 0.7, ease }"
    class="group border-t border-border/60 py-10 sm:py-14 lg:py-20"
  >
    <RouterLink
      :to="`/projects/${project.slug}`"
      class="block"
      :aria-label="`Подробнее о проекте ${project.title}`"
    >
      <!-- Project meta -->
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <span class="font-mono text-xs text-primary"> {{ number }} / </span>

          <span class="font-mono text-xs tracking-widest text-fg-dim uppercase">
            {{ project.category }}
          </span>
        </div>

        <span class="font-mono text-xs text-fg-dim">
          {{ project.year }}
        </span>
      </div>

      <!-- Screenshot -->
      <div
        class="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/60 bg-bg sm:aspect-[16/9] lg:aspect-[16/7]"
      >
        <img
          :src="project.image"
          :alt="`Интерфейс проекта ${project.title}`"
          loading="lazy"
          class="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />

        <div
          class="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"
        />

        <div
          class="absolute right-4 bottom-4 flex size-12 items-center justify-center rounded-full border border-white/20 bg-bg-dark/80 text-white opacity-100 backdrop-blur-md transition-all duration-300 group-hover:bg-primary-strong sm:right-6 sm:bottom-6 sm:size-15 lg:opacity-0 lg:translate-y-3 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
        >
          <Icon
            icon="tabler:arrow-up-right"
            class="size-6"
            aria-hidden="true"
          />
        </div>
      </div>

      <!-- Project details -->
      <div
        class="mt-7 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:items-start md:gap-12"
      >
        <div>
          <h2
            class="!text-[clamp(2.4rem,5vw,5rem)] !font-medium !tracking-[-0.055em] transition-colors duration-300 group-hover:text-primary"
          >
            {{ project.title }}
          </h2>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border border-border/70 px-3 py-1.5 text-xs text-fg-dim"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="flex flex-col items-start gap-5">
          <p class="max-w-lg">
            {{ project.description }}
          </p>

          <span
            class="inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-medium text-fg transition-colors group-hover:text-primary"
          >
            Подробнее о проекте
            <Icon
              icon="tabler:arrow-up-right"
              class="size-4"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </RouterLink>
  </motion.article>
</template>
