<script setup>
   import { defineProps } from 'vue'
   import { motion } from 'motion-v'

    defineProps({
        name: String,
        index: Number,
    })
</script>

<template>
    <motion.div class="container" :initial="{ opacity: 0, y: 20 }"
                                :while-in-view="{ opacity: 1, y: 0 }"
                                :transition="{ duration: 0.6, ease: 'easeOut', delay: 0.4 + index * 0.2 }"
                                :in-view-options="{ once: true, amount: 0.3 }">
        <h4>{{ name }}</h4> 
    </motion.div>
</template>

<style scoped>
    @reference '#main.css';

    .container {
        transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

        @apply w-35 text-center content-center p-2 bg-bg rounded-2xl border-2 border-bg shadow-small;
    }

    .container:hover {
        @apply border-primary shadow-(--glow-small);
    }
</style>