<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Icon from '../common/Icon.vue'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Contact', path: '/contact' },
]

const isMobileOpen = ref(false)

const closeMobileMenu = () => {
  isMobileOpen.value = false
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 w-full py-4 glass-effect border-b border-border-dark shadow-sm"
  >
    <div class="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
      <!-- Logo / Name Brand -->
      <RouterLink
        to="/"
        @click="closeMobileMenu"
        class="text-lg md:text-xl font-black font-display text-text-dark flex items-center gap-1.5 tracking-tight group hover:scale-[1.01] transition-transform"
      >
        <span class="text-primary">Nishat</span>
        <span class="text-muted-dark font-medium">Tithi</span>
      </RouterLink>

      <!-- Desktop Nav Menu -->
      <div class="hidden md:flex items-center gap-6">
        <ul class="flex items-center gap-6">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink
              :to="item.path"
              class="text-sm font-medium tracking-wide transition-all duration-200 relative py-1.5 block hover:text-primary text-muted-dark"
              active-class="text-primary font-bold"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Mobile Actions Toggle -->
      <div class="flex items-center gap-3 md:hidden">
        <button
          @click="isMobileOpen = !isMobileOpen"
          type="button"
          class="p-2 rounded-lg border border-border-dark bg-surface-dark text-muted-dark hover:text-text-dark cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          :aria-label="isMobileOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isMobileOpen"
        >
          <Icon :name="isMobileOpen ? 'X' : 'Menu'" :size="18" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileOpen"
        class="md:hidden fixed top-[65px] left-4 right-4 p-5 rounded-2xl border border-border-dark bg-surface-dark/95 glass-effect shadow-xl z-40"
      >
        <ul class="flex flex-col gap-3 text-left">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink
              :to="item.path"
              @click="closeMobileMenu"
              class="text-base font-semibold py-2 px-3 rounded-xl transition-all duration-150 block text-muted-dark hover:bg-border-dark hover:text-text-dark"
              active-class="bg-primary/10 text-primary font-bold"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>
