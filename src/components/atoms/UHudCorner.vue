<template>
  <div :class="['u-hud-corner', `u-hud-corner--${position}`]">
    <span class="u-hud-corner__text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  position: 'tl' | 'tr' | 'bl' | 'br'
  text: string
}>()
</script>

<style scoped>
.u-hud-corner {
  position: absolute;
  z-index: 10;
  pointer-events: none;
}

.u-hud-corner__text {
  font-family: var(--font-mono);
  font-size: 9px;
  color: rgba(255, 59, 48, 0.35);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
}

.u-hud-corner--tl { top: 20px; left: 20px; }
.u-hud-corner--tr { top: 20px; right: 20px; text-align: right; }
.u-hud-corner--bl { bottom: 20px; left: 20px; }
.u-hud-corner--br { bottom: 20px; right: 20px; text-align: right; }

/* Corner bracket decoration */
.u-hud-corner::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: rgba(255, 59, 48, 0.2);
  border-style: solid;
}

.u-hud-corner--tl::before { top: -6px; left: -6px; border-width: 1px 0 0 1px; }
.u-hud-corner--tr::before { top: -6px; right: -6px; border-width: 1px 1px 0 0; }
.u-hud-corner--bl::before { bottom: -6px; left: -6px; border-width: 0 0 1px 1px; }
.u-hud-corner--br::before { bottom: -6px; right: -6px; border-width: 0 1px 1px 0; }
</style>
