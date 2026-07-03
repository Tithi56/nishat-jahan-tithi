<script setup lang="ts">
import { ref, reactive } from 'vue'
import Button from './Button.vue'
import Icon from '../common/Icon.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const validateEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return re.test(email)
}

const validateForm = () => {
  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required.'
    isValid = false
  } else {
    errors.name = ''
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.'
    isValid = false
  } else if (!validateEmail(form.email)) {
    errors.email = 'Please enter a valid email address.'
    isValid = false
  } else {
    errors.email = ''
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required.'
    isValid = false
  } else {
    errors.subject = ''
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required.'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.'
    isValid = false
  } else {
    errors.message = ''
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500))
    submitStatus.value = 'success'
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="p-6 md:p-8 rounded-2xl bg-surface-dark border border-border-dark shadow-xl text-left">
    <h3 class="text-xl md:text-2xl font-bold font-display text-text-dark mb-6">Send a Message</h3>

    <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
      <!-- Success / Error Alerts -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="submitStatus === 'success'"
          class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800 text-emerald-400 flex items-start gap-3 text-sm"
        >
          <Icon name="CheckCircle" :size="20" class="flex-shrink-0 mt-0.5" />
          <div>
            <p class="font-bold">Thank you!</p>
            <p class="mt-0.5">
              Your message has been successfully received. I'll get back to you shortly.
            </p>
          </div>
        </div>
        <div
          v-else-if="submitStatus === 'error'"
          class="p-4 rounded-xl bg-rose-950/20 border border-rose-800 text-rose-450 flex items-start gap-3 text-sm"
        >
          <Icon name="AlertTriangle" :size="20" class="flex-shrink-0 mt-0.5" />
          <div>
            <p class="font-bold">Something went wrong.</p>
            <p class="mt-0.5">Please check your details and try again.</p>
          </div>
        </div>
      </transition>

      <!-- Grid Form Fields -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- Name -->
        <div class="space-y-1.5">
          <label for="name" class="block text-xs font-bold text-muted-dark uppercase tracking-wider"
            >Full Name</label
          >
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="John Doe"
            class="w-full px-4 py-3 rounded-xl border border-border-dark bg-background-dark/60 text-text-dark placeholder-slate-500 focus:bg-background-dark transition-all text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            :class="{ 'border-rose-800 focus:ring-rose-800 focus:border-rose-800': errors.name }"
            required
            :aria-invalid="!!errors.name"
            :aria-describedby="errors.name ? 'name-error' : undefined"
          />
          <p v-if="errors.name" id="name-error" class="text-xs text-rose-500 font-medium mt-1">
            {{ errors.name }}
          </p>
        </div>

        <!-- Email -->
        <div class="space-y-1.5">
          <label
            for="email"
            class="block text-xs font-bold text-muted-dark uppercase tracking-wider"
            >Email Address</label
          >
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="john@example.com"
            class="w-full px-4 py-3 rounded-xl border border-border-dark bg-background-dark/60 text-text-dark placeholder-slate-500 focus:bg-background-dark transition-all text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            :class="{ 'border-rose-800 focus:ring-rose-800 focus:border-rose-800': errors.email }"
            required
            :aria-invalid="!!errors.email"
            :aria-describedby="errors.email ? 'email-error' : undefined"
          />
          <p v-if="errors.email" id="email-error" class="text-xs text-rose-500 font-medium mt-1">
            {{ errors.email }}
          </p>
        </div>
      </div>

      <!-- Subject -->
      <div class="space-y-1.5">
        <label
          for="subject"
          class="block text-xs font-bold text-muted-dark uppercase tracking-wider"
          >Subject</label
        >
        <input
          id="subject"
          v-model="form.subject"
          type="text"
          placeholder="Collaboration Opportunity"
          class="w-full px-4 py-3 rounded-xl border border-border-dark bg-background-dark/60 text-text-dark placeholder-slate-500 focus:bg-background-dark transition-all text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          :class="{ 'border-rose-800 focus:ring-rose-800 focus:border-rose-800': errors.subject }"
          required
          :aria-invalid="!!errors.subject"
          :aria-describedby="errors.subject ? 'subject-error' : undefined"
        />
        <p v-if="errors.subject" id="subject-error" class="text-xs text-rose-500 font-medium mt-1">
          {{ errors.subject }}
        </p>
      </div>

      <!-- Message -->
      <div class="space-y-1.5">
        <label
          for="message"
          class="block text-xs font-bold text-muted-dark uppercase tracking-wider"
          >Your Message</label
        >
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          placeholder="Hi Nishat, I'd like to talk about..."
          class="w-full px-4 py-3 rounded-xl border border-border-dark bg-background-dark/60 text-text-dark placeholder-slate-500 focus:bg-background-dark transition-all text-sm outline-none resize-y focus:ring-1 focus:ring-primary focus:border-primary"
          :class="{ 'border-rose-800 focus:ring-rose-800 focus:border-rose-800': errors.message }"
          required
          :aria-invalid="!!errors.message"
          :aria-describedby="errors.message ? 'message-error' : undefined"
        ></textarea>
        <p v-if="errors.message" id="message-error" class="text-xs text-rose-500 font-medium mt-1">
          {{ errors.message }}
        </p>
      </div>

      <!-- Submit Button -->
      <Button
        type="submit"
        variant="primary"
        size="md"
        class="w-full mt-4"
        :loading="isSubmitting"
        icon="Send"
        iconPosition="right"
      >
        Send Message
      </Button>
    </form>
  </div>
</template>
