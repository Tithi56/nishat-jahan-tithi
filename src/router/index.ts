import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../pages/Home.vue'),
          meta: {
            title: 'Nishat Jahan Tithi | Software Developer & CSE Graduate',
            description: 'Personal portfolio of Nishat Jahan Tithi, a Software Developer and CSE graduate specializing in Vue.js, TypeScript, and modern frontend architectures.',
          },
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../pages/About.vue'),
          meta: {
            title: 'About | Nishat Jahan Tithi',
            description: 'Explore the career objective, technical skills grid, professional experience timeline, and academic history of Nishat Jahan Tithi.',
          },
        },
        {
          path: 'projects',
          name: 'projects',
          component: () => import('../pages/Projects.vue'),
          meta: {
            title: 'Projects | Nishat Jahan Tithi',
            description: 'Browse the projects archive of Nishat Jahan Tithi, featuring Vue.js apps, algorithms visualizers, and UI/UX design prototypes.',
          },
        },
        {
          path: 'certificates',
          name: 'certificates',
          component: () => import('../pages/Certificates.vue'),
          meta: {
            title: 'Certificates | Nishat Jahan Tithi',
            description: 'View the professional credentials, training certifications, and course credentials earned by Nishat Jahan Tithi.',
          },
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../pages/Contact.vue'),
          meta: {
            title: 'Contact | Nishat Jahan Tithi',
            description: 'Get in touch with Nishat Jahan Tithi. Send an inquiry message, find contact coordinates, social profiles, and location address.',
          },
        },
      ],
    },
    // Fallback/catch-all
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

// Navigation Guard for Dynamic SPA SEO
router.beforeEach((to) => {
  // Update Document Title
  const defaultTitle = 'Nishat Jahan Tithi | Software Developer'
  document.title = (to.meta.title as string) || defaultTitle

  // Update Meta Description
  let metaDescription = document.querySelector('meta[name="description"]')
  const defaultDesc = 'Personal portfolio of Nishat Jahan Tithi, a Software Developer and CSE graduate.'
  const descText = (to.meta.description as string) || defaultDesc
  
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', descText)

  // Update Canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  const canonicalUrl = `https://nishat-tithi.netlify.app${to.path}`
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', canonicalUrl)
})

export default router
