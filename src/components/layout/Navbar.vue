<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";

import { Icon } from "@iconify/vue";
import { AnimatePresence, motion, stagger } from "motion-v";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const navItems = [
  { label: "Главная", to: "/" },
  { label: "Проекты", to: "/projects" },
  { label: "Обо мне", to: "/about" },
  { label: "Навыки", to: "/expertise" },
  { label: "Услуги", to: "/services" },
  { label: "Контакты", to: "/contact" },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/77000241856",
    icon: "tabler:brand-whatsapp",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ta1an",
    icon: "tabler:brand-linkedin",
  },
  {
    label: "Telegram",
    href: "https://t.me/arvenyx13",
    icon: "tabler:brand-telegram",
  },
];

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const footerVisible = ref(false);

const handleNavAnimationComplete = (index: number) => {
  if (isMenuOpen.value && index === navItems.length - 1) {
    footerVisible.value = true;
  }
};

const footerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.2),
    },
  },
} as const;

const footerItemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

const menuButton = ref<HTMLButtonElement | null>(null);
const closeButton = ref<HTMLButtonElement | null>(null);
const menuContent = ref<HTMLElement | null>(null);

const menuId = "editorial-navigation";

let previousOverflow = "";
let previousFocus: HTMLElement | null = null;

// Active route
const isActive = (path: string): boolean => {
  if (path === "/") {
    return route.path === "/";
  }

  return route.path === path || route.path.startsWith(`${path}/`);
};

// Header appearance on scroll
const updateScroll = () => {
  isScrolled.value = window.scrollY > 24;
};

// Open fullscreen menu
const openMenu = async () => {
  if (isMenuOpen.value) return;

  footerVisible.value = false;

  previousFocus = document.activeElement as HTMLElement | null;
  isMenuOpen.value = true;

  await nextTick();

  closeButton.value?.focus();
};

// Close fullscreen menu
const closeMenu = (restoreFocus = true) => {
  if (!isMenuOpen.value) return;

  footerVisible.value = false;
  isMenuOpen.value = false;

  if (restoreFocus) {
    nextTick(() => {
      if (previousFocus?.isConnected) {
        previousFocus.focus();
      } else {
        menuButton.value?.focus();
      }
    });
  }
};

// Toggle menu
const toggleMenu = () => {
  if (isMenuOpen.value) {
    closeMenu();
  } else {
    openMenu();
  }
};

// Handle internal navigation
const handleNavigate = () => {
  closeMenu(false);
};

// Keyboard interactions
const handleKeydown = (event: KeyboardEvent) => {
  if (!isMenuOpen.value) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeMenu();
    return;
  }

  if (event.key !== "Tab" || !menuContent.value) {
    return;
  }

  const focusableElements = Array.from(
    menuContent.value.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => element.getClientRects().length > 0);

  if (!focusableElements.length) return;

  const first = focusableElements[0]!;
  const last = focusableElements[focusableElements.length - 1]!;

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};

// Lock background scroll
watch(isMenuOpen, (open) => {
  if (open) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = previousOverflow;
  }
});

// Close menu when route changes
watch(
  () => route.fullPath,
  () => {
    if (isMenuOpen.value) {
      closeMenu(false);
    }

    nextTick(updateScroll);
  },
);

onMounted(() => {
  updateScroll();

  window.addEventListener("scroll", updateScroll, {
    passive: true,
  });

  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
  window.removeEventListener("keydown", handleKeydown);

  document.body.style.overflow = previousOverflow;
});
</script>

