<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { projectsData } from '../db/projects'
import { certificatesData } from '../db/certificates'
import { aboutData } from '../db/about'
import ProjectCard from '../components/ui/ProjectCard.vue'
import CertificateCard from '../components/ui/CertificateCard.vue'
import Button from '../components/ui/Button.vue'
import Icon from '../components/common/Icon.vue'

// Featured projects (limit to 2)
const featuredProjects = computed(() => projectsData.filter((p) => p.featured).slice(0, 2))

// Latest certificates (limit to 2)
const latestCertificates = computed(() => certificatesData.slice(0, 2))
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 md:px-8 py-10 space-y-24">
    <!-- Hero Section -->
    <section class="min-h-[60vh] flex flex-col justify-center text-left py-12 md:py-20">
      <div class="space-y-6 max-w-3xl opacity-0 animate-fade-in-up">
        <!-- Badge -->
        <span
          class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow"></span>
          Available for Opportunities
        </span>

        <h1
          class="text-4xl md:text-6xl font-black font-display text-text-dark tracking-tight leading-none"
        >
          Hi, I'm <span class="text-primary">{{ aboutData.name }}</span>
        </h1>

        <p class="text-xl md:text-2xl font-bold text-muted-dark">
          {{ aboutData.title }}
        </p>

        <p class="text-base md:text-lg text-muted-dark leading-relaxed font-sans max-w-2xl">
          {{ aboutData.careerObjective }}
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <Button
            href="/projects"
            variant="primary"
            size="lg"
            icon="ChevronRight"
            iconPosition="right"
          >
            View Projects
          </Button>
          <Button href="/contact" variant="outline" size="lg"> Get in touch </Button>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="space-y-8 opacity-0 animate-fade-in-up delay-100">
      <div class="flex items-end justify-between border-b border-border-dark/60 pb-4">
        <div>
          <h2 class="text-2xl font-bold font-display text-text-dark">Featured Projects</h2>
          <p class="text-sm text-muted-dark mt-1">
            A collection of select application frameworks and tools.
          </p>
        </div>
        <RouterLink
          to="/projects"
          class="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          View all projects
          <Icon name="ChevronRight" :size="16" />
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
      </div>

      <div class="text-center sm:hidden">
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          View all projects
          <Icon name="ChevronRight" :size="16" />
        </RouterLink>
      </div>
    </section>

    <!-- Latest Certificates Section -->
    <section class="space-y-8 opacity-0 animate-fade-in-up delay-200">
      <div class="flex items-end justify-between border-b border-border-dark/60 pb-4">
        <div>
          <h2 class="text-2xl font-bold font-display text-text-dark">Latest Certificates</h2>
          <p class="text-sm text-muted-dark mt-1">
            Professional credentials and certification credentials.
          </p>
        </div>
        <RouterLink
          to="/certificates"
          class="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          View all certificates
          <Icon name="ChevronRight" :size="16" />
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <CertificateCard v-for="cert in latestCertificates" :key="cert.id" :certificate="cert" />
      </div>

      <div class="text-center sm:hidden">
        <RouterLink
          to="/certificates"
          class="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          View all certificates
          <Icon name="ChevronRight" :size="16" />
        </RouterLink>
      </div>
    </section>

    <!-- Connect / Contact CTA Section -->
    <section
      class="opacity-0 animate-fade-in-up delay-300 p-8 md:p-12 rounded-2xl bg-surface-dark border border-border-dark flex flex-col md:flex-row items-center justify-between gap-8 text-left"
    >
      <div class="space-y-2 max-w-xl">
        <h3 class="text-xl md:text-2xl font-bold font-display text-text-dark">
          Interested in working together?
        </h3>
        <p class="text-sm md:text-base text-muted-dark leading-relaxed">
          I'm always open to discussing web projects, design systems, or internship positions. Drop
          a line and let's construct something excellent.
        </p>
      </div>
      <Button href="/contact" variant="primary" size="lg"> Contact Me </Button>
    </section>
  </div>
</template>
