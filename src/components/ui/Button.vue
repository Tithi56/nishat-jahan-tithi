<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../common/Icon.vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    icon?: string
    iconPosition?: 'left' | 'right'
    loading?: boolean
    disabled?: boolean
    href?: string
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    size: 'md',
    iconPosition: 'left',
    loading: false,
    disabled: false,
    type: 'button',
  },
)

const baseClasses =
  'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-transparent'

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3.5 py-1.5 text-xs gap-1.5'
    case 'lg':
      return 'px-6 py-3.5 text-sm font-semibold gap-2.5'
    case 'md':
    default:
      return 'px-5 py-2.5 text-sm font-semibold gap-2'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-secondary text-text-dark hover:bg-primary shadow-sm'
    case 'outline':
      return 'border border-border-dark bg-transparent text-text-dark hover:border-primary/50 hover:bg-primary/5'
    case 'ghost':
      return 'bg-transparent text-muted-dark hover:bg-surface-dark hover:text-text-dark'
    case 'primary':
    default:
      return 'bg-primary text-text-dark hover:bg-primary-hover shadow-sm'
  }
})

const isLink = computed(() => !!props.href)
</script>

<template>
  <a v-if="isLink" :href="href" :class="[baseClasses, sizeClasses, variantClasses]">
    <Icon
      v-if="icon && iconPosition === 'left' && !loading"
      :name="icon"
      :size="size === 'sm' ? 14 : 18"
    />
    <span
      v-if="loading"
      class="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2"
    ></span>
    <slot></slot>
    <Icon
      v-if="icon && iconPosition === 'right' && !loading"
      :name="icon"
      :size="size === 'sm' ? 14 : 18"
    />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    :class="[baseClasses, sizeClasses, variantClasses]"
  >
    <Icon
      v-if="icon && iconPosition === 'left' && !loading"
      :name="icon"
      :size="size === 'sm' ? 14 : 18"
    />
    <span
      v-if="loading"
      class="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2"
    ></span>
    <slot></slot>
    <Icon
      v-if="icon && iconPosition === 'right' && !loading"
      :name="icon"
      :size="size === 'sm' ? 14 : 18"
    />
  </button>
</template>
