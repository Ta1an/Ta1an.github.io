<script setup>
import { motion } from 'motion-v'

     defineProps({
        header: String,
        description: String,
        imageUrl: String,
        index: Number
    })
</script>
<template>
    <motion.div class="container" 
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.6, ease: 'easeOut', delay: 0.3 + index * 0.15 }"
                :in-view-options="{ once: true, amount: 0.3 }">
         <img :src="imageUrl" alt="Card Image">
        <div class="header">
            <h4>{{ header }}</h4>
            <p>{{ description }}</p>
        </div>
    </motion.div>
</template>

<style scoped>
    @reference '#main.css';

    .container .header {
        @apply flex flex-col text-left;
    }

    .container .header p {
        @apply hidden lg:inline;
    }

    .container {
        transition: border-color .3s ease, box-shadow .3s ease;
        @apply flex flex-col lg:flex-row justify-center items-center gap-2 p-4 bg-bg rounded-2xl shadow-small border-2 border-bg;
    }

    .container:hover {
       @apply border-primary shadow-(--glow-small);
    }


    
</style>