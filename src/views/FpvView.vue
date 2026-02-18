<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FpvShowreel from '@/components/organisms/FpvShowreel.vue'
import FpvCategories from '@/components/organisms/FpvCategories.vue'
import USectionLabel from '@/components/atoms/USectionLabel.vue'
import UButton from '@/components/atoms/UButton.vue'
import UDivider from '@/components/atoms/UDivider.vue'
import { useMeta } from '@/composables/useMeta'
import { seoData } from '@/data/seo'

gsap.registerPlugin(ScrollTrigger)
useMeta(seoData.fpv)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  })
})
</script>

<template>
  <div>
    <!-- Page Hero / Showreel -->
    <FpvShowreel />

    <!-- Category Anchor Nav -->
    <nav class="fpv-nav section--compact">
      <div class="container">
        <div class="fpv-nav__links">
          <a href="#eventos" class="fpv-nav__link">01 · Eventos</a>
          <a href="#real-estate" class="fpv-nav__link">02 · Real Estate</a>
          <a href="#comercial" class="fpv-nav__link">03 · Comercial</a>
        </div>
      </div>
    </nav>

    <!-- Categories -->
    <FpvCategories />

    <UDivider gradient="both" />

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container" style="text-align: center;">
        <USectionLabel text="¿LISTO PARA IMPACTAR?" color="red" />
        <h2 class="cta-section__title">¿Listo para impactar?</h2>
        <p class="cta-section__copy">
          Contáctanos para discutir tu proyecto.
          Te asesoramos sobre la mejor aproximación para tus tomas.
        </p>
        <UButton variant="primary" size="lg" to="/contacto">
          Cotizar Vuelo
        </UButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fpv-nav {
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-primary);
  position: sticky;
  top: 72px;
  z-index: calc(var(--z-fixed) - 1);
}

.fpv-nav__links {
  display: flex;
  gap: var(--space-6);
}

.fpv-nav__link {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  padding: var(--space-4) 0;
  border-bottom: 2px solid transparent;
  transition: all var(--duration-fast);
  text-decoration: none;
}

.fpv-nav__link:hover {
  color: var(--color-text-primary);
  border-bottom-color: var(--color-accent-red);
}

.cta-section__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 900;
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-4);
}

.cta-section__copy {
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  max-width: 500px;
  margin: 0 auto var(--space-6);
  line-height: 1.7;
}

@media (max-width: 640px) {
  .fpv-nav__links { gap: var(--space-4); }
  .fpv-nav__link { font-size: 10px; }
}
</style>
