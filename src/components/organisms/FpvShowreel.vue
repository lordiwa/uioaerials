<template>
  <section class="fpv-showreel">
    <div class="fpv-showreel__video-wrap">
      <VideoPlayer
        src=""
        type="file"
        :autoplay="true"
      />
      <div class="fpv-showreel__overlay">
        <div class="container">
          <USectionLabel text="CINEMATOGRAFÍA FPV" color="red" />
          <h1 class="fpv-showreel__title">CINEMATOGRAFÍA<br>FPV</h1>
          <p class="fpv-showreel__subtitle">
            Tomas imposibles. Impacto visual máximo.
            Pilotaje de precisión para marcas, eventos y propiedades.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import VideoPlayer from '@/components/molecules/VideoPlayer.vue'
import USectionLabel from '@/components/atoms/USectionLabel.vue'
</script>

<style scoped>
.fpv-showreel {
  position: relative;
}

.fpv-showreel__video-wrap {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
}

.fpv-showreel__video-wrap :deep(.video-player) {
  height: 100%;
  border: none;
  border-radius: 0;
}

.fpv-showreel__video-wrap :deep(video) {
  height: 100%;
  object-fit: cover;
}

.fpv-showreel__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.3) 50%, rgba(13,13,13,0.6) 100%);
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--space-8);
  z-index: 2;
}

.fpv-showreel__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 900;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}

.fpv-showreel__subtitle {
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  max-width: 500px;
  line-height: 1.7;
}
</style>
