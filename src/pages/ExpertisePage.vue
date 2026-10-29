<script setup lang="ts">
import { computed } from "vue";
import { motion } from "motion-v";
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
import ScrollIndicator from "@/components/ui/ScrollIndicator.vue";

import Badge from "@/components/ui/badge.vue";
import CTASection from "@/components/ui/CTASection.vue";

import { expertiseCapabilities, skillGroups } from "@/data/expertise";

import { projects } from "@/data/projects";

import { fadeUp, delayChildren, viewport } from "@/components/utils/motion";

const featuredProject = computed(() =>
  projects.find((project) => project.slug === "tanais"),
);
</script>

<template>
  <!-- 01 / HERO -->
  <motion.section
    :variants="delayChildren"
    initial="hidden"
    animate="visible"
    aria-labelledby="expertise-heading"
    class="flex flex-col gap-10 pt-32 sm:pt-40 lg:pt-44"
  >
    <motion.div :variants="fadeUp">
      <Badge number="01" text="Expertise" />
    </motion.div>

    <div class="grid items-end grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-8">
      <motion.h1 id="expertise-heading" :variants="fadeUp">
        Технологии.
        <span class="block text-primary"> Подход. Результат. </span>
      </motion.h1>

      <motion.div :variants="fadeUp" class="flex flex-col justify-end gap-5">
        <p class="max-w-md">
          Мой технический стек, навыки и принципы, которыми я руководствуюсь при
          создании современных веб-продуктов.
        </p>

        <span class="font-mono uppercase tracking-[0.15em]">
          Frontend / Development / Experience
        </span>
      </motion.div>
    </div>

    <motion.div
      :variants="fadeUp"
      class="flex mt-12 items-center justify-between gap-5 border-t border-border/40 pt-6 sm:mt-20"
    >
      <span
        class="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dim"
      >
        Frontend / Development / Experience
      </span>

      <ScrollIndicator />
    </motion.div>
  </motion.section>

  <!-- 02 / WHAT I DO -->
  <section aria-labelledby="capabilities-heading" class="flex flex-col gap-8">
    <motion.div
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
      class="flex flex-col gap-6"
    >
      <Badge number="02" text="What I Do" />

      <h2 id="capabilities-heading">
        Больше, чем
        <span class="text-primary"> просто код. </span>
      </h2>

      <p class="max-w-2xl">
        Для меня разработка — это не только написание кода, но и внимание к
        архитектуре, интерфейсу и деталям взаимодействия.
      </p>
    </motion.div>

    <div class="grid md:grid-cols-2">
      <motion.article
        v-for="item in expertiseCapabilities"
        :key="item.number"
        :variants="fadeUp"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        class="group flex flex-col gap-8 border-t border-border/40 py-9 transition-colors hover:bg-primary/2.5 md:min-h-75 md:px-8 md:odd:pl-0 md:even:border-l md:even:pr-0"
      >
        <div class="flex items-center justify-between">
          <span class="font-mono text-xs text-primary">
            / {{ item.number }}
          </span>

          <Icon
            :icon="item.icon"
            class="size-6 text-fg-muted transition-colors duration-300 group-hover:text-primary"
            aria-hidden="true"
          />
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-2xl font-medium sm:text-3xl">
            {{ item.title }}
          </h3>

          <p class="max-w-md text-fg-muted">
            {{ item.description }}
          </p>
        </div>

        <div class="mt-auto flex flex-wrap gap-2">
          <span
            v-for="tag in item.tags"
            :key="tag"
            class="rounded-full border border-border/60 px-3 py-1.5 font-mono text-[10px] text-fg-dim"
          >
            {{ tag }}
          </span>
        </div>
      </motion.article>
    </div>
  </section>

  <!-- 03 / TECH STACK -->
  <section aria-labelledby="stack-heading" class="flex flex-col gap-12">
    <motion.div
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
      class="flex flex-col gap-6"
    >
      <Badge number="03" text="Tech Stack" />

      <h2 id="stack-heading">
        Мой рабочий
        <span class="text-primary"> инструментарий.</span>
      </h2>

      <p class="max-w-2xl">
        Технологии и инструменты, которые использую для разработки, стилизации и
        поддержки веб-проектов.
      </p>
    </motion.div>

    <!-- Stack Groups -->
    <div class="flex flex-col">
      <motion.div
        v-for="group in skillGroups"
        :key="group.number"
        :variants="fadeUp"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        class="grid gap-8 border-t border-border/40 py-10 lg:grid-cols-12 lg:gap-16 lg:py-14"
      >
        <!-- Group Information -->
        <div class="flex flex-col items-start gap-4 lg:col-span-4">
          <span class="font-mono text-xs text-primary">
            / {{ group.number }}
          </span>

          <h3 class="text-2xl font-medium sm:text-3xl">
            {{ group.title }}
          </h3>

          <p class="max-w-sm text-sm text-fg-muted">
            {{ group.description }}
          </p>
        </div>

        <!-- Technologies -->
        <div class="grid grid-cols-2 auto-rows-fr gap-3 sm:grid-cols-3 lg:col-span-8">
          <div
            v-for="skill in group.skills"
            :key="skill.name"
            class="group/skill flex min-w-0 items-center gap-3 border border-border/50 p-4 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/[0.035] sm:p-5"
          >
            <Icon
              :icon="skill.icon"
              class="size-5 shrink-0 text-fg-muted transition-colors duration-300 group-hover/skill:text-primary"
              aria-hidden="true"
            />

            <span class="min-w-0 text-sm font-medium text-fg sm:text-base">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>

  <!-- 04 / IN PRACTICE -->
  <section
    v-if="featuredProject"
    aria-labelledby="practice-heading"
    class="flex flex-col gap-8"
  >
    <motion.div
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
      class="flex flex-col gap-6"
    >
      <Badge number="04" text="In Practice" />

      <h2 id="practice-heading">
        От технологий
        <span class="text-primary"> к реальным проектам. </span>
      </h2>

      <p class="max-w-2xl">
        Навыки лучше всего раскрываются на практике. Один из примеров —
        многостраничный сайт TANAIS.
      </p>
    </motion.div>

    <motion.div
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
      class="grid items-center gap-10 border-t border-border/40 pt-10 lg:grid-cols-2 lg:gap-16"
    >
      <!-- Project Preview -->
      <RouterLink
        :to="`/projects/${featuredProject.slug}`"
        class="group block overflow-hidden rounded-xl border border-border/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <div class="aspect-video overflow-hidden bg-bg-dark">
          <img
            :src="featuredProject.image"
            :alt="`Интерфейс проекта ${featuredProject.title}`"
            loading="lazy"
            class="size-full object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-[1.04]"
          />
        </div>
      </RouterLink>

      <!-- Project Information -->
      <div class="flex flex-col items-start gap-6">
        <span
          class="font-mono text-xs uppercase tracking-[0.15em] text-primary"
        >
          Featured Case / 2026
        </span>

        <h3>{{ featuredProject.title }}</h3>

        <p>
          Многостраничный сайт центра психологической помощи, разработанный на
          Nuxt. В проекте я работал с компонентной архитектурой, адаптивностью,
          анимациями и публикацией сайта.
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in featuredProject.tags"
            :key="tag"
            class="rounded-full border border-border/60 px-3 py-1.5 font-mono text-xs text-fg-dim"
          >
            {{ tag }}
          </span>
        </div>

        <RouterLink
          :to="`/projects/${featuredProject.slug}`"
          class="group inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-medium transition-colors hover:text-primary"
        >
          Изучить кейс

          <Icon
            icon="tabler:arrow-up-right"
            class="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </RouterLink>
      </div>
    </motion.div>
  </section>

  <!-- CTA -->
  <CTASection
    label="Давайте сотрудничать"
    title="Есть интересная"
    color-title="задача?"
    text="Открыт к новым проектам,
          профессиональному сотрудничеству
          и возможностям работы в команде."
    :primary-button="{
      text: 'Связаться со мной',
      to: '/contact',
    }"
  />
</template>
