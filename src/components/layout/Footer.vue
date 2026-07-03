<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { socialData } from '../../db/social'
import Icon from '../common/Icon.vue'

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-background-dark border-t border-border-dark pt-16 pb-8">
    <div class="max-w-6xl mx-auto px-6 md:px-8 flex flex-col items-center">
      <!-- Back to Top Button -->
      <button
        @click="scrollToTop"
        type="button"
        class="group p-2.5 rounded-full border border-border-dark bg-surface-dark text-muted-dark hover:text-primary hover:border-primary/45 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 mb-10 cursor-pointer"
        aria-label="Scroll to top of page"
      >
        <Icon name="ArrowUp" :size="16" class="group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <!-- Grid Layout -->
      <div
        class="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left border-b border-border-dark pb-10 mb-8"
      >
        <!-- Logo Brand -->
        <div class="flex flex-col items-center md:items-start gap-1">
          <RouterLink
            to="/"
            class="text-lg font-black font-display text-text-dark hover:text-primary transition-colors"
          >
            Nishat Jahan Tithi
          </RouterLink>
          <p class="text-xs text-muted-dark font-medium font-sans">
            Software Developer & CSE Graduate
          </p>
        </div>

        <!-- Quick Links -->
        <div
          class="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-dark font-sans"
        >
          <RouterLink to="/" class="hover:text-primary transition-colors">Home</RouterLink>
          <RouterLink to="/about" class="hover:text-primary transition-colors">About</RouterLink>
          <RouterLink to="/projects" class="hover:text-primary transition-colors"
            >Projects</RouterLink
          >
          <RouterLink to="/certificates" class="hover:text-primary transition-colors"
            >Certificates</RouterLink
          >
          <RouterLink to="/contact" class="hover:text-primary transition-colors"
            >Contact</RouterLink
          >
        </div>

        <!-- Social Links -->
        <div class="flex justify-center md:justify-end gap-3">
          <a
            v-for="social in socialData"
            :key="social.platform"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-lg border border-border-dark bg-surface-dark text-muted-dark hover:text-primary hover:border-primary/30 transition-all"
            :aria-label="social.platform"
          >
            <Icon :name="social.iconName" :size="18" />
          </a>
        </div>
      </div>

      <!-- Copyright Statement -->
      <div
        class="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-dark font-sans"
      >
        <p>&copy; {{ currentYear }} Nishat Jahan Tithi. All rights reserved.</p>
        <p class="flex items-center gap-1">Crafted using Vue 3 & Tailwind v4</p>
      </div>
    </div>
  </footer>
</template>
