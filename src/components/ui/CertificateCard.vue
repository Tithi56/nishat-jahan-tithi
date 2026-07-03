<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Certificate } from '../../types'
import Icon from '../common/Icon.vue'
import Button from './Button.vue'

defineProps<{
  certificate: Certificate
}>()

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

// Close on ESC
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <!-- Certificate Card -->
    <div
      @click="openModal"
      class="group flex flex-col h-full rounded-2xl overflow-hidden bg-surface-dark border border-border-dark hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer text-left"
    >
      <!-- Certificate Thumbnail -->
      <div
        class="relative aspect-[4/3] w-full overflow-hidden bg-background-dark/65 flex items-center justify-center border-b border-border-dark/60"
      >
        <!-- Overlay on Hover -->
        <div
          class="absolute inset-0 bg-background-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center"
        >
          <span
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-text-dark font-bold text-xs shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Icon name="Eye" :size="14" />
            Quick View
          </span>
        </div>

        <!-- Abstract Certificate Graphic -->
        <div
          class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 select-none p-6 text-center"
        >
          <div
            class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3"
          >
            <Icon name="Award" :size="24" />
          </div>
          <span
            class="text-[10px] font-mono text-muted-dark uppercase tracking-widest block mb-1"
            >{{ certificate.issuer }}</span
          >
          <span class="text-sm font-bold text-text-dark line-clamp-2 px-2">{{
            certificate.title
          }}</span>
        </div>
      </div>

      <!-- Card Details -->
      <div class="p-5 flex flex-col flex-grow">
        <span class="text-xs font-semibold text-accent uppercase tracking-wider mb-1">{{
          certificate.issuer
        }}</span>
        <h3
          class="text-base font-bold font-display text-text-dark group-hover:text-primary transition-colors duration-200 line-clamp-2"
        >
          {{ certificate.title }}
        </h3>
        <div
          class="flex items-center justify-between mt-4 pt-3 border-t border-border-dark/60 text-xs text-muted-dark font-medium"
        >
          <span class="flex items-center gap-1">
            <Icon name="Calendar" :size="12" />
            <span>{{ certificate.issueDate }}</span>
          </span>
          <span class="text-primary flex items-center gap-0.5 group-hover:underline">
            View
            <Icon name="ChevronRight" :size="12" />
          </span>
        </div>
      </div>
    </div>

    <!-- Modal Teleport Preview -->
    <Teleport to="body">
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-background-dark/90 backdrop-blur-sm"
          @click.self="closeModal"
          role="dialog"
          aria-modal="true"
          :aria-label="certificate.title"
        >
          <!-- Modal Card Container -->
          <div
            class="relative w-full max-w-2xl bg-surface-dark rounded-2xl overflow-hidden shadow-2xl border border-border-dark flex flex-col transform transition-transform duration-300 scale-100"
          >
            <!-- Close Button -->
            <button
              @click="closeModal"
              type="button"
              class="absolute top-4 right-4 z-50 p-2 rounded-xl bg-background-dark/50 text-muted-dark hover:bg-background-dark hover:text-text-dark transition-all cursor-pointer border border-border-dark shadow-sm"
              aria-label="Close dialog"
            >
              <Icon name="X" :size="18" />
            </button>

            <!-- Preview Content -->
            <div
              class="relative bg-gradient-to-br from-background-dark to-surface-dark p-8 md:p-12 flex flex-col items-center justify-center border-b border-border-dark text-center min-h-[250px]"
            >
              <div
                class="w-16 h-16 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4"
              >
                <Icon name="Award" :size="32" strokeWidth="1.5" />
              </div>
              <span class="text-xs font-bold text-accent uppercase tracking-widest">{{
                certificate.issuer
              }}</span>
              <h2
                class="text-lg md:text-xl font-bold font-display text-text-dark mt-2 max-w-lg leading-snug"
              >
                {{ certificate.title }}
              </h2>
              <p class="text-xs font-semibold text-muted-dark mt-2">
                Issued: {{ certificate.issueDate }}
              </p>

              <!-- Border Box -->
              <div
                class="absolute inset-4 border border-dashed border-border-dark/60 rounded-xl pointer-events-none"
              ></div>
            </div>

            <!-- Modal Footer -->
            <div
              class="p-6 bg-background-dark/40 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-dark/50"
            >
              <div class="text-left">
                <p class="text-[10px] font-mono text-muted-dark uppercase tracking-wide">
                  Recipient
                </p>
                <p class="text-sm font-bold text-text-dark">Nishat Jahan Tithi</p>
              </div>

              <div class="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  @click="closeModal"
                  variant="outline"
                  size="sm"
                  class="w-full sm:w-auto text-xs"
                >
                  Close
                </Button>
                <Button
                  v-if="certificate.downloadUrl"
                  :href="certificate.downloadUrl"
                  variant="primary"
                  size="sm"
                  icon="Download"
                  class="w-full sm:w-auto text-xs"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>
