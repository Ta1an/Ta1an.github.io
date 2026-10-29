<script setup lang="ts">
import { motion } from "motion-v";
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";

import Badge from "@/components/ui/badge.vue";
import CTASection from "@/components/ui/CTASection.vue";
import ScrollIndicator from "@/components/ui/ScrollIndicator.vue";

import { services, processSteps } from "@/data/services";

import { fadeUp, delayChildren, viewport } from "@/components/utils/motion";
</script>

<template>
  <!-- ======================
       01 / HERO
  ======================= -->
  <motion.section
    id="services"
    aria-labelledby="services-heading"
    :variants="delayChildren"
    initial="hidden"
    animate="visible"
    class="flex flex-col first-space pt-32 sm:pt-40 lg:pt-44"
  >
    <motion.div :variants="fadeUp">
      <Badge number="01" text="Services" />
    </motion.div>

    <!-- Heading -->
    <div class="grid second-space lg:grid-cols-12">
      <motion.h1 id="services-heading" :variants="fadeUp" class="lg:col-span-8">
        От идеи —
        <span class="block text-primary"> к реализации. </span>
      </motion.h1>

      <motion.div
        :variants="fadeUp"
        class="flex flex-col justify-end gap-5 lg:col-span-4"
      >
        <p class="max-w-md">
          Помогаю воплощать идеи в современные сайты и веб-интерфейсы. От
          разработки с нуля до улучшения существующих решений.
        </p>

        <span class="font-mono text-xs uppercase tracking-[0.15em] text-fg-dim">
          Web / Development / Experience
        </span>
      </motion.div>
    </div>

    <!-- Bottom -->
    <motion.div
      :variants="fadeUp"
      class="mt-12 flex items-center justify-between border-t border-border/40 pt-6 sm:mt-20"
    >
      <span
        class="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dim"
      >
        Digital Solutions / 2026
      </span>

      <ScrollIndicator />
    </motion.div>
  </motion.section>

  <!-- ======================
       02 / WHAT I OFFER
  ======================= -->
  <section
    id="what-i-offer"
    aria-labelledby="offer-heading"
    class="flex flex-col first-space"
  >
    <!-- Heading -->
    <motion.div
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
      class="grid second-space lg:grid-cols-2 lg:items-end"
    >
      <div class="flex flex-col second-space">
        <Badge number="02" text="What I Offer" />

        <h2 id="offer-heading">
          Чем могу
          <span class="block text-primary"> быть полезен. </span>
        </h2>
      </div>

      <p class="max-w-md text-fg-muted lg:justify-self-end">
        Каждая задача требует индивидуального подхода. Выбираю инструменты и
        решения исходя из целей проекта, а не ради использования технологий.
      </p>
    </motion.div>

    <!-- Services List -->
    <div class="flex flex-col">
      <motion.article
        v-for="service in services"
        :key="service.number"
        :variants="fadeUp"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        class="group grid border-t border-border/50 py-10 sm:py-12 lg:grid-cols-12 second-space lg:py-16"
      >
        <!-- Number -->
        <div class="lg:col-span-1">
          <span class="font-mono text-xs text-primary">
            / {{ service.number }}
          </span>
        </div>

        <!-- Service Heading -->
        <div class="flex flex-col items-start third-space lg:col-span-5">
          <h3
            class="text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-3xl lg:text-4xl"
          >
            {{ service.title }}
          </h3>

          <p class="max-w-md leading-relaxed text-fg-muted">
            {{ service.description }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 pt-2">
            <span
              v-for="tag in service.tags"
              :key="tag"
              class="rounded-full border border-border/60 px-3 py-1.5 font-mono text-[10px] text-fg-dim"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Features -->
        <div class="flex flex-col third-space lg:col-span-5 lg:col-start-8">
          <span
            class="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dim"
          >
            Что входит в разработку
          </span>

          <ul class="flex flex-col gap-4">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-start gap-3"
            >
              <Icon
                icon="tabler:check"
                class="mt-1 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />

              <span class="text-sm text-fg-muted">
                {{ feature }}
              </span>
            </li>
          </ul>
        </div>
      </motion.article>
    </div>

    <!-- Related projects -->
    <motion.div
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
      class="flex flex-wrap items-center justify-between third-space border-t border-border/40 pt-6"
    >
      <p class="max-w-md text-sm text-fg-muted">
        Хочешь посмотреть примеры реализованных проектов?
      </p>

      <RouterLink
        to="/projects"
        class="group inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-medium transition-colors hover:text-primary"
      >
        Смотреть работы

        <Icon
          icon="tabler:arrow-up-right"
          class="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden="true"
        />
      </RouterLink>
    </motion.div>
  </section>

  <!-- ======================
       03 / HOW I WORK
  ======================= -->
  <section
    id="process"
    aria-labelledby="process-heading"
    class="flex flex-col first-space"
  >
    <!-- Heading -->
    <motion.div
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
      class="grid second-space lg:grid-cols-2 lg:items-end"
    >
      <div class="flex flex-col second-space">
        <Badge number="03" text="How I Work" />

        <h2 id="process-heading">
          От обсуждения
          <span class="block text-primary"> до запуска. </span>
        </h2>
      </div>

      <p class="max-w-md text-fg-muted lg:justify-self-end">
        Стараюсь делать процесс разработки понятным и последовательным, чтобы на
        каждом этапе было ясно, над чем мы работаем.
      </p>
    </motion.div>

    <!-- Process -->
    <div class="grid md:grid-cols-2">
      <motion.article
        v-for="step in processSteps"
        :key="step.number"
        :variants="fadeUp"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        class="group flex flex-col second-space border-t border-border/50 py-9 md:min-h-64 md:px-8 md:py-10 md:odd:pl-0 md:even:border-l md:even:pr-0"
      >
        <div class="flex items-center justify-between">
          <span class="font-mono text-xs text-primary">
            / {{ step.number }}
          </span>

          <Icon
            icon="tabler:arrow-up-right"
            class="size-5 text-fg-dim transition-[color,transform] duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
            aria-hidden="true"
          />
        </div>

        <div class="mt-auto flex flex-col gap-4">
          <h3 class="text-2xl font-medium tracking-tight sm:text-3xl">
            {{ step.title }}
          </h3>

          <p class="max-w-md leading-relaxed text-fg-muted">
            {{ step.description }}
          </p>
        </div>
      </motion.article>
    </div>
  </section>

  <!-- ======================
       04 / CTA
  ======================= -->
  <CTASection
    label="Есть проект? Давайте обсудим"
    title="Давайте создадим"
    color-title="что-то значимое."
    text="Расскажите о своей идее или задаче.
          Обсудим подход к реализации
          и возможные варианты сотрудничества."
    :primary-button="{
      text: 'Обсудить проект',
      to: '/contact',
    }"
  />
</template>
