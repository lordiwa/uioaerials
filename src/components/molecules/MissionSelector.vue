<template>
  <div class="mission-selector">
    <span class="mission-selector__label">Tipo de Misión</span>
    <div class="mission-selector__grid">
      <button
        v-for="option in options"
        :key="option.value"
        :class="['mission-option', { 'mission-option--active': modelValue === option.value }]"
        type="button"
        @click="$emit('update:modelValue', option.value)"
      >
        <span class="mission-option__icon">{{ option.icon }}</span>
        <span class="mission-option__label">{{ option.label }}</span>
        <span class="mission-option__desc">{{ option.description }}</span>
      </button>
    </div>
    <span v-if="error" class="mission-selector__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import type { MissionType, MissionOption } from '@/types/form.types'

defineProps<{
  modelValue: MissionType | null
  options: MissionOption[]
  error?: string
}>()

defineEmits<{
  'update:modelValue': [value: MissionType]
}>()
</script>

<style scoped>
.mission-selector {
  margin-bottom: var(--space-5);
}

.mission-selector__label {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}

.mission-selector__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}

.mission-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-fast);
  text-align: center;
}

.mission-option:hover {
  border-color: var(--color-border-hover);
  background: var(--color-surface);
}

.mission-option--active {
  border-color: var(--color-accent-red);
  background: var(--color-accent-red-dim);
}

.mission-option__icon {
  font-size: 24px;
}

.mission-option__label {
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
}

.mission-option__desc {
  font-size: 10px;
  color: var(--color-text-muted);
  line-height: 1.3;
}

.mission-selector__error {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-error);
  margin-top: var(--space-2);
  letter-spacing: 0.05em;
}

@media (max-width: 640px) {
  .mission-selector__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
