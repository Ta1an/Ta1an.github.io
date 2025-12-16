<script setup>
    import { motion } from 'motion-v';
import { defineProps } from 'vue'

const props = defineProps({
  header: String,
  description: String,
  index: Number,
  iconClass: {
    type: String,
    default: 'bx bx-question-mark' // дефолтная иконка
  }
})
</script>

<template>
    <motion.div class="container" :initial="{ opacity: 0 }"
                                :while-in-view="{ opacity: 1 }"
                                :transition="{ duration: 0.6, ease: 'easeOut', delay: 0.2 + index * 0.2 }"
                                :in-view-options="{ once: true, amount: 0.3 }">
        <i :class="iconClass"></i>
        <h3>{{ header }}</h3>
        <p>{{ description }}</p>
    </motion.div>
</template>

<style scoped>
    @reference "#main.css";

    .container {
        transition: transform .3s ease, box-shadow .3s ease;
        @apply text-left flex flex-col gap-3 p-4 bg-bg rounded-3xl shadow-small border-2 border-primary;  
    }

    .container:hover {
        transform: translateY(-10px);
        box-shadow: var(--glow-small);
    }

    .container i {
        @apply text-6xl text-primary;
    }
</style>