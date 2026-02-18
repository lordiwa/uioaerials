<template>
  <div class="category-header">
    <USectionLabel v-if="eyebrow" :text="eyebrow" :color="color" />
    <h2 class="category-header__title">{{ title }}</h2>
    <p v-if="copy" class="category-header__copy">{{ copy }}</p>
  </div>
</template>

<script setup lang="ts">
import USectionLabel from '@/components/atoms/USectionLabel.vue'

withDefaults(defineProps<{
  eyebrow?: string
  title: string
  copy?: string
  color?: 'red' | 'cyan'
}>(), {
  color: 'red',
})
</script>

<style scoped>
.category-header {
  margin-bottom: var(--space-6);
}

.category-header__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 900;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
  line-height: 1.1;
}

.category-header__copy {
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  max-width: 700px;
  line-height: 1.7;
}

@media (max-width: 640px) {
  .category-header__title {
    font-size: var(--text-2xl);
  }
}
</style>
