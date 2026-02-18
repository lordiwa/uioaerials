<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ThreeViewer from '@/components/organisms/ThreeViewer.vue'
import CategoryHeader from '@/components/molecules/CategoryHeader.vue'
import USectionLabel from '@/components/atoms/USectionLabel.vue'
import UDivider from '@/components/atoms/UDivider.vue'
import UBadge from '@/components/atoms/UBadge.vue'
import UButton from '@/components/atoms/UButton.vue'
import { useMeta } from '@/composables/useMeta'
import { seoData } from '@/data/seo'

gsap.registerPlugin(ScrollTrigger)
useMeta(seoData['3d'])

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
    <!-- Page Hero with 3D Viewer -->
    <section class="d3-hero section">
      <div class="container">
        <div class="d3-hero__grid">
          <div class="d3-hero__content">
            <USectionLabel text="SOLUCIONES 3D" color="cyan" />
            <h1 class="d3-hero__title">DIGITALIZACIÓN<br>3D</h1>
            <p class="d3-hero__copy">
              Transformamos el mundo físico en activos digitales. Utilizamos técnicas
              de vuelo y fotogrametría para crear Gemelos Digitales (Digital Twins)
              visuales idénticos en interiores, exteriores o ambos.
            </p>
            <div class="d3-hero__badges">
              <UBadge color="cyan">Fotogrametría</UBadge>
              <UBadge color="cyan">NeRFs</UBadge>
              <UBadge color="cyan">Nubes de Puntos</UBadge>
              <UBadge color="cyan">.OBJ / .FBX</UBadge>
            </div>
          </div>
          <div class="d3-hero__viewer">
            <ThreeViewer />
          </div>
        </div>
      </div>
    </section>

    <UDivider gradient="cyan" />

    <!-- Indoors -->
    <section id="indoors" class="section">
      <div class="container">
        <CategoryHeader
          eyebrow="INDOOR SCANNING"
          title="Escaneo Interior."
          copy="Escaneo visual en entornos sin GPS. Navegamos manualmente bodegas, túneles, museos o interiores patrimoniales para capturar texturas y geometrías complejas. Generamos recorridos virtuales 3D (NeRFs) y nubes de puntos visuales."
          color="cyan"
        />

        <div class="d3-features reveal">
          <div class="d3-feature">
            <span class="d3-feature__icon">📍</span>
            <h4 class="d3-feature__title">Sin GPS</h4>
            <p class="d3-feature__copy">Navegación manual en interiores donde los drones convencionales no operan.</p>
          </div>
          <div class="d3-feature">
            <span class="d3-feature__icon">🏛️</span>
            <h4 class="d3-feature__title">Patrimonio</h4>
            <p class="d3-feature__copy">Digitalización de museos, iglesias y edificios históricos.</p>
          </div>
          <div class="d3-feature">
            <span class="d3-feature__icon">🔄</span>
            <h4 class="d3-feature__title">NeRFs</h4>
            <p class="d3-feature__copy">Recorridos virtuales fotorrealistas navegables.</p>
          </div>
        </div>
      </div>
    </section>

    <UDivider gradient="cyan" />

    <!-- Outdoors -->
    <section id="outdoors" class="section">
      <div class="container">
        <CategoryHeader
          eyebrow="OUTDOOR MAPPING"
          title="Levantamiento Exterior."
          copy="Levantamiento visual de fachadas, terrenos y cubiertas. Inspección de estructuras altas sin andamios y generación de modelos para pre-visualización arquitectónica. Generamos Modelos 3D texturizados (.OBJ / .FBX) y Ortofotos de alta resolución."
          color="cyan"
        />

        <div class="d3-features reveal">
          <div class="d3-feature">
            <span class="d3-feature__icon">🏗️</span>
            <h4 class="d3-feature__title">Inspección</h4>
            <p class="d3-feature__copy">Inspección de cubiertas y fachadas sin andamios ni riesgo.</p>
          </div>
          <div class="d3-feature">
            <span class="d3-feature__icon">🗺️</span>
            <h4 class="d3-feature__title">Ortofotos</h4>
            <p class="d3-feature__copy">Imágenes aéreas georreferenciadas de alta resolución.</p>
          </div>
          <div class="d3-feature">
            <span class="d3-feature__icon">📦</span>
            <h4 class="d3-feature__title">Modelos 3D</h4>
            <p class="d3-feature__copy">Exportación en formatos estándar: OBJ, FBX, PLY.</p>
          </div>
        </div>
      </div>
    </section>

    <UDivider gradient="cyan" />

    <!-- Legal Disclaimer -->
    <section class="section--compact">
      <div class="container">
        <div class="disclaimer reveal">
          <span class="disclaimer__icon">⚠</span>
          <p class="disclaimer__text">
            Los modelos 3D generados son representaciones visuales de alta fidelidad
            para uso arquitectónico, turístico y de marketing. Para levantamientos con
            validez legal catastral, consulte nuestras alianzas con topógrafos certificados.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container" style="text-align: center;">
        <USectionLabel text="¿NECESITAS UN GEMELO DIGITAL?" color="cyan" />
        <h2 class="cta-section__title">Solicitar Levantamiento 3D</h2>
        <p class="cta-section__copy">
          Te asesoramos sobre la técnica más adecuada para
          tu proyecto de digitalización.
        </p>
        <UButton variant="primary" size="lg" to="/contacto">
          Solicitar Cotización
        </UButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.d3-hero {
  padding-top: calc(72px + var(--space-9));
}

.d3-hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-7);
  align-items: center;
}

.d3-hero__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 900;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

.d3-hero__copy {
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-5);
}

.d3-hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.d3-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  margin-top: var(--space-6);
}

.d3-feature {
  border: 1px solid rgba(0, 229, 255, 0.15);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  background: rgba(0, 229, 255, 0.03);
  transition: border-color var(--duration-normal), transform var(--duration-normal);
}

.d3-feature:hover {
  border-color: rgba(0, 229, 255, 0.3);
  transform: translateY(-2px);
}

.d3-feature__icon {
  font-size: 24px;
  display: block;
  margin-bottom: var(--space-3);
}

.d3-feature__title {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  color: var(--color-accent-cyan);
  margin-bottom: var(--space-2);
}

.d3-feature__copy {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.disclaimer {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
  border: 1px solid rgba(255, 214, 10, 0.2);
  background: rgba(255, 214, 10, 0.04);
  border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-5);
}

.disclaimer__icon {
  font-size: 16px;
  flex-shrink: 0;
}

.disclaimer__text {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  line-height: 1.7;
  letter-spacing: 0.03em;
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

@media (max-width: 768px) {
  .d3-hero__grid { grid-template-columns: 1fr; }
  .d3-features { grid-template-columns: 1fr; }
}
</style>
