<script setup lang="ts">
withDefaults(
  defineProps<{
    interactive?: boolean
    active?: boolean
  }>(),
  {
    interactive: false,
    active: false,
  },
)
</script>

<template>
  <span
    :class="[
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200',
      active
        ? 'bg-primary border-primary text-white shadow-sm'
        : 'bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-350 border-slate-200/60 dark:border-slate-700/50',
      interactive && !active
        ? 'hover:border-primary hover:text-primary cursor-pointer hover:bg-primary/5'
        : '',
    ]"
  >
    <slot></slot>
  </span>
</template>
