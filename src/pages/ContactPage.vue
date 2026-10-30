<script setup lang="ts">
import { reactive } from "vue";
import { motion } from "motion-v";
import { Icon } from "@iconify/vue";

import Badge from "@/components/ui/badge.vue";

import { contact, contactMethods } from "@/data/contact";

import { fadeUp, delayChildren, viewport } from "@/components/utils/motion";

type InquiryType = "project" | "job" | "other";

const inquiryTypes: Record<InquiryType, string> = {
  project: "Обсуждение проекта",
  job: "Предложение о работе",
  other: "Другой вопрос",
};

const form = reactive({
  name: "",
  replyTo: "",
  type: "project" as InquiryType,
  message: "",
});

const submitForm = () => {
  const name = form.name.trim();
  const replyTo = form.replyTo.trim();
  const message = form.message.trim();

  if (!name || !replyTo || !message) return;

  const text = [
    `Здравствуйте! Меня зовут ${name}.`,
    "",
    `Тема: ${inquiryTypes[form.type]}`,
    `Контакт для ответа: ${replyTo}`,
    "",
    message,
  ].join("\n");

  const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank", "noopener,noreferrer");
};
</script>

<template>
  <!-- =====================
       01 / CONTACT HERO
  ====================== -->
  <motion.section
    id="contact"
    :variants="delayChildren"
    initial="hidden"
    animate="visible"
    aria-labelledby="contact-heading"
    class="flex flex-col first-space pt-32 sm:pt-40 lg:pt-44"
  >
    <!-- Eyebrow -->
    <motion.div :variants="fadeUp">
      <Badge number="01" text="Contact" />
    </motion.div>

    <!-- Heading -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] second-space">
      <motion.h1 id="contact-heading" :variants="fadeUp">
        Есть идея?
        <span class="block text-primary"> Давайте обсудим. </span>
      </motion.h1>

      <motion.div  :variants="fadeUp" class="flex flex-col justify-end third-space">
        <p class="max-w-md">
          Открыт к интересным проектам, предложениям о работе и новым
          возможностям сотрудничества.
        </p>

        <span class="font-mono text-xs uppercase tracking-[0.15em] text-fg-dim">
          Let's Build Something Together
        </span>
      </motion.div>
    </div>

    <!-- Hero Bottom -->
    <motion.div
      :variants="fadeUp"
      class="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-border/40 pt-6 sm:mt-20"
    >
      <div class="flex items-center gap-3">
        <span class="size-2 rounded-full bg-primary shadow-glow-sm" />

        <span
          class="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dim"
        >
          Открыт к сотрудничеству
        </span>
      </div>

      <span class="font-mono text-xs text-fg-dim"> Алматы, Казахстан </span>
    </motion.div>
  </motion.section>

  <!-- =====================
       02 / CONTACT DETAILS
  ====================== -->
  <section
    aria-labelledby="contact-options-heading"
    class="grid grid-cols-1 first-space lg:grid-cols-2"
  >
    <!-- LEFT / DIRECT CONTACTS -->
    <motion.div
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
      class="flex min-w-0 flex-col"
    >
      <!-- Heading -->
      <div class="flex flex-col gap-6">
        <Badge number="02" text="Get in Touch" />

        <h2 id="contact-options-heading">
          Давайте
          <span class="block text-primary"> на связи. </span>
        </h2>

        <p class="max-w-md">
          Есть вопрос, предложение или интересная идея? Выберите удобный способ
          связи и напишите мне.
        </p>
      </div>

      <!-- Contact Methods -->
      <div class="flex flex-col">
        <a
          v-for="method in contactMethods"
          :key="method.label"
          :href="method.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-4 border-t border-border/50 py-6 transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-primary"
        >
          <!-- Icon -->
          <div
            class="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border/50 transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/5"
          >
            <Icon
              :icon="method.icon"
              class="size-6 text-fg-muted transition-colors duration-300 group-hover:text-primary"
              aria-hidden="true"
            />
          </div>

          <!-- Text -->
          <div class="flex min-w-0 flex-1 flex-col gap-2">
            <span
              class="text-lg font-medium transition-colors duration-300 group-hover:text-primary"
            >
              {{ method.label }}
            </span>

            <span class="text-sm text-fg-muted">
              {{ method.description }}
            </span>
          </div>

          <!-- Arrow -->
          <Icon
            icon="tabler:arrow-up-right"
            class="size-5 shrink-0 text-fg-dim transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
            aria-hidden="true"
          />
        </a>
      </div>

      <!-- Location -->
      <div class="flex items-center gap-3 border-t border-border/40 pt-6">
        <Icon
          icon="tabler:map-pin"
          class="size-5 text-primary"
          aria-hidden="true"
        />

        <span class="font-mono text-xs uppercase tracking-wider text-fg-dim">
          Based in Almaty, Kazakhstan
        </span>
      </div>
    </motion.div>

    <!-- RIGHT / CONTACT FORM -->
    <motion.div
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="viewport"
    >
      <div class="flex flex-col gap-10 border-t border-border/50 pt-8 lg:pt-10">
        <!-- Heading -->
        <div class="flex flex-col gap-4">
          <span
            class="font-mono text-xs uppercase tracking-[0.18em] text-primary"
          >
            / Новое сообщение
          </span>

          <h2 class="text-2xl font-medium sm:text-3xl">
            Расскажите о вашей задаче.
          </h2>

          <p class="max-w-lg text-sm text-fg-muted">
            Заполните несколько полей, и я подготовлю сообщение для отправки
            через WhatsApp.
          </p>
        </div>

        <!-- Form -->
        <form class="flex flex-col gap-7" @submit.prevent="submitForm">
          <!-- Name and Contact -->
          <div class="grid gap-7 sm:grid-cols-2">
            <div class="flex flex-col gap-3">
              <label for="contact-name" class="text-sm font-medium text-fg">
                Ваше имя
                <span class="text-primary">*</span>
              </label>

              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                placeholder="Как к вам обращаться?"
                required
                maxlength="100"
                class="w-full min-w-0 border-b border-border/70 bg-transparent py-4 text-sm text-fg outline-none transition-colors placeholder:text-fg-dim focus:border-primary"
              />
            </div>

            <div class="flex flex-col gap-3">
              <label for="contact-reply" class="text-sm font-medium text-fg">
                Контакт для ответа
                <span class="text-primary">*</span>
              </label>

              <input
                id="contact-reply"
                v-model="form.replyTo"
                type="text"
                name="replyTo"
                placeholder="Email, Telegram или телефон"
                required
                maxlength="150"
                class="w-full min-w-0 border-b border-border/70 bg-transparent py-4 text-sm text-fg outline-none transition-colors placeholder:text-fg-dim focus:border-primary"
              />
            </div>
          </div>

          <!-- Inquiry Type -->
          <div class="flex flex-col gap-3">
            <label for="contact-type" class="text-sm font-medium text-fg">
              Тема обращения
            </label>

            <div class="relative">
              <select
                id="contact-type"
                v-model="form.type"
                name="type"
                class="w-full cursor-pointer appearance-none border-b border-border/70 bg-transparent py-4 pr-10 text-sm text-fg outline-none transition-colors duration-300 focus:border-primary"
              >
                <option
                  v-for="(label, value) in inquiryTypes"
                  :key="value"
                  :value="value"
                  class="bg-bg-dark text-fg"
                >
                  {{ label }}
                </option>
              </select>

              <Icon
                icon="tabler:chevron-down"
                class="pointer-events-none absolute top-1/2 right-2 size-5 -translate-y-1/2 text-fg-dim"
                aria-hidden="true"
              />
            </div>
          </div>

          <!-- Message -->
          <div class="flex flex-col gap-3">
            <label for="contact-message" class="text-sm font-medium text-fg">
              Ваше сообщение
              <span class="text-primary">*</span>
            </label>

            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              rows="5"
              required
              maxlength="3000"
              placeholder="Расскажите немного о проекте, вакансии или вашей идее..."
              class="w-full resize-y border-b border-border/70 bg-transparent py-4 text-sm leading-relaxed text-fg outline-none transition-colors placeholder:text-fg-dim focus:border-primary"
            />
          </div>

          <!-- Submit -->
          <div class="flex flex-col items-start gap-5 pt-3">
            <button
              type="submit"
              class="group inline-flex cursor-pointer items-center gap-5 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span
                class="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary-strong text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow"
              >
                <Icon
                  icon="tabler:arrow-up-right"
                  class="size-6"
                  aria-hidden="true"
                />
              </span>

              <span
                class="border-b border-fg/50 pb-2 text-lg font-medium transition-colors duration-300 group-hover:border-primary group-hover:text-primary sm:text-xl"
              >
                Продолжить в WhatsApp
              </span>
            </button>

            <p class="max-w-md text-xs leading-relaxed text-fg-dim">
              После нажатия откроется WhatsApp с подготовленным сообщением. Для
              отправки потребуется ваше подтверждение в приложении.
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  </section>
</template>
