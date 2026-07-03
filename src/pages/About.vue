<script setup lang="ts">
import { aboutData } from '../db/about'
import { experienceData } from '../db/experience'
import { educationData } from '../db/education'
import { skillsData } from '../db/skills'
import SectionTitle from '../components/ui/SectionTitle.vue'
import Icon from '../components/common/Icon.vue'

// Helper to filter skills by category
const getSkillsByCategory = (category: string) => {
  return skillsData.filter((s) => s.category === category)
}

const skillCategories = [
  { id: 'programming', label: 'Programming Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'database', label: 'Databases' },
  { id: 'design', label: 'Design Tools' },
  { id: 'office', label: 'Office Applications' },
  { id: 'professional', label: 'Professional Skills' },
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-16 space-y-16">
    <!-- About Intro / Career Objective -->
    <section class="opacity-0 animate-fade-in-up text-left space-y-4">
      <div class="inline-flex items-center gap-2">
        <span class="h-0.5 w-6 bg-primary"></span>
        <span class="text-xs font-bold uppercase tracking-widest text-primary">Overview</span>
      </div>
      <h1 class="text-3xl md:text-4xl font-black font-display text-text-dark tracking-tight">
        Nishat Jahan Tithi
      </h1>
      <p class="text-base text-muted-dark font-sans max-w-xl">
        Software Developer & Computer Science graduate based in Dhaka, Bangladesh.
      </p>

      <div
        class="mt-8 p-6 md:p-8 rounded-2xl bg-surface-dark border border-border-dark leading-relaxed text-text-dark/95 font-sans"
      >
        <p class="text-base md:text-lg leading-relaxed italic text-text-dark font-medium">
          "{{ aboutData.careerObjective }}"
        </p>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="opacity-0 animate-fade-in-up delay-100 text-left space-y-8">
      <SectionTitle title="Professional Experience" />

      <div class="relative border-l border-border-dark ml-3 space-y-10 pl-6 md:pl-8">
        <div v-for="exp in experienceData" :key="exp.id" class="relative group">
          <!-- Timeline point dot -->
          <span
            class="absolute -left-[31px] md:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-border-dark bg-background-dark group-hover:border-primary transition-colors duration-200"
          ></span>

          <div class="space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3
                  class="text-lg font-bold text-text-dark group-hover:text-primary transition-colors"
                >
                  {{ exp.role }}
                </h3>
                <p class="text-sm font-medium text-muted-dark">{{ exp.company }}</p>
              </div>
              <span
                class="text-xs font-semibold text-muted-dark font-mono bg-surface-dark border border-border-dark px-2.5 py-1 rounded-lg self-start sm:self-auto"
              >
                {{ exp.startDate }} &ndash; {{ exp.endDate }}
              </span>
            </div>

            <!-- Responsibilities -->
            <ul
              class="space-y-2 text-sm text-muted-dark list-disc list-inside leading-relaxed font-sans"
            >
              <li v-for="(resp, i) in exp.responsibilities" :key="i">
                {{ resp }}
              </li>
            </ul>

            <!-- Technologies used -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="tech in exp.technologies"
                :key="tech"
                class="px-2.5 py-0.5 rounded-lg bg-surface-dark border border-border-dark text-xs font-semibold text-primary"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="opacity-0 animate-fade-in-up delay-200 text-left space-y-8">
      <SectionTitle title="Education" />

      <div class="relative border-l border-border-dark ml-3 space-y-8 pl-6 md:pl-8">
        <div v-for="edu in educationData" :key="edu.id" class="relative group">
          <span
            class="absolute -left-[31px] md:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-border-dark bg-background-dark group-hover:border-primary transition-colors duration-200"
          ></span>

          <div class="space-y-2">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 class="text-base font-bold text-text-dark">
                  {{ edu.degree }}
                </h3>
                <p class="text-sm text-muted-dark">{{ edu.institution }}</p>
              </div>
              <span
                class="text-xs font-semibold text-muted-dark font-mono bg-surface-dark border border-border-dark px-2.5 py-1 rounded-lg self-start sm:self-auto"
              >
                {{ edu.startDate }} &ndash; {{ edu.endDate }}
              </span>
            </div>
            <div class="flex flex-wrap items-center gap-3 text-xs text-muted-dark mt-1 font-mono">
              <span v-if="edu.fieldOfStudy" class="text-text-dark font-sans">{{
                edu.fieldOfStudy
              }}</span>
              <span
                v-if="edu.result"
                class="px-2 py-0.5 rounded bg-surface-dark border border-border-dark text-primary font-bold"
                >{{ edu.result }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Redesigned Skills Grid -->
    <section class="opacity-0 animate-fade-in-up delay-300 text-left space-y-8">
      <SectionTitle
        title="Technical Skills"
        subtitle="Categorized list of systems, methodologies, and framework competencies."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="cat in skillCategories"
          :key="cat.id"
          class="p-5 rounded-2xl bg-surface-dark border border-border-dark hover:border-primary/20 transition-all duration-200"
        >
          <h3
            class="text-sm font-bold uppercase tracking-wider text-primary border-b border-border-dark pb-2.5 mb-3.5"
          >
            {{ cat.label }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in getSkillsByCategory(cat.id)"
              :key="skill.name"
              class="inline-flex items-center px-3 py-1 rounded-lg bg-background-dark border border-border-dark text-xs font-semibold text-text-dark hover:border-primary/30 transition-colors"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Languages Section -->
    <section class="opacity-0 animate-fade-in-up delay-400 text-left space-y-6">
      <SectionTitle title="Languages" />
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="lang in aboutData.languages"
          :key="lang.name"
          class="p-4 rounded-xl bg-surface-dark border border-border-dark text-center"
        >
          <p class="text-sm font-bold text-text-dark">{{ lang.name }}</p>
          <p class="text-xs text-muted-dark mt-1 font-sans">{{ lang.proficiency }}</p>
        </div>
      </div>
    </section>

    <!-- Extra-Curricular Activities -->
    <section class="opacity-0 animate-fade-in-up delay-500 text-left space-y-8">
      <SectionTitle title="Extra-curricular Activities" />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="act in aboutData.activities"
          :key="act.name"
          class="p-5 rounded-2xl bg-surface-dark border border-border-dark flex items-start gap-4 hover:border-primary/20 transition-all"
        >
          <div class="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5">
            <Icon :name="act.icon" :size="18" />
          </div>
          <div class="space-y-1">
            <h3 class="text-sm font-bold text-text-dark">{{ act.name }}</h3>
            <p class="text-xs text-muted-dark leading-relaxed font-sans">
              {{ act.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
