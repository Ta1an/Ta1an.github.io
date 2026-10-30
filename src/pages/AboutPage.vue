<script setup lang="ts">
import { motion } from "motion-v";
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
import { fadeUp, delayChildren, viewport } from "@/components/utils/motion";
import Badge from "@/components/ui/badge.vue";

const education = [
  {
    period: "2022 — 2026",
    university: "КБТУ",
    fullName: "Казахстанско-Британский технический университет",
    faculty: "IT факультет",
    status: "Период обучения",
  },
  {
    period: "2026 — Сейчас",
    university: "АГЭУ",
    fullName: "Алматинский Гумманитарно-Экономический университет",
    faculty: "Продолжение высшего образования",
    status: "Близок к завершению обучения",
  },
];

// Укажем путь, когда резюме будет готово.
const resumeUrl: string | null = null;

const portraitSrc = "";

const journey = [
  {
    number: "01",
    period: "2022 — 2026",
    label: "Образование",
    title: "Начало пути в IT",
    institution: "КБТУ · IT факультет",
    description:
      "В 2022 году я поступил в Казахстанско-Британский технический университет на IT-факультет. Здесь началось моё погружение в информационные технологии, программирование и формирование технической базы.",
  },
  {
    number: "02",
    period: "2026 — Сейчас",
    label: "Новый этап",
    title: "Фокус на веб-разработке",
    institution: "АГЭУ · Продолжение обучения",
    description:
      "В 2026 году я перевёлся в АГЭУ, где сейчас завершаю обучение. В этот период я решил уделять больше времени веб-разработке, углублять технические знания и активно развивать практические навыки.",
  },
  {
    number: "03",
    period: "2026 — Сейчас",
    label: "Практический опыт",
    title: "От знаний к реальным проектам",
    institution: "Разработка · Frontend",
    description:
      "В 2026 году я перешёл к созданию полноценных веб-проектов, среди которых TANAIS, Autorent, Alset Cert и Talan Law. Работа над ними позволила мне применить полученные знания на практике, глубже разобраться в архитектуре интерфейсов, адаптивной вёрстке и современных инструментах frontend-разработки.",
  },
];

const principles = [
  {
    number: "01",
    icon: "tabler:code-dots",
    title: "Осмысленная разработка",
    description:
      "Важно не просто заставить код работать, а найти понятное, поддерживаемое и подходящее задаче решение.",
  },
  {
    number: "02",
    icon: "tabler:eye",
    title: "Внимание к деталям",
    description:
      "Типографика, отступы, адаптивность и микровзаимодействия — именно из таких деталей складывается цельный интерфейс.",
  },
  {
    number: "03",
    icon: "tabler:refresh",
    title: "Непрерывное развитие",
    description:
      "Технологии постоянно меняются. Для меня важно изучать новые инструменты, экспериментировать и применять полученные знания на практике.",
  },
];
</script>

<template>
  <!-- =====================
     01 / INTRODUCTION
