
<script setup lang="ts">
import { computed, watch } from "vue";
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";
import { useRoute } from "vue-router";

import { projects } from "@/data/projects";

const route = useRoute();

const project = computed(() =>
  projects.find((item) => item.slug === route.params.slug),
);

const nextProject = computed(() => {
  if (!project.value) return null;

  const index = projects.findIndex(
    (item) => item.slug === project.value?.slug,
  );

  return projects[(index + 1) % projects.length] ?? null;
});

const gallery = computed(() =>
  project.value?.gallery.filter(
    (image) => image !== project.value?.image,
  ) ?? [],
);

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

// Browser title
watch(
  project,
  (value) => {
    document.title = value
      ? `${value.title} — Проекты | Ta1an`
      : "Проект не найден | Ta1an";
  },
  { immediate: true },
);
</script>

<template>
  <div v-if="project" :key="project.slug">
    <!-- Project Hero -->
    <section
      class="!px-5 pt-32 pb-12 sm:!px-8 sm:pt-40 lg:!px-12 lg:pt-48"
    >
      <div class="mx-auto max-w-350">
        <!-- Breadcrumb -->
        <motion.div
          :initial="{ opacity: 0, y: 16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, ease }"
        >
          <RouterLink
            to="/projects"
            class="group inline-flex items-center gap-3 text-sm text-fg-dim transition-colors hover:text-primary"
          >
            <Icon
              icon="tabler:arrow-left"
              class="size-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Все проекты
          </RouterLink>
        </motion.div>

        <!-- Project heading -->
        <motion.div
          :initial="{ opacity: 0, y: 35 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.1, ease }"
          class="mt-12"
        >
          <div
            class="mb-7 flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider uppercase"
          >
            <span class="text-primary">
              Case Study /
            </span>

            <span class="text-fg-dim">
              {{ project.category }}
            </span>
          </div>

          <h1
            class="!text-[clamp(3.5rem,11vw,10rem)] !leading-none !font-medium !tracking-[-0.07em]"
          >
            {{ project.title }}<span class="text-primary">.</span>
          </h1>

          <div
            class="mt-9 flex flex-wrap items-end justify-between gap-8"
          >
            <p
              class="max-w-180 !text-[clamp(1.125rem,2vw,1.75rem)] !leading-relaxed"
            >
              {{ project.subtitle }}
            </p>

            <a
              v-if="project.websiteUrl"
              :href="project.websiteUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-medium text-fg transition-colors hover:text-primary"
            >
              Посетить сайт
              <Icon
                icon="tabler:arrow-up-right"
                class="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <!-- Main screenshot -->
    <section class="!px-5 py-8 sm:!px-8 lg:!px-12">
      <div class="mx-auto max-w-350">
        <motion.div
          :initial="{ opacity: 0, y: 40 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.1 }"
          :transition="{ duration: 0.85, ease }"
          class="overflow-hidden rounded-xl border border-border/60 bg-bg"
        >
          <img
            :src="project.image"
            :alt="`Главный экран проекта ${project.title}`"
            class="block w-full"
          />
        </motion.div>
      </div>
    </section>

    <!-- Project metadata -->
    <section class="!px-5 py-14 sm:!px-8 lg:!px-12">
      <div
        class="mx-auto grid max-w-350 grid-cols-2 gap-8 border-y border-border/60 py-8 md:grid-cols-4"
      >
        <div>
          <div class="project-meta-label">Проект</div>
          <div class="mt-3 text-base text-fg">
            {{ project.title }}
          </div>
        </div>

        <div>
          <div class="project-meta-label">Категория</div>
          <div class="mt-3 text-base text-fg">
            {{ project.category }}
          </div>
        </div>

        <div>
          <div class="project-meta-label">Моя роль</div>
          <div class="mt-3 text-base text-fg">
            {{ project.role }}
          </div>
        </div>

        <div>
          <div class="project-meta-label">Год</div>
          <div class="mt-3 text-base text-fg">
            {{ project.year }}
          </div>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="!px-5 py-16 sm:!px-8 lg:!px-12 lg:py-25">
      <div
        class="mx-auto grid max-w-350 gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
      >
        <motion.div
          :initial="reveal.initial"
          :while-in-view="reveal.whileInView"
          :viewport="{ once: true }"
          :transition="{ duration: 0.7, ease }"
        >
          <span class="project-eyebrow">
            01 / О проекте
          </span>
        </motion.div>

        <motion.div
          :initial="reveal.initial"
          :while-in-view="reveal.whileInView"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.7, ease }"
        >
          <h2 class="project-section-title">
            Знакомство
            <span class="text-primary">с проектом.</span>
          </h2>

          <p class="mt-8 max-w-190 !text-lg lg:!text-xl">
            {{ project.overview }}
          </p>
        </motion.div>
      </div>
    </section>

    <!-- Challenge and solution -->
    <section
      class="border-y border-border/40 bg-bg/30 !px-5 py-20 sm:!px-8 lg:!px-12 lg:py-30"
    >
      <div class="mx-auto grid max-w-350 gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          :initial="reveal.initial"
          :while-in-view="reveal.whileInView"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.7, ease }"
        >
          <span class="project-eyebrow">
            02 / Задача
          </span>

          <h2 class="project-section-title mt-7">
            Что нужно
            <span class="text-primary">было решить.</span>
          </h2>

          <p class="mt-7">
            {{ project.challenge }}
          </p>
        </motion.div>

        <motion.div
          :initial="reveal.initial"
          :while-in-view="reveal.whileInView"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.7, delay: 0.1, ease }"
        >
          <span class="project-eyebrow">
            03 / Решение
          </span>

          <h2 class="project-section-title mt-7">
            Как я
            <span class="text-primary">подошёл к задаче.</span>
          </h2>

          <p class="mt-7">
            {{ project.solution }}
          </p>
        </motion.div>
      </div>
    </section>

    <!-- Features -->
    <section class="!px-5 py-24 sm:!px-8 lg:!px-12 lg:py-36">
      <div class="mx-auto max-w-350">
        <motion.div
          :initial="reveal.initial"
          :while-in-view="reveal.whileInView"
          :viewport="{ once: true }"
          :transition="{ duration: 0.7, ease }"
          class="mb-14"
        >
          <span class="project-eyebrow">
            04 / Возможности
          </span>

          <h2 class="project-section-title mt-7">
            Внимание
            <span class="text-primary">к деталям.</span>
          </h2>
        </motion.div>

        <div class="grid gap-x-12 md:grid-cols-2">
          <motion.div
            v-for="(feature, index) in project.features"
            :key="feature.title"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.2 }"
            :transition="{
              duration: 0.6,
              delay: (index % 2) * 0.08,
              ease,
            }"
            class="border-t border-border/60 py-8 sm:py-10"
          >
            <div class="flex items-start gap-5">
              <span class="pt-1 font-mono text-xs text-primary">
                {{ String(index + 1).padStart(2, "0") }}
              </span>

              <div>
                <h3 class="!text-xl !font-medium sm:!text-2xl">
                  {{ feature.title }}
                </h3>

                <p class="mt-4 max-w-md !text-sm sm:!text-base">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <!-- Additional gallery -->
    <section
      v-if="gallery.length"
      class="!px-5 pb-20 sm:!px-8 lg:!px-12 lg:pb-32"
    >
      <div class="mx-auto max-w-350">
        <div class="mb-10">
          <span class="project-eyebrow">
            05 / Интерфейс
          </span>

          <h2 class="project-section-title mt-6">
            Ближе
            <span class="text-primary">к проекту.</span>
          </h2>
        </div>

        <div class="grid gap-6">
          <motion.div
            v-for="(image, index) in gallery"
            :key="image"
            :initial="{ opacity: 0, y: 25 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.1 }"
            :transition="{ duration: 0.7, ease }"
            class="overflow-hidden rounded-xl border border-border/60 bg-bg"
          >
            <img
              :src="image"
              :alt="`Дополнительный экран проекта ${project.title}, ${index + 1}`"
              loading="lazy"
              class="block w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section
      class="border-t border-border/40 !px-5 py-20 sm:!px-8 lg:!px-12"
    >
      <div
        class="mx-auto grid max-w-350 gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
      >
        <div>
          <span class="project-eyebrow">
            06 / Инструменты
          </span>
        </div>

        <div>
          <h2 class="project-section-title">
            Технологии
            <span class="text-primary">проекта.</span>
          </h2>

          <div class="mt-9 flex flex-wrap gap-3">
            <span
              v-for="technology in project.technologies"
              :key="technology"
              class="rounded-full border border-border px-5 py-2.5 text-sm text-fg-muted transition-colors hover:border-primary/40 hover:text-fg"
            >
              {{ technology }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Next project -->
    <section
      v-if="nextProject && nextProject.slug !== project.slug"
      class="border-t border-border/60 !px-5 py-24 sm:!px-8 lg:!px-12 lg:py-36"
    >
      <div class="mx-auto max-w-350">
        <RouterLink
          :to="`/projects/${nextProject.slug}`"
          class="group block"
        >
          <div class="flex items-center justify-between gap-4">
            <span class="project-eyebrow">
              Следующий проект
            </span>

            <Icon
              icon="tabler:arrow-up-right"
              class="size-7 text-primary transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 sm:size-9"
              aria-hidden="true"
            />
          </div>

          <h2
            class="mt-8 !text-[clamp(3.5rem,10vw,9rem)] !leading-none !font-medium !tracking-[-0.065em] transition-colors duration-300 group-hover:text-primary"
          >
            {{ nextProject.title }}
            <span class="text-primary">.</span>
          </h2>

          <div
            class="mt-8 flex items-center justify-between gap-5 border-t border-border/60 pt-6"
          >
            <span class="text-sm text-fg-muted">
              {{ nextProject.category }}
            </span>

            <span class="font-mono text-xs text-fg-dim">
              {{ nextProject.year }}
            </span>
          </div>
        </RouterLink>
      </div>
    </section>
  </div>

  <!-- Unknown project -->
  <section
    v-else
    class="flex min-h-svh flex-col items-center justify-center gap-6 text-center"
  >
    <span class="font-mono text-xs text-primary">
      404 / PROJECT NOT FOUND
    </span>

    <h1>Проект не найден.</h1>

    <p>
      Возможно, ссылка устарела или проект был перемещён.
    </p>

    <RouterLink to="/projects" class="btn btn-primary">
      Все проекты
      <Icon icon="tabler:arrow-up-right" class="size-5" />
    </RouterLink>
  </section>
</template>

<style scoped>

@reference '@/assets/main.css';


.project-eyebrow {
  @apply font-mono text-xs tracking-[0.15em] text-primary uppercase;
}

.project-section-title {
  @apply text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.1] font-medium tracking-[-0.05em];
}

.project-meta-label {
  @apply font-mono text-[11px] tracking-[0.12em] text-fg-dim uppercase;
}
</style>
