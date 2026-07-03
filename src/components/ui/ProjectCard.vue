<script setup lang="ts">
import type { Project } from '../../types'
import Badge from './Badge.vue'
import Tag from './Tag.vue'
import Button from './Button.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    class="group flex flex-col h-full rounded-2xl overflow-hidden bg-surface-dark border border-border-dark hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative text-left"
  >
    <!-- Featured Badge -->
    <div v-if="project.featured" class="absolute top-4 right-4 z-10">
      <Badge variant="primary">Featured</Badge>
    </div>

    <!-- Project Image Frame -->
    <div class="relative aspect-video w-full overflow-hidden bg-background-dark/60">
      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent z-1 pointer-events-none"
      ></div>

      <!-- Styled Placeholder if image is placeholder -->
      <div
        v-if="project.image.startsWith('/images/')"
        class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 select-none relative group-hover:scale-102 transition-transform duration-500"
      >
        <svg
          class="w-12 h-12 text-primary/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span
          class="absolute bottom-3 left-4 text-[10px] font-mono text-muted-dark uppercase tracking-widest"
          >{{ project.category }}</span
        >
      </div>
      <img
        v-else
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
      />
    </div>

    <!-- Project Content -->
    <div class="flex flex-col flex-grow p-5 md:p-6">
      <h3
        class="text-lg md:text-xl font-bold font-display text-text-dark group-hover:text-primary transition-colors duration-200"
      >
        {{ project.title }}
      </h3>
      <p class="mt-2 text-sm text-muted-dark leading-relaxed flex-grow">
        {{ project.description }}
      </p>

      <!-- Tech Stack Tags -->
      <div class="flex flex-wrap gap-1.5 mt-4">
        <Tag v-for="tech in project.technologies" :key="tech">{{ tech }}</Tag>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3 mt-6 pt-4 border-t border-border-dark/60">
        <Button
          :href="project.githubUrl"
          variant="outline"
          size="sm"
          icon="Github"
          class="flex-1 text-xs py-2"
        >
          Code
        </Button>
        <Button
          :href="project.liveUrl"
          variant="primary"
          size="sm"
          icon="ExternalLink"
          iconPosition="right"
          class="flex-1 text-xs py-2"
        >
          Live Demo
        </Button>
      </div>
    </div>
  </div>
</template>
