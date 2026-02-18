<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :class="['u-btn', `u-btn--${variant}`, `u-btn--${size}`]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
}>(), {
  variant: 'primary',
  size: 'md',
})
</script>

<style scoped>
.u-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-mono);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
}

.u-btn--primary {
  background: var(--color-accent-red);
  color: #fff;
  border: 1px solid var(--color-accent-red);
}
.u-btn--primary:hover {
  box-shadow: var(--shadow-red);
  transform: translateY(-2px);
}

.u-btn--outline {
  background: transparent;
  color: var(--color-accent-red);
  border: 1px solid var(--color-accent-red);
}
.u-btn--outline:hover {
  background: var(--color-accent-red-dim);
  box-shadow: var(--shadow-red);
}

.u-btn--ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
}
.u-btn--ghost:hover {
  color: var(--color-text-primary);
  border-color: var(--color-border-hover);
}

.u-btn--sm { font-size: 10px; padding: 8px 16px; }
.u-btn--md { font-size: 11px; padding: 12px 28px; }
.u-btn--lg { font-size: 13px; padding: 16px 40px; }
</style>
