<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";
import { RouterLink } from "vue-router";
import type { Project } from "@/data/projects";
import { fadeUp } from "@/components/utils/motion";

const props = defineProps<{
  project: Project;
  index: number;
}>();

const number = computed(() => String(props.index + 1).padStart(2, "0"));
</script>

<template>
  <motion.article :variants="fadeUp" class="group">
    <RouterLink
      :to="`/projects/${project.slug}`"
      class="block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-primary"
    >
      <!-- Preview -->
      <div
        class="relative aspect-4/3 overflow-hidden rounded-xl border border-border/60 bg-bg-dark sm:aspect-video"
      >
        <!-- Screenshot -->
        <img
          :src="project.image"
          :alt="`Скриншот проекта ${project.title}`"
          loading="lazy"
          decoding="async"
          class="block size-full object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045] motion-safe:group-focus-visible:scale-[1.045]"
        />

        <!-- Overlay -->
        <div
          class="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15 group-focus-visible:bg-black/15"
          aria-hidden="true"
        />

        <!-- Arrow -->
        <div
          class="absolute right-4 bottom-4 flex size-12 items-center justify-center rounded-full border border-white/20 bg-bg-dark/80 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-primary-strong group-focus-visible:bg-primary-strong sm:right-5 sm:bottom-5 sm:size-14 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100"
          aria-hidden="true"
        >
          <Icon icon="tabler:arrow-up-right" class="size-6" />
        </div>

        <!-- Number -->
        <div
          class="absolute top-4 left-4 rounded-md border border-white/10 bg-bg-dark/75 px-3 py-2 font-mono text-[10px] text-white backdrop-blur-md"
          aria-hidden="true"
        >
          / {{ number }}
        </div>
      </div>

      <!-- Information -->
      <div class="flex flex-col gap-5 pt-6">
        <!-- Meta -->
        <div class="flex flex-wrap items-center justify-between gap-3">
          <span
            class="font-mono text-[10px] uppercase tracking-[0.15em] text-primary sm:text-xs"
          >
            {{ project.category }}
          </span>

          <span class="font-mono text-xs text-fg-dim">
            {{ project.year }}
          </span>
        </div>

        <!-- Title -->
        <h3
          class="transition-colors duration-300 group-hover:text-primary group-focus-visible:text-primary"
        >
          {{ project.title }}
        </h3>

        <!-- Description -->
        <p class="max-w-xl">
          {{ project.description }}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full border border-border/60 px-3 py-1.5 font-mono text-[10px] text-fg-dim sm:text-xs"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Bottom Link -->
        <div
          class="mt-2 flex items-center justify-between gap-4 border-t border-border/40 pt-5"
        >
          <span
            class="text-sm font-medium text-fg transition-colors duration-300 group-hover:text-primary group-focus-visible:text-primary"
          >
            Подробнее о проекте
          </span>

          <Icon
            icon="tabler:arrow-up-right"
            class="size-5 text-primary transition-transform duration-300 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </RouterLink>
  </motion.article>
</template>
