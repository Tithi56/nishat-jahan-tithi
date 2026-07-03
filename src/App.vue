<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Simple scroll tracker for the reading progress bar
  window.addEventListener('scroll', () => {
    const scrollIndicator = document.getElementById('page-scroll-indicator')
    if (scrollIndicator) {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0
      scrollIndicator.style.width = scrolled + '%'
    }
  })
})
</script>

<template>
  <!-- Top Reading Progress Indicator -->
  <div id="page-scroll-indicator" class="scroll-indicator w-0"></div>

  <!-- Router View -->
  <router-view />
</template>

<style>
/* Base app styles */
</style>
