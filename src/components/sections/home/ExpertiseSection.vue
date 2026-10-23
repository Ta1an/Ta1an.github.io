<script setup lang="ts">
import { motion } from "motion-v";
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
import { fadeUp, delayChildren, viewport } from "@/components/utils/motion";
import Badge from "@/components/ui/badge.vue";
import { fade } from "@vueuse/motion";

const expertise = [
  {
    number: "01",
    icon: "tabler:layout",
    title: "Интерфейсы",
    description:
      "Создаю адаптивные и интуитивно понятные интерфейсы, уделяя внимание типографике, композиции и деталям.",
    tags: ["Responsive", "UI", "Accessibility"],
  },
  {
    number: "02",
    icon: "tabler:code",
    title: "Разработка",
    description:
      "Разрабатываю веб-приложения с компонентной архитектурой, типизацией и переиспользуемыми решениями.",
    tags: ["Vue", "Nuxt", "TypeScript"],
  },
  {
    number: "03",
    icon: "tabler:bolt",
    title: "Оптимизация",
    description:
      "Работаю над производительностью, скоростью загрузки и техническим качеством веб-продуктов.",
    tags: ["Performance", "SEO", "Core Web Vitals"],
  },
  {
    number: "04",
    icon: "tabler:activity",
    title: "Интерактивность",
    description:
      "Добавляю осмысленные анимации и микровзаимодействия, которые делают интерфейс живым и удобным.",
    tags: ["Motion", "Animation", "UX"],
  },
];
</script>

<template>
  <section id="expertise" aria-labelledby="expertise-heading">
    <div class="flex flex-col gap-10">
      <!-- Heading -->
      <motion.div
        :variants="delayChildren"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        class="grid gap-8 lg:grid-cols-2 lg:items-end"
      >
        <motion.div
          class="lg:col-span-2"
          :variants="fadeUp"
          :in-view-options="viewport"
        >
          <Badge number="02" , text="Expertise" />
        </motion.div>

        <motion.h2
          :variants="fadeUp"
          :in-view-options="viewport"
          id="expertise-heading"
        >
          Больше, чем
          <span class="block text-primary"> просто код. </span>
        </motion.h2>

        <motion.p :variants="fadeUp" :inViewOptions="viewport">
          Инструменты важны. Но ещё важнее то, как они помогают создавать
          быстрые, удобные и качественные интерфейсы.
        </motion.p>
      </motion.div>

      <!-- Expertise Grid -->
      <motion.div
        :variants="delayChildren"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        class="grid md:grid-cols-2"
      >
        <motion.article
          v-for="item in expertise"
          :key="item.number"
          :variants="fadeUp"
          :in-view-options="viewport"
          class="group relative flex flex-col gap-8 border-t border-border/40 transition-colors duration-300 hover:bg-primary/2 md:even:border-l p-6 lg:p-10"
        >
          <!-- Top -->
          <div class="flex items-center justify-between">
            <span
              class="font-mono text-lg text-fg-dim transition-colors duration-300 group-hover:text-primary"
            >
              / {{ item.number }}
            </span>

            <Icon
              :icon="item.icon"
              class="size-6 text-fg-muted transition duration-300 group-hover:-translate-y-1 group-hover:text-primary"
              aria-hidden="true"
            />
          </div>

          <!-- Content -->
          <div class="flex flex-col gap-4">
            <h4>
              {{ item.title }}
            </h4>

            <p class="max-w-md leading-relaxed text-fg-muted">
              {{ item.description }}
            </p>
          </div>

          <!-- Technologies -->
          <div class="mt-auto flex flex-wrap gap-2">
            <span
              v-for="tag in item.tags"
              :key="tag"
              class="rounded-full border border-border/50 px-3 py-1.5 font-mono text-xs text-fg-dim transition-colors duration-300 group-hover:border-primary/20"
            >
              {{ tag }}
            </span>
          </div>
        </motion.article>
      </motion.div>

      <!-- Bottom Link -->
      <motion.div
        :variants="fadeUp"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="viewport"
        class="flex justify-end border-t border-border/40 pt-6"
      >
        <RouterLink
          to="/expertise"
          class="group inline-flex items-center gap-3 text-sm font-medium transition-colors duration-300 hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Подробнее о навыках

          <Icon
            icon="tabler:arrow-up-right"
            class="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </RouterLink>
      </motion.div>
    </div>
  </section>
</template>
