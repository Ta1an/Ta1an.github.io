<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<template>
  <div
    class="inline-flex items-center gap-3 rounded-full border border-border py-2 px-4 text-sm text-fg-muted mb-4"
  >
    <span class="size-2 rounded-full bg-primary shadow-glow-sm" />
    {{ text }}
  </div>
</template>
