<script setup lang="ts">
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <div
    class="min-h-screen bg-background-dark text-text-dark flex flex-col font-sans relative overflow-x-hidden"
  >
    <!-- Skip to Content Link for accessibility -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only fixed top-4 left-4 bg-primary text-text-dark px-4 py-2 rounded-full font-bold z-[2000] shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      Skip to content
    </a>

    <!-- Sticky Navigation -->
    <Navbar />

    <!-- Main Content Frame -->
    <main id="main-content" class="flex-grow pt-20 focus:outline-none" tabindex="-1">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Minimal Footer -->
    <Footer />
  </div>
</template>

<style>
/* Smooth route transition declarations */
.page-fade-enter-active,
.page-fade-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
