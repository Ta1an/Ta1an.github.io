
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";

const services = [
  {
    number: "01",
    title: "Сайты для бизнеса",
    description:
      "Современные сайты, которые помогают представить компанию, рассказать об услугах и сформировать доверие клиентов.",
    features: [
      "Лендинги",
      "Корпоративные сайты",
      "Сайты услуг",
    ],
    icon: "tabler:world",
  },
  {
    number: "02",
    title: "Веб-приложения",
    description:
      "Функциональные веб-сервисы с удобными интерфейсами для пользователей, сотрудников и управления бизнес-процессами.",
    features: [
      "Личные кабинеты",
      "Dashboard",
      "Онлайн-сервисы",
    ],
    icon: "tabler:layout-dashboard",
  },
  {
    number: "03",
    title: "Развитие проектов",
    description:
      "Помогаю улучшать существующие сайты и приложения: обновлять интерфейс, добавлять функции и делать работу удобнее.",
    features: [
      "Редизайн интерфейсов",
      "Новый функционал",
      "Адаптивность",
    ],
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
    class="relative overflow-hidden border-t border-border/40 !px-5 py-24 sm:!px-8 lg:!px-12 lg:py-36"
  >
    <div class="mx-auto w-full max-w-350">
      <!-- Section label -->
      <motion.div
        :initial="reveal.initial"
        :while-in-view="reveal.whileInView"
        :viewport="{ once: true, amount: 0.3 }"
        :transition="{ duration: 0.6, ease }"
        class="mb-12 flex flex-wrap items-center justify-between gap-4"
      >
        <div class="flex items-center gap-3">
          <span class="font-mono text-xs text-primary">
            01 /
          </span>

          <span
            class="font-mono text-xs tracking-[0.15em] text-fg-muted uppercase"
          >
            Мои услуги
          </span>
        </div>

        <span
          class="hidden font-mono text-[11px] tracking-[0.15em] text-fg-dim uppercase sm:block"
        >
          What I do
        </span>
      </motion.div>

      <!-- Heading -->
      <motion.div
        :initial="reveal.initial"
        :while-in-view="reveal.whileInView"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.7, ease, delay: 0.1 }"
        class="mb-16 grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end"
      >
        <h2
          id="services-title"
          class="max-w-220 !text-[clamp(2.5rem,5.5vw,5.5rem)] !leading-[1.08] !font-medium !tracking-[-0.055em]"
        >
          Что я могу
          <span class="text-primary">
            создать для вас.
          </span>
        </h2>

        <p class="max-w-md lg:ml-auto">
          От первой идеи до готового решения.
          Разрабатываю сайты и веб-приложения
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
          :viewport="{ once: true, amount: 0.15 }"
          :transition="{
            duration: 0.65,
            delay: index * 0.08,
            ease,
          }"
          class="service-row group relative border-b border-border"
        >
          <!-- Hover background -->
          <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-0 bg-primary/4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div
            class="relative grid grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-6 py-9 sm:gap-x-7 sm:py-12 lg:grid-cols-[60px_minmax(0,1fr)_minmax(0,0.85fr)_40px] lg:items-center lg:gap-8 lg:py-14"
          >
            <!-- Number -->
            <span
              class="pt-2 font-mono text-xs text-primary sm:text-sm"
            >
              {{ service.number }}
            </span>

            <!-- Title -->
            <div
              class="flex min-w-0 items-center gap-4 transition-transform duration-500 ease-out group-hover:translate-x-1 lg:group-hover:translate-x-3"
            >
              <h3
                class="!text-[clamp(1.6rem,3.3vw,3.5rem)] !leading-tight !font-medium !tracking-[-0.045em] transition-colors duration-300 group-hover:text-primary"
              >
                {{ service.title }}
              </h3>
            </div>

            <!-- Description -->
            <div
              class="col-span-3 col-start-1 pl-8 sm:pl-10 lg:col-span-1 lg:col-start-3 lg:pl-0"
            >
              <p class="max-w-md !text-sm sm:!text-base">
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
              class="col-start-3 row-start-1 size-6 text-fg-dim transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary lg:col-start-4"
              aria-hidden="true"
            />
          </div>
        </motion.article>
      </div>

      <!-- Bottom CTA -->
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, amount: 0.3 }"
        :transition="{ duration: 0.6, ease }"
        class="mt-10 flex flex-wrap items-center justify-between gap-6"
      >
        <p class="!text-sm">
          Есть идея, которую не нашли в списке?
        </p>

        <RouterLink
          to="/contact"
          class="group inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-medium text-fg transition-colors hover:text-primary"
        >
          Расскажите о проекте

          <Icon
            icon="tabler:arrow-up-right"
            class="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </RouterLink>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .service-row *,
  .service-row *::before,
  .service-row *::after {
    transition-duration: 0.01ms !important;
  }
}
</style>
