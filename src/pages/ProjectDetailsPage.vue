<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/caseStudies";
import { fadeUp, delayChildren, viewport } from "@/components/utils/motion";

const route = useRoute();

const slug = computed(() => String(route.params.slug ?? ""));

const project = computed(() =>
  projects.find((item) => item.slug === slug.value),
);

const caseStudy = computed(() => caseStudies[slug.value]);

const currentIndex = computed(() =>
  projects.findIndex((item) => item.slug === slug.value),
);

const previousProject = computed(() => {
  if (currentIndex.value === -1 || projects.length < 2) {
    return null;
  }

  const index = (currentIndex.value - 1 + projects.length) % projects.length;

  return projects[index];
});

const nextProject = computed(() => {
  if (currentIndex.value === -1 || projects.length < 2) {
    return null;
  }

  const index = (currentIndex.value + 1) % projects.length;

  return projects[index];
});
</script>

<template>
  <div v-if="project" :key="slug">
    <!-- 01 / HERO -->
    <section class="flex flex-col first-space pt-32 sm:pt-40 lg:pt-44">
      <motion.div
        :variants="delayChildren"
        initial="hidden"
        animate="visible"
        class="flex flex-col second-space"
      >
        <motion.nav
          :variants="fadeUp"
          aria-label="Навигация"
          class="flex flex-wrap items-center gap-3 font-mono text-sm text-fg-dim"
        >
          <RouterLink
            to="/projects"
            class="transition-colors hover:text-primary"
          >
            Проекты
          </RouterLink>

          <span>/</span>

          <span class="text-primary">
            {{ project.title }}
          </span>
        </motion.nav>

        <!-- Heading -->
        <motion.div
          :variants="fadeUp"
          :in-view-options="viewport"
          class="flex flex-col second-space"
        >
          <span
            class="font-mono text-xs uppercase tracking-[0.15em] text-primary"
          >
            {{ project.category }} / {{ project.year }}
          </span>
          <div
            class="grid gap-6 lg:grid-cols-2 border-b border-border/40 pb-4"
          >
            <motion.div class="flex flex-col items-start third-space">
              <h1>
                {{ project.title }}
              </h1>
            </motion.div>
            <motion.div
              :variants="fadeUp"
              class="flex flex-wrap items-center third-space lg:justify-self-end"
            >
              <a
                v-if="caseStudy?.website?.liveUrl"
                :href="caseStudy.website.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                Открыть сайт
                <Icon icon="tabler:arrow-up-right" class="size-5" />
              </a>

              <a
                v-if="caseStudy?.website?.githubUrl"
                :href="caseStudy.website.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2 text-sm transition-colors hover:text-primary"
              >
                <Icon icon="tabler:brand-github" class="size-5" />
                GitHub
              </a>

              <RouterLink
                to="/projects"
                class="group inline-flex items-center gap-2 text-sm transition-colors hover:text-primary"
              >
                Все работы
                <Icon icon="tabler:arrow-up-right" class="size-5" />
              </RouterLink>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        :variants="fadeUp"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        class="editorial-browser overflow-hidden rounded-xl"
      >
        <!-- Browser header -->
        <div
          class="relative flex items-center justify-between border-b border-border/60 bg-bg-light p-4"
        >
          <div class="flex gap-1.5">
            <span class="size-3 rounded-full bg-red-400/80" />
            <span class="size-3 rounded-full bg-yellow-400/80" />
            <span class="size-3 rounded-full bg-green-400/80" />
          </div>

          <span class="truncate font-mono text-lg text-fg-dim">
            {{ project.domain }}
          </span>

          <Icon
            icon="tabler:lock"
            class="size-5 text-fg-dim"
            aria-hidden="true"
          />
        </div>

        <!-- Fixed image area -->
        <div class="relative aspect-video overflow-hidden">
          <img
            :src="project.image"
            :alt="`Скриншот проекта ${project.title}`"
            class="absolute inset-0 bg-bg-dark block size-full object-contain sm:object-cover sm:object-top"
            draggable="false"
          />
        </div>
      </motion.div>

      <motion.div
        :variants="fadeUp"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        class="grid grid-cols-1 second-space lg:grid-cols-[0.5fr_1fr] border-b border-border/40 pb-8"
      >
        <div v-if="caseStudy" class="flex flex-col">
          <div
            v-for="item in [
              { label: 'Статус', value: caseStudy.details.status },
              { label: 'Тип', value: caseStudy.details.type },
              { label: 'Сфера', value: caseStudy.details.industry },
              { label: 'Платформа', value: caseStudy.details.platform },
            ]"
            :key="item.label"
            class="flex justify-between items-center border-t py-5 border-border/80"
          >
            <span class="font-mono text-base text-fg-dim">
              {{ item.label }}
            </span>

            <span class="text-base font-medium">
              {{ item.value }}
            </span>
          </div>

          <div
            v-if="caseStudy.website"
            class="flex justify-between items-center border-y border-border/80 py-5"
          >
            <span class="font-mono text-base text-fg-dim"> Сайт </span>
            <a
              :href="caseStudy.website.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-base font-medium transition-colors hover:text-primary"
            >
              {{ caseStudy.website.label }} ↗
            </a>
          </div>
        </div>

        <div
          v-if="caseStudy"
          aria-labelledby="about-project-heading"
          class="flex flex-col second-space justify-self-end"
        >
          <h2 id="about-project-heading">
            О проекте<span class="text-primary">.</span>
          </h2>

          <div class="flex max-w-4xl flex-col third-space">
            <p
              v-for="(paragraph, index) in caseStudy.about"
              :key="index"
              class="leading-relaxed text-fg-muted"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        :variants="fadeUp"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        v-if="caseStudy?.features.length"
        aria-labelledby="features-heading"
        class="flex flex-col second-space"
      >
        <h2 id="features-heading">
          Что есть на сайте<span class="text-primary">.</span>
        </h2>

        <ul class="grid third-space md:grid-cols-2">
          <li
            v-for="feature in caseStudy.features"
            :key="feature"
            class="flex items-start gap-3"
          >
            <Icon
              icon="tabler:check"
              class="mt-1 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />

            <span class="text-fg-muted">
              {{ feature }}
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.nav
        v-if="previousProject && nextProject"
        :key="`navigation-${slug}`"
        :variants="fadeUp"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        aria-label="Навигация между проектами"
        class="grid grid-cols-1 border-t border-border/40 sm:grid-cols-2"
      >
        <!-- Previous Project -->
        <RouterLink
          :to="`/projects/${previousProject.slug}`"
          class="group flex flex-col items-start third-space border-b border-border/40 py-8 transition-colors sm:border-r sm:border-b-0 sm:pr-10"
        >
          <span
            class="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-fg-dim"
          >
            <Icon
              icon="tabler:arrow-left"
              class="size-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />

            Предыдущий проект
          </span>

          <h2 class="transition-colors duration-300 group-hover:text-primary">
            {{ previousProject.title }}
          </h2>

          <span class="text-sm text-fg-muted">
            {{ previousProject.category }}
          </span>
        </RouterLink>

        <!-- Next Project -->
        <RouterLink
          :to="`/projects/${nextProject.slug}`"
          class="group flex flex-col items-start third-space py-8 transition-colors sm:items-end sm:pl-10 sm:text-right"
        >
          <span
            class="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-fg-dim"
          >
            Следующий проект

            <Icon
              icon="tabler:arrow-right"
              class="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>

          <h2 class="transition-colors duration-300 group-hover:text-primary">
            {{ nextProject.title }}
          </h2>

          <span class="text-sm text-fg-muted">
            {{ nextProject.category }}
          </span>
        </RouterLink>
      </motion.nav>
    </section>
  </div>

  <!-- Not Found -->
  <section v-else class="flex min-h-[60vh] flex-col justify-center second-space pt-32">
    <h1>Проект не найден.</h1>

    <RouterLink to="/projects" class="btn btn-outline w-fit">
      Все проекты
    </RouterLink>
  </section>
</template>
