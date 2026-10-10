<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 -z-1 overflow-hidden"
  >
    <!-- Dotted grid -->
    <div class="editorial-grid absolute inset-0" />

    <!-- Main glow, behind the preview -->
    <div
      class="editorial-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[min(85vw,900px)] rounded-full"
    />
  </div>
</template>
