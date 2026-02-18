import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

export function useReveal(selector: string, options: gsap.TweenVars = {}) {
  const defaults: gsap.TweenVars = {
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: selector,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  }
  let ctx: gsap.Context

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    ctx = gsap.context(() => {
      gsap.from(selector, { ...defaults, ...options })
    })
  })
  onUnmounted(() => ctx?.revert())
}

export function useGsap() {
  let ctx: gsap.Context

  onMounted(() => {
    ctx = gsap.context(() => {})
  })
  onUnmounted(() => ctx?.revert())

  return { gsap, ScrollTrigger, ctx: () => ctx }
}

export { gsap, ScrollTrigger }
