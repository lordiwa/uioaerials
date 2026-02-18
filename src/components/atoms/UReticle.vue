<template>
  <svg
    :class="['u-reticle', { 'u-reticle--animated': animated }]"
    :width="size"
    :height="size"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Horizontal line -->
    <line x1="0" y1="20" x2="16" y2="20" :stroke="strokeColor" stroke-width="0.5" />
    <line x1="24" y1="20" x2="40" y2="20" :stroke="strokeColor" stroke-width="0.5" />
    <!-- Vertical line -->
    <line x1="20" y1="0" x2="20" y2="16" :stroke="strokeColor" stroke-width="0.5" />
    <line x1="20" y1="24" x2="20" y2="40" :stroke="strokeColor" stroke-width="0.5" />
    <!-- Center dot -->
    <circle cx="20" cy="20" r="2" :stroke="strokeColor" stroke-width="0.5" fill="none" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: number
  color?: 'red' | 'cyan'
  animated?: boolean
}>(), {
  size: 40,
  color: 'red',
  animated: false,
})

const strokeColor = computed(() =>
  props.color === 'cyan'
    ? 'rgba(0, 229, 255, 0.3)'
    : 'rgba(255, 59, 48, 0.3)'
)
</script>

<style scoped>
.u-reticle {
  pointer-events: none;
}

.u-reticle--animated {
  animation: reticle-pulse 3s ease-in-out infinite;
}

@keyframes reticle-pulse {
  0%, 100% { opacity: 0.3; }
  50%      { opacity: 0.7; }
}
</style>