<template>
  <!-- Header -->
  <header
    class="flex items-center justify-between border-b transition-all duration-300"
    :class="
      isScrolled || isMenuOpen
        ? 'border-border/50 bg-bg-dark/90 backdrop-blur-xl'
        : 'border-transparent bg-bg-dark/20 backdrop-blur-md'
    "
  >
    <!-- Logo -->
    <RouterLink
      to="/"
      class="relative flex items-center gap-1 text-2xl font-bold tracking-tight transition-opacity hover:opacity-80 sm:text-3xl font-logo"
      aria-label="Ta1an — на главную"
      @click="handleNavigate"
    >
      <span class="text-primary">&lt;</span>
      <span class="text-fg">Ta1an</span>
      <span class="text-primary">/&gt;</span>
    </RouterLink>

    <!-- Header actions -->
    <div class="relative flex items-center gap-5">
      <RouterLink
        to="/contact"
        class="btn btn-primary hidden sm:inline-flex"
        @click="handleNavigate"
      >
        Обсудить проект

        <Icon icon="tabler:arrow-up-right" class="size-4" aria-hidden="true" />
      </RouterLink>

      <!-- Menu toggle -->
      <button
        ref="menuButton"
        type="button"
        class="group flex cursor-pointer items-center gap-3 text-fg transition-colors hover:text-primary"
        :aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
        :aria-expanded="isMenuOpen"
        :aria-controls="isMenuOpen ? menuId : undefined"
        @click="toggleMenu"
      >
        <span class="hidden text-sm font-medium sm:block">
          {{ isMenuOpen ? "Закрыть" : "Меню" }}
        </span>

        <Icon
          :icon="isMenuOpen ? 'tabler:x' : 'tabler:menu-2'"
          class="size-6"
          aria-hidden="true"
        />
      </button>
    </div>
  </header>

  <!-- Fullscreen navigation -->
  <AnimatePresence :initial="false">
    <motion.div
      v-if="isMenuOpen"
      :id="menuId"
      key="fullscreen-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Навигация по сайту"
      class="fixed inset-0 z-60 overflow-y-auto bg-bg-dark"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
    >
      <div ref="menuContent" class="relative flex min-h-dvh flex-col">
        <!-- Background glow -->
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            class="absolute top-1/3 left-1/2 size-[min(90vw,850px)] -translate-x-1/2 rounded-full bg-primary/5 blur-[130px]"
          />
        </div>

        <!-- Menu header -->
        <div
          class="relative mx-auto flex w-full max-w-350 items-center justify-between px-6 py-5 sm:px-10"
        >
          <!-- Brand -->
          <span
            class="flex items-center gap-1 text-2xl font-bold tracking-tight sm:text-3xl"
          >
            <span class="text-primary">&lt;</span>
            <span class="text-fg">Ta1an</span>
            <span class="text-primary">/&gt;</span>
          </span>

          <!-- Close -->
          <button
            ref="closeButton"
            type="button"
            class="group flex cursor-pointer items-center gap-3 text-fg transition-colors hover:text-primary"
            aria-label="Закрыть меню"
            @click="closeMenu()"
          >
            <span class="text-sm font-medium"> Закрыть </span>

            <Icon
              icon="tabler:x"
              class="size-6 transition-transform duration-300 group-hover:rotate-90"
              aria-hidden="true"
            />
          </button>
        </div>

        <!-- Navigation -->
        <nav
          aria-label="Основная навигация"
          class="relative mx-auto flex w-full max-w-300 flex-1 flex-col items-center justify-center gap-2 px-5 py-14 sm:gap-3"
        >
          <RouterLink
            v-for="(item, index) in navItems"
            :key="item.to"
            :to="item.to"
            custom
            v-slot="{ href, navigate }"
          >
            <motion.a
              :href="href"
              class="group flex items-baseline justify-center gap-3 py-1 text-center sm:gap-5"
              :initial="{ opacity: 0, filter: 'blur(8px)', y: 25 }"
              :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
              :exit="{ opacity: 0, y: -12 }"
              :transition="{
                duration: 0.5,
                delay: index * 0.08,
              }"
              :aria-current="isActive(item.to) ? 'page' : undefined"
              @click="
                (event: MouseEvent) => {
                  navigate(event);
                  handleNavigate();
                }
              "
              @animation-complete="handleNavAnimationComplete(index)"
            >
              <!-- Index -->
              <span class="font-mono text-[10px] text-fg-dim sm:text-xs">
                0{{ index + 1 }}
              </span>

              <!-- Label -->
              <span
                class="text-[clamp(3rem,5vw,4.5rem)] leading-[1.15] font-medium tracking-[-0.055em] transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary"
                :class="isActive(item.to) ? 'text-primary' : 'text-fg'"
              >
                {{ item.label }}
              </span>
            </motion.a>
          </RouterLink>
        </nav>

        <!-- Footer -->

        <motion.div
          :variants="footerVariants"
          initial="hidden"
          :animate="footerVisible ? 'visible' : 'hidden'"
          :inert="!footerVisible"
          :aria-hidden="!footerVisible"
          class="relative mx-auto flex w-full max-w-350 flex-wrap items-center justify-between gap-5 px-6 py-6 sm:px-10"
        >
          <motion.div
            :initial="{ opacity: 0, scaleX: 0 }"
            :animate="
              footerVisible
                ? {
                    opacity: 1,
                    scaleX: 1,
                  }
                : {
                    opacity: 0,
                    scaleX: 0,
                  }
            "
            :transition="{
              duration: 0.8,
              ease: 'easeInOut',
            }"
            class="h-px mb-4 w-full origin-left bg-border/40"
          />

          <!-- Availability -->
          <motion.div
            :variants="footerItemVariants"
            class="flex items-center gap-3"
          >
            <span class="size-2 rounded-full bg-primary shadow-glow-sm" />

            <span
              class="font-mono text-[10px] tracking-wider text-fg-dim uppercase"
            >
              Открыт к сотрудничеству
            </span>
          </motion.div>

          <motion.div
            :variants="footerItemVariants"
            class="flex items-center gap-4"
          >
            <motion.a
              v-for="social in socialLinks"
              :while-hover="{
                color: '#3c83f6',
                borderColor: '#3c83f6',
                backgroundColor: '#3c83f61a',
              }"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="flex size-12 items-center justify-center rounded-full border border-border"
            >
              <Icon :icon="social.icon" class="size-6" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  </AnimatePresence>
</template>
