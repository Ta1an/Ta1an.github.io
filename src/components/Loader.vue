<script setup>
    import { ref, onMounted, computed } from 'vue'
    import { motion } from 'motion-v'

    const progress = ref(0)
    const emit = defineEmits(['done'])
    const title = 'Welcome'.split('')

    onMounted(() => {
        const interval = setInterval(() => {
        progress.value++

        if (progress.value >= 100) {
            clearInterval(interval)
            setTimeout(() => emit('done'), 500)
            }
        }, 28)
    })

    const displayedPercent = computed(() => {
        return Math.floor(progress.value / 5) * 5
    })
</script>

<template>
  <motion.div class="loader" :initial="{ opacity: 1 }" :exit="{ opacity: 0 }" :transition="{ duration: 0.8, ease: 'easeInOut' }">
    <h1 class="title">
        <motion.span
            class="letter" v-for="(letter, i) in title" :key="i" :initial="{ opacity: 0, y: 40, filter: 'blur(6px)', marginRight: '-6px', 
            scaleX: 0.85 }" :animate="{ opacity: 1, y: 0, filter: 'blur(0px)', marginRight: '0px', scaleX: 1 }" :transition="{ duration: 1, ease: 'easeInOut', delay: i * 0.1 }">
            {{ letter }}
        </motion.span>
    </h1>

    <div class="progress-wrapper">
      <div class="progress-bar" :style="{ '--progress': progress + '%' }"></div>
      <span class="percent">{{ displayedPercent }}%</span>
    </div>


    <motion.p class="status" :key="progress >= 100 ? 'ready' : 'loading'" :initial="{ opacity: 0, y: 6 }" 
    :animate="{ opacity: 0.6, y: 0 }" :transition="{ duration: 0.6 }">{{ progress >= 100 ? 'Ready' : 'Loading' }}</motion.p>
  </motion.div>
</template>

<style scoped>

    @reference '#main.css';

    .loader {
         @apply h-screen flex flex-col items-center justify-center gap-5 lg:gap-8 text-text-light z-10; 
    }
    .title {
        @apply text-5xl md:text-6xl lg:text-8xl flex gap-2;
    }
    .letter {
        @apply text-text-light inline-block;
    }
    .progress-wrapper {
        @apply flex gap-4 flex-col items-center;
    }
    .progress-bar {
        @apply relative w-80 md:w-140 bg-bg-light h-3 rounded-full overflow-hidden;
    }
    .progress-bar::after {
        transition: width .2s ease;
        @apply absolute content-[''] w-(--progress) h-3 bg-[linear-gradient(90deg,var(--color-secondary),var(--color-primary),var(--color-secondary))];
    }
    .percent, .status {
        @apply text-2xl;
    }
</style>