<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Badge from "../ui/badge.vue";
import SocialMedia from "../ui/socialMedia.vue";

const technologies = [
  {
    name: "Vue",
    icon: "logos:vue",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "Pinia",
    icon: "logos:pinia",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
  },
];

const floatingCards = [
  {
    title: "Vue 3",
    description: "Современный и реактивный",
    icon: "logos:vue",
    position: "left-0 top-2",
    rotate: "-rotate-6",
  },
  {
    title: "TypeScript",
    description: "Типизация для надёжного кода",
    icon: "logos:typescript-icon",
    position: "right-10 top-4",
    rotate: "rotate-3",
  },
  {
    title: "Pinia",
    description: "Удобное управление состоянием",
    icon: "logos:pinia",
    position: "right-0 top-1/2",
    rotate: "rotate-2",
  },
  {
    title: "Чистый код",
    description: "Поддерживаемая архитектура",
    icon: "tabler:chart-line",
    position: "left-0 bottom-0",
    rotate: "rotate-6",
  },
];
</script>

<template>
  <section
    id="home"
    class="section grid min-h-screen lg:grid-cols-2 items-center"
  >
    <!-- ───────────────────── Left ───────────────────── -->
    <div>
      <Badge text="Принимаю новые проекты" />

      <!-- Heading -->
      <h1>
        Создаю современные
        <br />
        <span class="text-primary"> веб-приложения. </span>
      </h1>

      <!-- Description -->
      <p class="max-w-xl mt-6">
        Разрабатываю быстрые и удобные сайты для бизнеса и личных брендов — от
        идеи до готового результата.
      </p>

      <!-- Actions -->
      <div class="flex flex-wrap gap-3 mt-6">
        <a href="#projects" class="btn btn-primary">
          Смотреть проекты
          <Icon icon="tabler:arrow-right" class="size-5" />
        </a>

        <a href="#contacts" class="btn btn-outline">
          Обсудить проект

          <Icon icon="tabler:message-circle" class="size-5" />
        </a>
      </div>

      <SocialMedia class="mt-6" />

      <!-- Technologies -->
      <div class="mt-6 flex max-w-2xl flex-wrap gap-3">
        <div
          v-for="technology in technologies"
          :key="technology.name"
          class="chip flex items-center gap-2"
        >
          <Icon :icon="technology.icon" class="size-4" />

          <span>
            {{ technology.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- ───────────────────── Right ───────────────────── -->
    <div class="relative hidden lg:flex min-h-120 items-center justify-center">
      <!-- Glow -->
      <div class="absolute size-64 rounded-full bg-primary/20 blur-[80px]" />

      <!-- Floating cards -->
      <div
        v-for="card in floatingCards"
        :key="card.title"
        class="absolute z-20 w-50 rounded-xl border border-border p-4 shadow-card backdrop-blur-md grid grid-cols-[auto_1fr] gap-x-3"
        :class="[card.position, card.rotate]"
      >
        <div
          class="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border row-span-2"
        >
          <Icon :icon="card.icon" class="size-5" />
        </div>

        <span class="text-sm font-semibold text-fg">
          {{ card.title }}
        </span>

        <span class="mt-1 text-xs leading-relaxed text-fg-dim">
          {{ card.description }}
        </span>
      </div>

      <!-- Browser window -->
      <div class="window relative z-10 w-125 -rotate-1">
        <!-- Browser header -->
        <div
          class="flex items-center border-b border-border bg-slate-900 px-4 py-2"
        >
          <div
            class="mx-auto rounded-md border border-border bg-gray-800 px-4 py-1 text-xs text-fg-dim"
          >
            portfolio.dev
          </div>
        </div>

        <!-- Editor -->
        <div class="bg-bg p-7 font-mono leading-6">
          <div class="text-fg-dim">
            &lt;<span class="text-primary">template</span>&gt;
          </div>

          <div class="pl-4 text-fg-dim">
            &lt;<span class="text-primary">section</span>
            <span class="text-primary"> class</span>=<span
              class="text-green-400"
              >"hero"</span
            >&gt;
          </div>

          <div class="pl-8 text-fg-dim">
            &lt;<span class="text-primary">h1</span>&gt;
            <span class="text-fg"> Привет, я Алан </span>
            &lt;/<span class="text-primary">h1</span>&gt;
          </div>

          <div class="pl-8 text-fg-dim">
            &lt;<span class="text-primary">p</span>&gt;
            <span class="text-fg"> Создаю современные интерфейсы </span>
            &lt;/<span class="text-primary">p</span>&gt;
          </div>

          <div class="pl-4 text-fg-dim">
            &lt;/<span class="text-primary">section</span>&gt;
          </div>

          <div class="mt-2 text-fg-dim">
            &lt;/<span class="text-primary">template</span>&gt;
          </div>

          <div class="mt-6 text-fg-dim">
            <span class="text-purple-400">&lt;script</span>
            <span class="text-primary"> setup</span>
            <span class="text-purple-400">&gt;</span>
          </div>

          <div class="pl-4">
            <span class="text-purple-400"> const </span>

            <span class="text-fg"> developer </span>

            <span class="text-fg-dim"> = </span>

            <span class="text-yellow-300"> "Alex" </span>
          </div>

          <div class="pl-4">
            <span class="text-purple-400"> const </span>

            <span class="text-fg"> stack </span>

            <span class="text-fg-dim"> = </span>

            <span class="text-fg"> ['Vue', 'TS'] </span>
          </div>

          <div class="text-fg-dim">
            <span class="text-purple-400">&lt;/script&gt;</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
