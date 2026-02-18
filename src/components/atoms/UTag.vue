<template>
  <span :class="['u-tag', `u-tag--${color}`]">{{ text }}</span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  color?: 'red' | 'cyan' | 'gray'
}>(), {
  color: 'gray',
})
</script>

<style scoped>
.u-tag {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 2px 6px;
}

.u-tag--red  { color: var(--color-accent-red); }
.u-tag--cyan { color: var(--color-accent-cyan); }
.u-tag--gray { color: var(--color-text-muted); }
</style>
