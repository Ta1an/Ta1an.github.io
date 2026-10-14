<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const currentYear = new Date().getFullYear();

const navItems = [
  { label: "Главная", to: "/" },
  { label: "Проекты", to: "/projects" },
  { label: "Как я работаю", to: "/process" },
  { label: "Обо мне", to: "/about" },
  { label: "Контакты", to: "/contact" },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/77000241856",
    icon: "tabler:brand-whatsapp",
  },
  {
    label: "Telegram",
    href: "https://t.me/arvenyx13",
    icon: "tabler:brand-telegram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ta1an",
    icon: "tabler:brand-linkedin",
  },
];

const isActive = (path: string): boolean => {
  if (path === "/") return route.path === "/";

  return route.path === path || route.path.startsWith(`${path}/`);
};

const ease = [0.22, 1, 0.36, 1] as const;
</script>

<template>
  <footer class="relative overflow-hidden border-t border-border/50 bg-bg-dark">
    <!-- Subtle background -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        class="absolute -bottom-80 -left-40 size-150 rounded-full bg-primary/3 blur-[120px]"
      />
    </div>

    <!-- Main content -->
    <div
      class="grid gap-12 pb-16 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.5fr_0.7fr_0.7fr] lg:gap-16 lg:pb-24"
    >
      <!-- Brand -->
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.7, ease }"
        class="flex flex-col items-start gap-6"
      >
        <RouterLink
          to="/"
          aria-label="Ta1an — на главную"
          class="inline-flex items-center text-3xl font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          <span class="text-primary">&lt;</span>
          <span class="text-fg">Ta1an</span>
          <span class="text-primary">/&gt;</span>
        </RouterLink>

        <p class="max-w-xs text-sm">
          Создаю современные сайты и веб-приложения с вниманием к дизайну,
          удобству и каждой детали.
        </p>

        <div
          class="flex items-center gap-2 font-mono text-[11px] tracking-wider text-fg-dim uppercase"
        >
          <span class="size-2 rounded-full bg-primary shadow-glow-sm" />
          Независимый веб-разработчик
        </div>
      </motion.div>

      <!-- Navigation -->
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.7, delay: 0.1, ease }"
        class="flex flex-col items-start gap-5"
      >
        <span
          class="font-mono text-xs font-medium tracking-[0.15em] text-fg-dim uppercase"
        >
          Навигация
        </span>

        <nav
          aria-label="Навигация в подвале"
          class="flex flex-col items-start gap-3"
        >
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :aria-current="isActive(item.to) ? 'page' : undefined"
            class="group inline-flex items-center gap-2 text-sm transition-colors duration-300 hover:text-primary"
            :class="isActive(item.to) ? 'text-primary' : 'text-fg-muted'"
          >
            <span
              class="h-px w-1 bg-primary transition-all duration-300 group-hover:w-3"
            />

            {{ item.label }}
          </RouterLink>
        </nav>
      </motion.div>

      <!-- Contacts -->
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.7, delay: 0.2, ease }"
        class="flex flex-col items-start gap-5"
      >
        <span
          class="font-mono text-xs font-medium tracking-[0.15em] text-fg-dim uppercase"
        >
          Связаться
        </span>

        <div class="flex flex-col items-start gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-3 text-sm text-fg-muted transition-colors duration-300 hover:text-primary"
          >
            <Icon
              :icon="social.icon"
              class="size-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />

            {{ social.label }}

            <Icon
              icon="tabler:arrow-up-right"
              class="size-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </a>
        </div>
      </motion.div>
    </div>

    <!-- Bottom -->
    <div
      class="flex flex-wrap items-center justify-between gap-5 border-t border-border/50 pt-6"
    >
      <span
        class="font-mono text-[10px] tracking-wider text-fg-dim uppercase sm:text-xs"
      >
        © {{ currentYear }} Ta1an. Все права защищены.
      </span>

      <div
        class="flex items-center gap-2 font-mono text-[10px] tracking-wider text-fg-dim uppercase sm:text-xs"
      >
        <Icon
          icon="tabler:map-pin"
          class="size-4 text-primary"
          aria-hidden="true"
        />

        Алматы, Казахстан
      </div>
    </div>
  </footer>
</template>
