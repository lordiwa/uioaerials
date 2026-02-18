<template>
  <span :class="['u-badge', `u-badge--${color}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'red' | 'cyan' | 'green' | 'yellow' | 'gray'
}>(), {
  color: 'gray',
})
</script>

<style scoped>
.u-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 9px;
  padding: 3px 10px;
  border-radius: var(--radius-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.u-badge--red {
  background: var(--color-accent-red-dim);
  color: var(--color-accent-red);
  border: 1px solid rgba(255, 59, 48, 0.3);
}
.u-badge--cyan {
  background: var(--color-accent-cyan-dim);
  color: var(--color-accent-cyan);
  border: 1px solid rgba(0, 229, 255, 0.25);
}
.u-badge--green {
  background: rgba(52, 199, 89, 0.1);
  color: var(--color-success);
  border: 1px solid rgba(52, 199, 89, 0.25);
}
.u-badge--yellow {
  background: rgba(255, 214, 10, 0.1);
  color: var(--color-warning);
  border: 1px solid rgba(255, 214, 10, 0.25);
}
.u-badge--gray {
  background: rgba(255, 255, 255, 0.05);
  color: #777;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
