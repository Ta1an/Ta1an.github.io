<script setup lang="ts">
import { Icon } from "@iconify/vue";

const media = [
  {
    href: "https://wa.me/+77000241856",
    icon: "tabler:brand-whatsapp",
  },
  {
    href: "https://www.linkedin.com/in/ta1an",
    icon: "tabler:brand-linkedin",
  },
  {
    href: "https://t.me/arvenyx13",
    icon: "tabler:brand-telegram",
  },
];
</script>

<template>
  <div class="flex gap-3 items-center">
    <a class="icon-btn" v-for="item in media" :href="item.href"
      ><Icon :icon="item.icon" class="size-5"
    /></a>
  </div>
</template>
