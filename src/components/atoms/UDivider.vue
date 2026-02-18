<template>
  <div :class="['u-divider', `u-divider--${gradient}`]"></div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  gradient?: 'red' | 'cyan' | 'both'
}>(), {
  gradient: 'both',
})
</script>

<style scoped>
.u-divider {
  height: 1px;
  margin: var(--space-2) 0;
  opacity: 0.3;
}

.u-divider--red  { background: linear-gradient(to right, var(--color-accent-red), transparent); }
.u-divider--cyan { background: linear-gradient(to right, var(--color-accent-cyan), transparent); }
.u-divider--both { background: linear-gradient(to right, var(--color-accent-red), var(--color-accent-cyan), transparent); }
</style>