====================== -->
  <motion.section
    :variants="delayChildren"
    initial="hidden"
    animate="visible"
    class="grid items-center first-space lg:grid-cols-[1fr_0.5fr] pt-32 sm:pt-40 lg:pt-44"
    aria-labelledby="about-heading"
  >
    <!-- Left / Content -->
    <div class="flex flex-col second-space">
      <!-- Eyebrow -->
      <motion.div :variants="fadeUp" class="flex items-center gap-3">
        <span class="size-2 rounded-full bg-primary shadow-glow-sm" />

        <span
          class="font-mono text-[10px] tracking-[0.18em] text-fg-dim uppercase sm:text-xs"
        >
          01 / About me
        </span>
      </motion.div>

      <!-- Heading -->
      <motion.h2 id="about-heading" :variants="fadeUp">
        Привет,
        <span class="text-primary">я Алан.</span>

        <span class="block"> Создаю цифровые продукты. </span>
      </motion.h2>

      <!-- Description -->
      <motion.div
        :variants="fadeUp"
        class="flex max-w-xl flex-col second-space"
      >
        <p class="text-fg">
          Я frontend-разработчик, которому нравится превращать идеи в
          продуманные и выразительные веб-интерфейсы.
        </p>

        <p>
          Мне интересно работать на пересечении технологий, дизайна и
          пользовательского опыта. Я уделяю внимание не только внешнему виду, но
          и тому, как устроен продукт изнутри.
        </p>
      </motion.div>

      <!-- Link -->
      <motion.div :variants="fadeUp">
        <RouterLink
          to="/projects"
          class="group inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary"
        >
          Посмотреть мои проекты

          <Icon
            icon="tabler:arrow-up-right"
            class="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </RouterLink>
      </motion.div>
    </div>

    <!-- Right / Portrait -->
    <motion.div :variants="fadeUp" class="relative">
      <!-- Decorative top label -->
      <div
        class="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-fg-dim"
      >
        <span>Portrait / 01</span>
        <span>Almaty, KZ</span>
      </div>

      <!-- Image container -->
      <div
        class="group relative aspect-4/5 overflow-hidden border border-border/50 bg-bg-dark"
      >
        <!-- Actual image -->
        <img
          v-if="portraitSrc"
          :src="portraitSrc"
          alt="Портрет Алана, frontend-разработчика"
          width="800"
          height="1000"
          fetchpriority="high"
          class="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        <!-- Placeholder -->
        <div
          v-else
          class="flex size-full flex-col items-center justify-center gap-5 bg-primary/2.5"
        >
          <Icon
            icon="tabler:user"
            class="size-14 text-primary/30"
            aria-hidden="true"
          />

          <span
            class="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dim"
          >
            Your portrait here
          </span>
        </div>

        <!-- Subtle inner border -->
        <div
          class="pointer-events-none absolute inset-4 border border-white/10"
          aria-hidden="true"
        />

        <!-- Corner accent -->
        <div
          class="pointer-events-none absolute top-0 left-0 h-14 w-14 border-t-2 border-l-2 border-primary/60"
          aria-hidden="true"
        />
      </div>

      <!-- Image caption -->
      <div class="mt-4 flex items-center justify-between gap-4">
        <span
          class="font-mono text-[10px] uppercase tracking-widest text-fg-dim"
        >
          Frontend Developer
        </span>

        <span class="font-mono text-[10px] text-primary">
          43°14'N / 76°57'E
        </span>
      </div>
    </motion.div>

    <!-- Bottom separator -->
    <motion.div
      :initial="{ opacity: 0, scaleX: 0 }"
      :animate="{ opacity: 1, scaleX: 1 }"
      :transition="{
        duration: 0.9,
        delay: 0.7,
        ease: 'easeOut',
      }"
      class="mt-20 h-px origin-left bg-border/40 lg:col-span-2"
      aria-hidden="true"
    />
  </motion.section>

  <!-- =====================
         02 / MY JOURNEY
    ====================== -->
  <motion.section
    :variants="delayChildren"
    initial="hidden"
    while-in-view="visible"
    :in-view-options="viewport"
    class="grid first-space grid-cols-1 lg:grid-cols-[auto_1fr] lg:gap-12"
    aria-labelledby="journey-heading"
  >
    <!-- Sticky heading -->
    <motion.div
      :variants="fadeUp"
      class="self-start flex flex-col second-space lg:sticky lg:top-32 lg:pb-32"
    >
      <Badge number="02" text="My Journey" />

      <h2>
        Мой путь
        <span class="block text-primary"> в разработке. </span>
      </h2>

      <p class="max-w-xl">
        Веб-разработка для меня — это постоянный процесс обучения, экспериментов
        и практики.
      </p>
    </motion.div>

    <!-- Journey items -->
    <div>
      <motion.article
        :variants="fadeUp"
        v-for="item in journey"
        :key="item.number"
        class="flex justify-evenly border-t border-border/40 py-8 third-space sm:py-10"
      >
        <div class="flex flex-col gap-3">
          <span class="font-mono text-base tracking-wider text-primary">
            {{ item.period }}
          </span>

          <span
            class="font-mono text-[10px] uppercase tracking-widest text-fg-dim"
          >
            / {{ item.number }}
          </span>
        </div>

        <!-- Content -->
        <div class="flex flex-col third-space">
          <span
            class="font-mono text-xs uppercase tracking-[0.15em] text-fg-dim"
          >
            {{ item.label }}
          </span>

          <h4>
            {{ item.title }}
          </h4>

          <div class="flex items-center gap-2">
            <Icon
              icon="tabler:school"
              class="size-4 shrink-0 text-primary"
              aria-hidden="true"
            />

            <span class="text-sm text-fg-muted">
              {{ item.institution }}
            </span>
          </div>

          <p class="max-w-lg">
            {{ item.description }}
          </p>
        </div>
      </motion.article>
    </div>

    <motion.div
      :initial="{ opacity: 0, scaleX: 0 }"
      :animate="{ opacity: 1, scaleX: 1 }"
      :transition="{
        duration: 0.9,
        delay: 0.7,
        ease: 'easeOut',
      }"
      class="mt-20 h-px origin-left bg-border/40 lg:col-span-2"
      aria-hidden="true"
    />
  </motion.section>

  <motion.section
    :variants="delayChildren"
    initial="hidden"
    whileInView="visible"
    :inViewOptions="viewport"
    id="education"
    aria-labelledby="education-heading"
  >
    <!-- Heading -->
    <motion.div
      :variants="fadeUp"
      class="mb-12 flex flex-col second-space lg:mb-16"
    >
      <Badge number="03" text="Education & Resume" />

      <h2 id="education-heading">
        Образование<span class="text-primary">.</span>
      </h2>

      <p class="max-w-xl">
        Академическая база, которая помогает мне развиваться в сфере
        информационных технологий и веб-разработки.
      </p>
    </motion.div>

    <!-- Education Grid -->
    <div class="grid md:grid-cols-2">
      <motion.article
        v-for="(item, index) in education"
        :key="item.university"
        :variants="fadeUp"
        :inViewOptions="viewport"
        class="group flex flex-col gap-8 border-t border-border/40 py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0 md:odd:border-r"
      >
        <!-- Top -->
        <div class="flex items-center justify-between">
          <span class="font-mono text-xs tracking-wider text-primary">
            {{ item.period }}
          </span>

          <span class="font-mono text-xs text-fg-dim">
            / 0{{ index + 1 }}
          </span>
        </div>

        <!-- Content -->
        <div class="flex flex-col gap-4">
          <h3>
            {{ item.university }}
          </h3>

          <p class="text-base text-fg-muted">
            {{ item.fullName }}
          </p>

          <div class="flex items-center gap-2">
            <Icon
              icon="tabler:school"
              class="size-4 shrink-0 text-primary"
              aria-hidden="true"
            />

            <span class="text-fg-muted">
              {{ item.faculty }}
            </span>
          </div>
        </div>

        <!-- Status -->
        <div class="mt-auto flex items-center gap-2">
          <span class="size-1.5 rounded-full bg-primary" />

          <span class="font-mono text-xs uppercase tracking-wider text-fg-dim">
            {{ item.status }}
          </span>
        </div>
      </motion.article>
    </div>

    <!-- Resume -->
    <motion.div
      :variants="fadeUp"
      initial="hidden"
      whileInView="visible"
      :inViewOptions="viewport"
      class="mt-6 flex flex-col second-apce border-t border-border/40 pt-8 sm:flex-row sm:items-center sm:justify-between"
    >
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <Icon
            icon="tabler:file-cv"
            class="size-6 text-primary"
            aria-hidden="true"
          />

          <h3 class="text-xl font-medium">Резюме / CV</h3>
        </div>

        <p class="max-w-md text-sm text-fg-muted">
          Подробная информация об образовании, технических навыках и проектах.
        </p>
      </div>

      <!-- Download -->
      <a
        v-if="resumeUrl"
        :href="resumeUrl"
        download
        class="btn btn-outline w-fit"
      >
        Скачать резюме

        <Icon icon="tabler:download" class="size-5" aria-hidden="true" />
      </a>

      <span
        v-else
        class="inline-flex w-fit items-center gap-2 text-sm text-fg-dim"
      >
        <Icon icon="tabler:clock" class="size-4" aria-hidden="true" />
        Резюме в подготовке
      </span>
    </motion.div>

    <motion.div
      :initial="{ opacity: 0, scaleX: 0 }"
      :animate="{ opacity: 1, scaleX: 1 }"
      :transition="{
        duration: 0.9,
        delay: 0.7,
        ease: 'easeOut',
      }"
      class="mt-20 h-px origin-left bg-border/40 lg:col-span-2"
      aria-hidden="true"
    />
  </motion.section>

  <!-- =====================
         03 / PRINCIPLES
    ====================== -->
  <motion.section
    :variants="delayChildren"
    initial="hidden"
    whileInView="visible"
    :inViewOptions="viewport"
    aria-labelledby="principles-heading"
  >
    <!-- Heading -->
    <motion.div
      :variants="fadeUp"
      class="mb-10 flex flex-col first-space lg:mb-12"
    >
      <Badge number="03" text="Principles" class="lg:col-span-2" />

      <h2>
        То, что для меня
        <span class="block text-primary"> действительно важно. </span>
      </h2>
    </motion.div>

    <!-- Principles -->
    <div class="grid lg:grid-cols-3">
      <motion.article
        v-for="item in principles"
        :key="item.number"
        :variants="fadeUp"
        class="group flex flex-col second-space border-t border-border/40 py-9 transition-colors duration-300 hover:bg-primary/5 lg:px-8 lg:py-10 lg:first:pl-0 lg:last:pr-0 lg:not-first:border-l"
      >
        <div class="flex items-center justify-between">
          <span class="font-mono text-xs text-fg-dim group-hover:text-primary">
            / {{ item.number }}
          </span>

          <Icon
            :icon="item.icon"
            class="size-6 text-fg-dim transition-colors duration-300 group-hover:text-primary"
            aria-hidden="true"
          />
        </div>

        <div class="flex flex-col gap-5">
          <h4>
            {{ item.title }}
          </h4>

          <p>
            {{ item.description }}
          </p>
        </div>
      </motion.article>
    </div>

    <motion.div
      :initial="{ opacity: 0, scaleX: 0 }"
      :animate="{ opacity: 1, scaleX: 1 }"
      :transition="{
        duration: 0.9,
        delay: 0.7,
        ease: 'easeOut',
      }"
      class="mt-20 h-px origin-left bg-border/40 lg:col-span-2"
      aria-hidden="true"
    />
  </motion.section>

  <!-- =====================
         04 / BEYOND THE CODE
    ====================== -->
  <motion.section
    :variants="delayChildren"
    initial="hidden"
    whileInView="visible"
    :inViewOptions="viewport"
    aria-labelledby="beyond-heading"
    class="flex justify-between first-space"
  >
    <motion.div :variants="fadeUp" class="flex flex-col second-space">
      <Badge number="04" text="Beyond the code" />

      <h2>
        Не только
        <span class="block text-primary"> разработка. </span>
      </h2>
    </motion.div>

    <motion.div :variants="fadeUp" class="flex flex-col second-space">
      <p class="text-xl text-fg sm:text-2xl max-w-2xl">
        За пределами редактора кода я остаюсь человеком, которому нравится
        движение, новые идеи и постоянное развитие.
      </p>

      <p class="max-w-2xl">
        В свободное время люблю играть в футбол. Мне нравится сочетание
        командной работы, концентрации и стремления становиться лучше.
      </p>

      <motion.div
        :variants="fadeUp"
        :in-view-options="viewport"
        class="flex flex-wrap gap-3 border-t border-border/40 pt-6"
      >
        <span
          v-for="interest in ['Футбол', 'Дизайн', 'Технологии']"
          :key="interest"
          class="rounded-full border border-border/50 px-4 py-2 font-mono text-xs text-fg-muted"
        >
          {{ interest }}
        </span>
      </motion.div>
    </motion.div>

    <motion.div
      :initial="{ opacity: 0, scaleX: 0 }"
      :animate="{ opacity: 1, scaleX: 1 }"
      :transition="{
        duration: 0.9,
        delay: 0.7,
        ease: 'easeOut',
      }"
      class="mt-20 h-px origin-left bg-border/40 lg:col-span-12"
      aria-hidden="true"
    />
  </motion.section>
</template>
