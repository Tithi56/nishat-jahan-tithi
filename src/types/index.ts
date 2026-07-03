export interface About {
  name: string
  title: string
  avatar: string
  careerObjective: string
  languages: { name: string; proficiency: string }[]
  activities: { name: string; category: string; description: string; icon: string }[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  category: 'web' | 'design' | 'programming'
}

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  responsibilities: string[]
  technologies: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  fieldOfStudy: string
  startDate: string
  endDate: string
  result?: string
  details?: string
}

export type SkillCategory =
  | 'programming'
  | 'frontend'
  | 'database'
  | 'office'
  | 'design'
  | 'professional'

export interface Skill {
  name: string
  category: SkillCategory
}

export interface Competition {
  platform: string
  username: string
  solvedCount: number
  rating?: number | string
  maxRating?: number
  profileUrl: string
}

export interface Achievement {
  id: string
  title: string
  date: string
  description: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  issueDate: string
  image: string
  downloadUrl?: string
}

export interface Social {
  platform: string
  url: string
  iconName: string
}

export interface Contact {
  name: string
  phone: string
  email: string
  address: string
  googleMapEmbedUrl: string
}
