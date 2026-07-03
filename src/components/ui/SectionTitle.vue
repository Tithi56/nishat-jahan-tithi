<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div
    :class="[
      'mb-10 md:mb-14 opacity-0 animate-fade-in-up',
      align === 'center' ? 'text-center items-center flex flex-col' : 'text-left',
    ]"
  >
    <div class="inline-flex items-center gap-2 mb-2">
      <span class="h-0.5 w-6 bg-primary"></span>
      <span class="text-xs font-bold uppercase tracking-widest text-primary">Details</span>
    </div>
    <h2 class="text-2xl md:text-3xl font-bold font-display text-text-dark tracking-tight">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-3.5 text-sm md:text-base text-muted-dark max-w-2xl leading-relaxed"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
