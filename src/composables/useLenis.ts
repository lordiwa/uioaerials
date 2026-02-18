import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenis: Lenis | null = null

export function initLenis() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  lenis = new Lenis({ lerp: 0.08 })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis?.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
}

export function destroyLenis() {
  lenis?.destroy()
  lenis = null
}

export function useLenis() {
  return lenis
}
