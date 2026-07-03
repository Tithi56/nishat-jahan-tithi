import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import router from '../router'

// Mock IntersectionObserver for JSDom
global.IntersectionObserver = class IntersectionObserver {
  observe = vi.fn<() => void>()
  unobserve = vi.fn<() => void>()
  disconnect = vi.fn<() => void>()
} as unknown as typeof IntersectionObserver

// Mock window.matchMedia for JSDom theme detection
global.window.matchMedia = vi.fn<(query: string) => MediaQueryList>().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn<() => void>(),
  removeListener: vi.fn<() => void>(),
  addEventListener: vi.fn<() => void>(),
  removeEventListener: vi.fn<() => void>(),
  dispatchEvent: vi.fn<() => boolean>(),
})) as unknown as typeof window.matchMedia

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
