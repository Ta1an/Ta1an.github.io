<script setup lang="ts">
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import { AnimatePresence, motion } from "motion-v";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  domain: string;
};

const projects: Project[] = [
  {
    id: "tanais",
    title: "TANAIS",
    category: "Корпоративный сайт",
    description:
      "Сайт центра психологической помощи с продуманной структурой, удобной навигацией и адаптивным интерфейсом.",
    image: "/portfolio/tanais-hero.png",
    domain: "tanais.kz",
  },
  {
    id: "autorent",
    title: "AutoRent",
    category: "Веб-приложение",
    description:
      "Сервис аренды автомобилей с панелью управления, системой заявок и инструментами для партнёров.",
    image: "/portfolio/autorent-dashboard.png",
    domain: "AutoRent / Dashboard",
  },
];

const activeId = ref("tanais");

const activeProject = computed(
  () =>
    projects.find((project) => project.id === activeId.value) ?? projects[0]!,
);

const ease = [0.22, 1, 0.36, 1] as const;
</script>

<template>
  <section id="#projects" class="flex flex-col gap-10">
    <!-- Heading -->
    <div
      class="relative flex flex-col justify-between gap-6 border-b border-border/50 pb-6 md:flex-row md:items-end"
    >
      <div>
        <div
          class="flex items-center gap-3 font-mono text-xs tracking-widest text-fg-dim uppercase"
        >
          <span class="text-primary">01 /</span>
          Selected Works
        </div>

        <h2>
          Избранные
          <span class="text-primary">работы.</span>
        </h2>
      </div>

      <p class="max-w-sm">
        Реальные проекты, в которых я объединяю дизайн, разработку и внимание к
        деталям.
      </p>
    </div>

    <!-- Main featured project -->
    <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <!-- Preview -->
      <div class="editorial-browser overflow-hidden rounded-xl">
        <!-- Browser header -->
        <div
          class="relative flex items-center justify-between border-b border-border/60 bg-bg-light p-4"
        >
          <div class="flex gap-1.5">
            <span class="size-2 rounded-full bg-red-400/80" />
            <span class="size-2 rounded-full bg-yellow-400/80" />
            <span class="size-2 rounded-full bg-green-400/80" />
          </div>

          <span class="truncate font-mono text-sm text-fg-dim">
            {{ activeProject.domain }}
          </span>

          <Icon
            icon="tabler:lock"
            class="size-3.5 text-fg-dim"
            aria-hidden="true"
          />
        </div>

        <!-- Fixed image area -->
        <div class="relative aspect-video overflow-hidden">
          <AnimatePresence mode="sync" :initial="false">
            <template v-for="project in projects" :key="project.id">
              <motion.img
                v-if="activeId === project.id"
                :key="project.id"
                :initial="{
                  opacity: 0,
                  y: 12,
                  filter: 'blur(5px)',
                }"
                :animate="{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }"
                :exit="{
                  opacity: 0,
                  filter: 'blur(5px)',
                }"
                :transition="{
                  duration: 0.4,
                  ease,
                }"
                :src="project.image"
                :alt="`Скриншот проекта ${project.title}`"
                class="absolute inset-0 bg-bg-dark block size-full object-contain sm:object-cover sm:object-top"
                draggable="false"
              />
            </template>
          </AnimatePresence>
        </div>
      </div>

      <!-- Information -->
      <div class="flex flex-col justify-center">
        <AnimatePresence mode="sync" :initial="false">
          <template v-for="(project, index) in projects" :key="project.id">
            <motion.div
              v-if="activeId === project.id"
              :key="project.id"
              :initial="{ opacity: 0, y: 15 }"
              :animate="{ opacity: 1, y: 0 }"
              :exit="{ opacity: 0, y: -10, position: 'absolute' }"
              :transition="{ duration: 0.3, ease }"
              class="flex flex-col items-start gap-5"
            >
              <span
                class="font-mono text-xs tracking-[0.15em] text-primary uppercase"
              >
                0{{ index + 1 }} / {{ project.category }}
              </span>

              <h3>
                {{ project.title }}
              </h3>

              <p class="max-w-lg">
                {{ project.description }}
              </p>

              <a
                href="#projects"
                class="group mt-2 inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-medium text-fg transition-colors hover:text-primary"
              >
                Подробнее о проектах

                <Icon
                  icon="tabler:arrow-up-right"
                  class="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </template>
        </AnimatePresence>
      </div>
    </div>

    <!-- Thumbnail selector -->
    <div class="grid grid-cols-2 gap-3 sm:gap-5">
      <button
        v-for="(project, index) in projects"
        :key="project.id"
        type="button"
        :aria-pressed="activeId === project.id"
        class="group cursor-pointer overflow-hidden rounded-xl border text-left transition-colors duration-300"
        :class="
          activeId === project.id
            ? 'border-primary/80 bg-primary/5'
            : 'border-border/60 bg-bg/50 hover:border-primary/40'
        "
        @click="activeId = project.id"
      >
        <div class="relative aspect-video overflow-hidden bg-bg-dark">
          <img
            :src="project.image"
            :alt="`Превью ${project.title}`"
            class="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            draggable="false"
          />

          <div
            class="absolute inset-0 bg-black/50 transition-opacity duration-300"
            :class="
              activeId === project.id
                ? 'opacity-0'
                : 'opacity-100 group-hover:opacity-30'
            "
          />
        </div>

        <div
          class="flex items-center justify-between gap-2 px-3 py-3 sm:px-5 sm:py-4"
        >
          <div class="flex min-w-0 items-center gap-2 sm:gap-3">
            <span class="font-mono text-[10px] text-primary">
              0{{ index + 1 }}
            </span>

            <span class="truncate text-xs font-mediu sm:text-sm">
              {{ project.title }}
            </span>
          </div>

          <Icon
          icon="tabler:arrow-right"
            :class="
              activeId === project.id
                ? '-rotate-45'
                : ''
            "
            class="transition duration-200 size-4 shrink-0 text-fg-dim"
          />
        </div>
      </button>
    </div>
  </section>
</template>
