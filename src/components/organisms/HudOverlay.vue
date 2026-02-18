<template>
  <div class="hud-overlay" aria-hidden="true">
    <div class="hud-overlay__item hud-overlay__item--tr">
      UIO AERIALS // DEV v1.0
    </div>
    <div class="hud-overlay__item hud-overlay__item--br">
      VUE3 · VITE · PINIA · GSAP
    </div>
  </div>
</template>

<style scoped>
.hud-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: var(--z-modal);
}

.hud-overlay__item {
  position: absolute;
  font-family: var(--font-mono);
  font-size: 9px;
  color: rgba(255, 59, 48, 0.15);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hud-overlay__item--tr { top: 12px; right: 12px; }
.hud-overlay__item--br { bottom: 12px; right: 12px; }

@media (max-width: 768px) {
  .hud-overlay { display: none; }
}
</style>
