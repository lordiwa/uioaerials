<template>
  <div :class="['u-section-label', `u-section-label--${color}`]">
    <span class="u-section-label__line"></span>
    <span class="u-section-label__text">[ {{ text }} ]</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  color?: 'red' | 'cyan'
}>(), {
  color: 'red',
})
</script>

<style scoped>
.u-section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--space-4);
}

.u-section-label__line {
  display: inline-block;
  width: 24px;
  height: 1px;
}

.u-section-label__text {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
}

.u-section-label--red .u-section-label__line { background: var(--color-accent-red); }
.u-section-label--red .u-section-label__text { color: var(--color-accent-red); }

.u-section-label--cyan .u-section-label__line { background: var(--color-accent-cyan); }
.u-section-label--cyan .u-section-label__text { color: var(--color-accent-cyan); }
</style>
