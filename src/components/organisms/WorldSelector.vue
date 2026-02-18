<template>
  <section class="world-selector section">
    <div class="container">
      <USectionLabel text="NUESTROS MUNDOS" color="red" />
      <h2 class="world-selector__heading">Elige Tu Experiencia</h2>

      <div class="world-selector__grid">
        <!-- FPV Card -->
        <router-link to="/cinematografia-fpv" class="world-card world-card--red">
          <div class="world-card__bg"></div>
          <div class="world-card__content">
            <span class="world-card__icon">🎬</span>
            <h3 class="world-card__title">CINEMATOGRAFÍA<br>FPV</h3>
            <p class="world-card__copy">
              Tomas imposibles que retienen la atención.
              Navegamos interiores, perseguimos la acción,
              capturamos lo que otros no pueden.
            </p>
            <span class="world-card__cta">Explorar →</span>
          </div>
          <div class="world-card__accent"></div>
        </router-link>

        <!-- 3D Card -->
        <router-link to="/digitalizacion-3d" class="world-card world-card--cyan">
          <div class="world-card__bg"></div>
          <div class="world-card__content">
            <span class="world-card__icon">📐</span>
            <h3 class="world-card__title">SOLUCIONES<br>3D</h3>
            <p class="world-card__copy">
              Gemelos Digitales de alta fidelidad.
              Fotogrametría, NeRFs, nubes de puntos
              para interiores y exteriores.
            </p>
            <span class="world-card__cta">Explorar →</span>
          </div>
          <div class="world-card__accent"></div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import USectionLabel from '@/components/atoms/USectionLabel.vue'
</script>

<style scoped>
.world-selector__heading {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 900;
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-7);
}

.world-selector__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
}

.world-card {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  min-height: 400px;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  transition: transform 400ms var(--ease-out),
              border-color 400ms var(--ease-out);
}

.world-card__bg {
  position: absolute;
  inset: 0;
  background: var(--color-surface);
  transition: transform 600ms var(--ease-out);
}

.world-card:hover {
  transform: translateY(-6px);
}

.world-card:hover .world-card__bg {
  transform: scale(1.05);
}

.world-card--red:hover { border-color: rgba(255, 59, 48, 0.4); }
.world-card--cyan:hover { border-color: rgba(0, 229, 255, 0.3); }

.world-card__content {
  position: relative;
  z-index: 2;
  padding: var(--space-7);
}

.world-card__icon {
  font-size: 32px;
  margin-bottom: var(--space-3);
  display: block;
}

.world-card__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 900;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
  line-height: 1.2;
}

.world-card__copy {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-4);
  max-width: 320px;
}

.world-card__cta {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: letter-spacing 200ms var(--ease-out);
}

.world-card--red .world-card__cta { color: var(--color-accent-red); }
.world-card--cyan .world-card__cta { color: var(--color-accent-cyan); }

.world-card:hover .world-card__cta { letter-spacing: 0.2em; }

.world-card__accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 400ms var(--ease-out);
}

.world-card--red .world-card__accent { background: var(--color-accent-red); }
.world-card--cyan .world-card__accent { background: var(--color-accent-cyan); }

.world-card:hover .world-card__accent { transform: scaleX(1); }

/* Gradient overlays */
.world-card--red .world-card__bg {
  background: linear-gradient(135deg, rgba(255,59,48,0.08) 0%, var(--color-surface) 50%);
}
.world-card--cyan .world-card__bg {
  background: linear-gradient(135deg, rgba(0,229,255,0.06) 0%, var(--color-surface) 50%);
}

@media (max-width: 640px) {
  .world-selector__grid { grid-template-columns: 1fr; }
  .world-card { min-height: 300px; }
}
</style>
