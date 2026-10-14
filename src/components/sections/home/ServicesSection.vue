<script setup lang="ts">
import Badge from "@/components/ui/badge.vue";
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";

const services = [
  {
    number: "01",
    title: "Сайты для бизнеса",
    description:
      "Современные сайты, которые помогают представить компанию, рассказать об услугах и сформировать доверие клиентов.",
    features: ["Лендинги", "Корпоративные сайты", "Сайты услуг"],
    icon: "tabler:world",
  },
  {
    number: "02",
    title: "Веб-приложения",
    description:
      "Функциональные веб-сервисы с удобными интерфейсами для пользователей, сотрудников и управления бизнес-процессами.",
    features: ["Личные кабинеты", "Dashboard", "Онлайн-сервисы"],
    icon: "tabler:layout-dashboard",
  },
  {
    number: "03",
    title: "Развитие проектов",
    description:
      "Помогаю улучшать существующие сайты и приложения: обновлять интерфейс, добавлять функции и делать работу удобнее.",
    features: ["Редизайн интерфейсов", "Новый функционал", "Адаптивность"],
    icon: "tabler:code",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
};
</script>

<template>
  <section
    id="services"
    aria-labelledby="services-title"
    class="relative overflow-hidden flex flex-col gap-10"
  >
    <Badge number="02" text="What I do" />

    <!-- Heading -->
    <motion.div
      :initial="reveal.initial"
      :while-in-view="reveal.whileInView"
      :in-view-options="{ once: true, amount: 0.2 }"
      :transition="{ duration: 0.7, ease, delay: 0.1 }"
      class="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end"
    >
      <h2>
        Что я могу
        <span class="text-primary"> создать для вас. </span>
      </h2>

      <p>
        От первой идеи до готового решения. Разрабатываю сайты и веб-приложения
        под конкретные задачи вашего проекта.
      </p>
    </motion.div>

    <!-- Services -->
    <div class="border-t border-border">
      <motion.article
        v-for="(service, index) in services"
        :key="service.number"
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.15 }"
        :transition="{
          duration: 0.65,
          delay: index * 0.08,
          ease,
        }"
        class="group relative border-b border-border hover:bg-primary/4 duration-500"
      >
        <div
          class="relative grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-6 py-9 sm:gap-x-7 sm:py-12 lg:grid-cols-[auto_1fr_1fr_auto] items-center lg:gap-8 lg:py-14"
        >
          <!-- Number -->
          <span class="font-mono text-xs text-primary sm:text-sm">
            {{ service.number }}
          </span>

          <!-- Title -->
          <div
            class="flex min-w-0 items-center gap-4 transition-transform duration-500 ease-out group-hover:translate-x-3"
          >
            <h3>
              {{ service.title }}
            </h3>
          </div>

          <!-- Description -->
          <div class="col-start-2 lg:col-start-3">
            <p class="max-w-md text-sm sm:text-base">
              {{ service.description }}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="feature in service.features"
                :key="feature"
                class="rounded-full border border-border/70 px-3 py-1.5 text-xs text-fg-dim transition-colors duration-300 group-hover:border-primary/30"
              >
                {{ feature }}
              </span>
            </div>
          </div>

          <!-- Arrow -->
          <Icon
            icon="tabler:arrow-up-right"
            class="size-6 col-start-3 row-start-1 lg:col-start-4 text-fg-dim transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
            aria-hidden="true"
          />
        </div>
      </motion.article>
    </div>
  </section>
</template>
