
<script setup lang="ts">
import { computed, ref } from "vue";
import { motion } from "motion-v";
import ProjectCard from "@/components/sections/projects/projectCard.vue";
import { projects } from "@/data/projects";

type Filter = "all" | "website" | "application";

const activeFilter = ref<Filter>("all");

const filters: { label: string; value: Filter }[] = [
  { label: "Все проекты", value: "all" },
  { label: "Сайты", value: "website" },
  { label: "Веб-приложения", value: "application" },
];

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") return projects;

  return projects.filter((project) =>
    activeFilter.value === "website"
      ? project.slug === "tanais"
      : project.slug === "autorent",
  );
});

const ease = [0.22, 1, 0.36, 1] as const;
</script>

<template>
  <div>
    <section
      class="!px-5 pt-36 pb-10 sm:!px-8 sm:pt-44 lg:!px-12 lg:pt-52"
    >
      <div class="mx-auto max-w-350">
        <motion.div
          :initial="{ opacity: 0, y: 32 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, ease }"
        >
          <div class="mb-8 flex items-center gap-3">
            <span class="font-mono text-xs text-primary">
              01 /
            </span>

            <span
              class="font-mono text-xs tracking-widest text-fg-dim uppercase"
            >
              Portfolio / Selected work
            </span>
          </div>

          <h1
            class="max-w-250 !text-[clamp(3.5rem,9vw,9rem)] !leading-[1.05] !font-medium !tracking-[-0.065em]"
          >
            Мои <span class="text-primary">проекты.</span>
          </h1>

          <div
            class="mt-9 flex flex-wrap items-end justify-between gap-8"
          >
            <p class="max-w-155 !text-base sm:!text-lg">
              От презентационных сайтов до функциональных
              веб-приложений. Каждый проект — отдельная задача,
              продуманный интерфейс и внимание к деталям.
            </p>

            <span
              class="font-mono text-xs tracking-wider text-fg-dim uppercase"
            >
              {{ String(projects.length).padStart(2, "0") }}
              проекта
            </span>
          </div>
        </motion.div>
      </div>
    </section>

    <section class="!px-5 pt-6 pb-24 sm:!px-8 lg:!px-12">
      <div class="mx-auto max-w-350">
        <!-- Filters -->
        <div class="flex flex-wrap gap-2 pb-8">
          <button
            v-for="filter in filters"
            :key="filter.value"
            type="button"
            :aria-pressed="activeFilter === filter.value"
            class="cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300"
            :class="
              activeFilter === filter.value
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border text-fg-dim hover:border-primary/40 hover:text-fg'
            "
            @click="activeFilter = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Projects -->
        <div v-if="filteredProjects.length">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.slug"
            :project="project"
            :index="projects.indexOf(project)"
          />
        </div>

        <p v-else class="py-16 text-center">
          Пока нет проектов в этой категории.
        </p>
      </div>
    </section>
  </div>
</template>
