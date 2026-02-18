<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from '@/components/organisms/HeroSection.vue'
import WorldSelector from '@/components/organisms/WorldSelector.vue'
import StatBlock from '@/components/molecules/StatBlock.vue'
import USectionLabel from '@/components/atoms/USectionLabel.vue'
import UDivider from '@/components/atoms/UDivider.vue'
import UButton from '@/components/atoms/UButton.vue'
import { useMeta } from '@/composables/useMeta'
import { seoData } from '@/data/seo'

gsap.registerPlugin(ScrollTrigger)
useMeta(seoData.home)

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
    <!-- 1. Hero -->
    <HeroSection />

    <!-- 2. Propuesta de Valor -->
    <section class="section">
      <div class="container">
        <USectionLabel text="¿POR QUÉ UIO AERIALS?" color="red" />
        <p class="value-intro reveal">
          En UIO Aerials, superamos los límites de los drones tradicionales navegando
          interiores, atravesando estructuras y persiguiendo la acción para conseguir
          tomas imposibles y modelos 3D de precisión sin igual.
        </p>

        <div class="value-grid reveal">
          <div class="value-card">
            <div class="value-card__icon">🎯</div>
            <h3 class="value-card__title">Precisión FPV</h3>
            <p class="value-card__copy">Pilotaje manual de alta precisión. Navegamos por espacios reducidos donde los drones convencionales no entran.</p>
          </div>
          <div class="value-card">
            <div class="value-card__icon">📐</div>
            <h3 class="value-card__title">Digital Twins</h3>
            <p class="value-card__copy">Gemelos digitales de alta fidelidad para arquitectura, patrimonio, inspección y marketing inmersivo.</p>
          </div>
          <div class="value-card">
            <div class="value-card__icon">✓</div>
            <h3 class="value-card__title">Certificación DGAC</h3>
            <p class="value-card__copy">Operamos con autorización oficial bajo normativa RDAC-101. Seguridad y legalidad garantizadas.</p>
          </div>
        </div>
      </div>
    </section>

    <UDivider gradient="both" />

    <!-- 3. World Selector -->
    <WorldSelector />

    <UDivider gradient="both" />

    <!-- 4. Stats -->
    <section class="section reveal">
      <div class="container">
        <div class="stats-grid">
          <StatBlock :value="50" label="Proyectos Completados" suffix="+" color="red" />
          <StatBlock :value="3" label="Años de Experiencia" suffix="+" color="white" />
          <StatBlock :value="30" label="Eventos Cubiertos" suffix="+" color="white" />
          <StatBlock :value="20" label="Modelos 3D" suffix="+" color="cyan" />
        </div>
      </div>
    </section>

    <UDivider gradient="both" />

    <!-- 5. CTA Final -->
    <section class="section cta-final">
      <div class="container reveal" style="text-align: center;">
        <USectionLabel text="¿LISTO PARA VOLAR?" color="red" />
        <h2 class="cta-final__title">¿Tienes un proyecto en mente?</h2>
        <p class="cta-final__copy">
          No solo volamos, te asesoramos sobre la viabilidad,
          seguridad y normativa de tu idea.
        </p>
        <UButton variant="primary" size="lg" to="/contacto">
          Cotizar Vuelo
        </UButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.value-intro {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 700px;
  line-height: 1.7;
  margin-bottom: var(--space-7);
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

.value-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  background: var(--color-surface);
  transition: border-color var(--duration-normal) var(--ease-out),
              transform var(--duration-normal) var(--ease-out);
}

.value-card:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-2px);
}

.value-card__icon {
  font-size: 24px;
  margin-bottom: var(--space-3);
}

.value-card__title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.value-card__copy {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}

.cta-final {
  text-align: center;
}

.cta-final__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 900;
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-4);
}

.cta-final__copy {
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  max-width: 500px;
  margin: 0 auto var(--space-6);
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .value-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
