import type { Project } from '../types'

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Smart Task Management Board',
    description:
      'A rich interactive Kanban board designed for modern project workflows, featuring smooth drag-and-drop mechanics, nested subtasks, and real-time state persistence.',
    image: '/images/project1.webp',
    technologies: ['Vue 3', 'Tailwind CSS', 'Vite', 'TypeScript', 'HTML5'],
    githubUrl: 'https://github.com/mstnishatjahantithi12-dotcom/task-manager',
    liveUrl: 'https://task-manager-demo.netlify.app',
    featured: true,
    category: 'web',
  },
  {
    id: '2',
    title: 'E-Commerce Admin Dashboard',
    description:
      'A production-ready data management panel offering responsive charts, sales statistics, inventory tracking, role-based controls, and seamless dark mode toggles.',
    image: '/images/project2.webp',
    technologies: ['Vue 3', 'Quasar', 'JavaScript', 'CSS3', 'MySQL'],
    githubUrl: 'https://github.com/mstnishatjahantithi12-dotcom/admin-dashboard',
    liveUrl: 'https://dashboard-demo.netlify.app',
    featured: true,
    category: 'web',
  },
  {
    id: '3',
    title: 'Algorithms Visualizer Platform',
    description:
      'An interactive simulator animating sorting and pathfinding algorithms, giving learners dynamic controls over execution speed and graph constraints.',
    image: '/images/project3.webp',
    technologies: ['TypeScript', 'Vue 3', 'Tailwind CSS', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/mstnishatjahantithi12-dotcom/algo-visualizer',
    liveUrl: 'https://algo-visual-demo.netlify.app',
    featured: false,
    category: 'programming',
  },
  {
    id: '4',
    title: 'Minimalist Portfolio Framework',
    description:
      'A gorgeous, lightweight portfolio template configured for fast loading speeds, accessibility standards, and SEO compliance.',
    image: '/images/project4.webp',
    technologies: ['Vue 3', 'Tailwind CSS', 'Vite', 'Figma'],
    githubUrl: 'https://github.com/mstnishatjahantithi12-dotcom/portfolio-theme',
    liveUrl: 'https://tithi-portfolio.netlify.app',
    featured: false,
    category: 'design',
  },
]
