<template>
  <section class="hero hud-grid">
    <!-- Video Background -->
    <div class="hero__video-wrap">
      <video
        ref="videoRef"
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster=""
      >
        <source src="" type="video/webm" />
        <source src="" type="video/mp4" />
      </video>
      <div class="hero__overlay"></div>
    </div>

    <!-- HUD Corners -->
    <UHudCorner position="tl" :text="hudData.topLeft" />
    <UHudCorner position="tr" :text="hudData.topRight" />
    <UHudCorner position="bl" :text="hudData.bottomLeft" />
    <UHudCorner position="br" :text="hudData.bottomRight" />

    <!-- Reticles -->
    <UReticle class="hero__reticle hero__reticle--tl" :size="48" color="red" animated />
    <UReticle class="hero__reticle hero__reticle--tr" :size="48" color="red" animated />
    <UReticle class="hero__reticle hero__reticle--bl" :size="48" color="red" animated />
    <UReticle class="hero__reticle hero__reticle--br" :size="48" color="red" animated />

    <!-- Content -->
    <div class="hero__content container">
      <UBadge color="green" class="hero__badge">✓ Autorización DGAC · RDAC-101</UBadge>

      <h1 class="hero__title">
        <GlitchText text="IMAGEN AÉREA" :intensity="2" />
        <br />
        <GlitchText text="INMERSIVA." :intensity="2" />
      </h1>

      <p class="hero__subtitle">
        Cinematografía FPV de precisión y digitalización de espacios en Ecuador.
        Servicios aéreos profesionales con autorización y licencia de la DGAC,
        bajo la normativa RDAC-101.
      </p>

      <div class="hero__ctas">
        <UButton variant="outline" size="lg">Ver Showreel</UButton>
        <UButton variant="primary" size="lg" to="/contacto">Cotizar Vuelo</UButton>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll scroll-indicator">
      <div class="hero__scroll-line"></div>
      <span class="hero__scroll-text">SCROLL</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import UHudCorner from '@/components/atoms/UHudCorner.vue'
import UReticle from '@/components/atoms/UReticle.vue'
import UBadge from '@/components/atoms/UBadge.vue'
import UButton from '@/components/atoms/UButton.vue'
import GlitchText from '@/components/molecules/GlitchText.vue'
import { hudData } from '@/data/seo'

const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const tl = gsap.timeline({ delay: 1.8 })

  tl.from('.hero__badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
    .from('.hero__title', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.3')
    .from('.hero__subtitle', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .from('.hero__ctas', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('.hero__scroll', { opacity: 0, duration: 0.6 }, '-=0.2')
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 100dvh;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.hero__video-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: var(--gradient-hero);
  z-index: 1;
}

/* Reticle positions */
.hero__reticle {
  position: absolute;
  z-index: 5;
}
.hero__reticle--tl { top: 60px; left: 60px; }
.hero__reticle--tr { top: 60px; right: 60px; }
.hero__reticle--bl { bottom: 120px; left: 60px; }
.hero__reticle--br { bottom: 120px; right: 60px; }

.hero__content {
  position: relative;
  z-index: 10;
  padding-bottom: var(--space-10);
}

.hero__badge {
  margin-bottom: var(--space-5);
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 900;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  line-height: 1.05;
  margin-bottom: var(--space-5);
}

.hero__subtitle {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: 400;
  color: var(--color-text-secondary);
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: var(--space-6);
}

.hero__ctas {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-accent-red), transparent);
}

.hero__scroll-text {
  font-family: var(--font-mono);
  font-size: 8px;
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-widest);
}

@media (max-width: 768px) {
  .hero__reticle { display: none; }
  .hero__content { padding-bottom: var(--space-9); }
}
</style>
