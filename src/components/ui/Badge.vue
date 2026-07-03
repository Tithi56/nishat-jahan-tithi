<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'outline' | 'slate'
  }>(),
  {
    variant: 'primary',
  },
)

const classes = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-accent/10 text-accent dark:bg-accent/20 border border-accent/20'
    case 'outline':
      return 'bg-transparent border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
    case 'slate':
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-350 border border-slate-200/50 dark:border-slate-700/50'
    case 'primary':
    default:
      return 'bg-primary/10 text-primary dark:bg-primary/20 border border-primary/20'
  }
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider',
      classes,
    ]"
  >
    <slot></slot>
  </span>
</template>
