<script setup lang="ts">
defineProps({
  number: String,
  text: String,
});
</script>

<template>
  <div
    class="flex items-center gap-3 font-mono text-xs tracking-widest text-fg-dim uppercase"
  >
    <span class="text-primary">{{ number }} /</span>
    {{ text }}
  </div>
</template>
