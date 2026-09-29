<script setup lang="ts">
import { Icon } from "@iconify/vue";

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "Проекты", href: "#projects" },
  { label: "Этапы", href: "#steps" },
  { label: "Обо мне", href: "#about" },
];
</script>

<template>
  <header
    class="fixed left-0 right-0 px-[10%] py-3 top-0 z-50 backdrop-blur-md flex items-center justify-between"
  >
    <a
      href="#home"
      class="flex items-center gap-2 text-3xl font-bold tracking-tight transition-transform duration-200 hover:scale-105"
      aria-label="Алан — на главную"
    >
      <span class="text-primary">&lt;</span>
      <span class="text-fg"> Ta1an</span>
      <span class="text-primary">/&gt;</span>
    </a>

    <nav class="hidden md:flex items-center gap-8" aria-label="Основная навигация">
      <!-- Desktop navigation -->
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="nav-link text-lg"
        :aria-current="item.href === '#home' ? 'true' : undefined"
      >
        {{ item.label }}
      </a>
    </nav>

    <a href="#contacts" class="hidden md:inline-flex btn btn-primary">
      Напишите мне
      <Icon icon="tabler:arrow-up-right" class="size-4" />
    </a>

    <button type="button" class="icon-btn md:hidden" aria-label="Открыть меню">
      <Icon icon="tabler:menu-2" class="size-5" />
    </button>
  </header>
</template>
