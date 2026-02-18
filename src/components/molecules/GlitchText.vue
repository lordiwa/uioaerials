<template>
  <span class="glitch" :data-text="text" :class="`glitch--${intensity}`">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  intensity?: 1 | 2 | 3
}>(), {
  intensity: 2,
})
</script>

<style scoped>
.glitch {
  position: relative;
  display: inline-block;
  font-family: var(--font-display);
  font-weight: 900;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.glitch::before {
  color: var(--color-accent-cyan);
  z-index: -1;
  animation: glitch-before 3s infinite linear alternate-reverse;
}

.glitch::after {
  color: var(--color-accent-red);
  z-index: -2;
  animation: glitch-after 2s infinite linear alternate-reverse;
}

/* Intensity 1: subtle */
.glitch--1::before,
.glitch--1::after { opacity: 0.3; }

/* Intensity 2: medium */
.glitch--2::before,
.glitch--2::after { opacity: 0.5; }

/* Intensity 3: strong */
.glitch--3::before,
.glitch--3::after { opacity: 0.7; }

@keyframes glitch-before {
  0%   { clip-path: inset(40% 0 61% 0); transform: translate(-2px, -1px); }
  20%  { clip-path: inset(92% 0 1% 0);  transform: translate(2px, 1px); }
  40%  { clip-path: inset(43% 0 1% 0);  transform: translate(-1px, 2px); }
  60%  { clip-path: inset(25% 0 58% 0); transform: translate(1px, -1px); }
  80%  { clip-path: inset(54% 0 7% 0);  transform: translate(-2px, 1px); }
  100% { clip-path: inset(58% 0 43% 0); transform: translate(2px, -2px); }
}

@keyframes glitch-after {
  0%   { clip-path: inset(65% 0 13% 0); transform: translate(2px, 1px); }
  20%  { clip-path: inset(19% 0 62% 0); transform: translate(-1px, -2px); }
  40%  { clip-path: inset(80% 0 5% 0);  transform: translate(1px, 1px); }
  60%  { clip-path: inset(10% 0 72% 0); transform: translate(-2px, 2px); }
  80%  { clip-path: inset(32% 0 49% 0); transform: translate(1px, -1px); }
  100% { clip-path: inset(53% 0 30% 0); transform: translate(-1px, 2px); }
}

@media (prefers-reduced-motion: reduce) {
  .glitch::before,
  .glitch::after {
    display: none;
  }
}
</style>
