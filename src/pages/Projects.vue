<script setup lang="ts">
import { ref, computed } from 'vue'
import { projectsData } from '../db/projects'
import ProjectCard from '../components/ui/ProjectCard.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import Icon from '../components/common/Icon.vue'

const searchQuery = ref('')
const selectedCategory = ref<'all' | 'web' | 'design' | 'programming'>('all')

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'programming', label: 'Programming' },
  { id: 'design', label: 'UI/UX Design' },
] as const

const filteredProjects = computed(() => {
  return projectsData.filter((project) => {
    // Search match
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.value.toLowerCase()),
      )

    // Category match
    const matchesCategory =
      selectedCategory.value === 'all' || project.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})

const selectCategory = (catId: 'all' | 'web' | 'design' | 'programming') => {
  selectedCategory.value = catId
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-16 space-y-12">
    <!-- Header -->
    <SectionTitle
      title="Projects Archive"
      subtitle="A detailed index of web applications, design templates, and algorithms research."
    />

    <!-- Filter Control Bar (Designed to prevent any horizontal overflow) -->
    <div
      class="opacity-0 animate-fade-in-up delay-100 flex flex-col md:flex-row gap-4 items-center justify-between bg-surface-dark border border-border-dark p-4 rounded-2xl w-full max-w-full overflow-hidden"
    >
      <!-- Search Box -->
      <div class="relative w-full md:w-80">
        <span
          class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-dark"
        >
          <Icon name="Search" :size="16" />
        </span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by title or tech..."
          class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-dark bg-background-dark/60 text-sm text-text-dark placeholder-slate-500 focus:bg-background-dark outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
        />
        <button
          v-if="searchQuery"
          @click="searchQuery = ''"
          type="button"
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-dark hover:text-text-dark"
          aria-label="Clear search"
        >
          <Icon name="X" :size="14" />
        </button>
      </div>

      <!-- Categories Filter Tabs (flex-wrap guarantees zero horizontal scrolling issues) -->
      <div class="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectCategory(cat.id)"
          type="button"
          class="px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-pointer"
          :class="[
            selectedCategory === cat.id
              ? 'bg-primary border-primary text-text-dark shadow-sm'
              : 'bg-background-dark border-border-dark text-muted-dark hover:border-primary/45 hover:text-text-dark',
          ]"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="w-full max-w-full overflow-hidden">
      <!-- Empty State -->
      <transition name="fade" mode="out-in">
        <div
          v-if="filteredProjects.length === 0"
          class="py-16 text-center bg-surface-dark border border-border-dark rounded-2xl opacity-0 animate-fade-in-up"
        >
          <div
            class="w-12 h-12 rounded-xl bg-border-dark/80 text-muted-dark flex items-center justify-center mx-auto mb-4"
          >
            <Icon name="HelpCircle" :size="24" />
          </div>
          <h3 class="text-base font-bold text-text-dark">No projects found</h3>
          <p class="text-xs text-muted-dark mt-1 font-sans">
            Try adjusting your search criteria or choosing a different category tab.
          </p>
        </div>

        <!-- Project Cards Stack -->
        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 opacity-0 animate-fade-in-up delay-200"
        >
          <transition-group name="grid-anim">
            <div v-for="project in filteredProjects" :key="project.id" class="h-full">
              <ProjectCard :project="project" />
            </div>
          </transition-group>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Scoped Transition animations to avoid any layout shifts or overflow bugs during sorting */
.grid-anim-enter-active,
.grid-anim-leave-active {
  transition: all 0.3s ease;
}
.grid-anim-enter-from,
.grid-anim-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
.grid-anim-move {
  transition: transform 0.3s ease;
}
</style>
