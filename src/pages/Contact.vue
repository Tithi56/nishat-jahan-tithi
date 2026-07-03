<script setup lang="ts">
import { contactData } from '../db/contact'
import { socialData } from '../db/social'
import ContactForm from '../components/ui/ContactForm.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import Icon from '../components/common/Icon.vue'
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-16 space-y-12">
    <!-- Header -->
    <SectionTitle
      title="Get In Touch"
      subtitle="Have an opportunity, a project proposal, or simply want to connect? Reach out below."
    />

    <!-- Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
      <!-- Contact Information (Left: 5 cols) -->
      <div class="lg:col-span-5 space-y-8 opacity-0 animate-fade-in-up delay-100 text-left">
        <div class="space-y-6">
          <h3 class="text-lg md:text-xl font-bold font-display text-text-dark">
            Contact Information
          </h3>

          <!-- Details List -->
          <div class="space-y-4 font-sans text-sm">
            <!-- Address -->
            <div
              class="flex items-start gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark"
            >
              <span class="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                <Icon name="MapPin" :size="18" />
              </span>
              <div>
                <p class="font-bold text-text-dark">Address</p>
                <p class="text-muted-dark mt-1 leading-relaxed">{{ contactData.address }}</p>
              </div>
            </div>

            <!-- Email -->
            <div
              class="flex items-start gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark"
            >
              <span class="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                <Icon name="Mail" :size="18" />
              </span>
              <div>
                <p class="font-bold text-text-dark">Email Address</p>
                <a
                  :href="`mailto:${contactData.email}`"
                  class="text-muted-dark hover:text-primary transition-colors mt-1 block font-mono"
                >
                  {{ contactData.email }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Channels -->
        <div class="space-y-4">
          <h4 class="text-sm font-bold uppercase tracking-wider text-muted-dark">
            Connect on Social Media
          </h4>
          <div class="flex gap-3">
            <a
              v-for="social in socialData"
              :key="social.platform"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border-dark bg-surface-dark text-xs font-semibold text-muted-dark hover:text-primary hover:border-primary/30 transition-all"
            >
              <Icon :name="social.iconName" :size="16" />
              <span>{{ social.platform }}</span>
            </a>
          </div>
        </div>

        <!-- Map Iframe Locator -->
        <div
          class="rounded-2xl overflow-hidden border border-border-dark bg-surface-dark aspect-video w-full"
        >
          <iframe
            :src="contactData.googleMapEmbedUrl"
            class="w-full h-full border-none grayscale invert contrast-110 opacity-70"
            loading="lazy"
            title="Google Maps Location Indicator"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Contact Feedback Form (Right: 7 cols) -->
      <div class="lg:col-span-7 opacity-0 animate-fade-in-up delay-200">
        <ContactForm />
      </div>
    </div>
  </div>
</template>
