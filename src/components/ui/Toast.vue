<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="visible" :class="['toast', `toast--${type}`]">
        <span class="toast__icon">{{ icon }}</span>
        <span class="toast__message">{{ message }}</span>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  visible: boolean
  message: string
  type?: 'success' | 'error' | 'info'
}>(), {
  type: 'info',
})

const icon = computed(() => {
  if (props.type === 'success') return '✓'
  if (props.type === 'error') return '✕'
  return 'ℹ'
})
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: var(--z-toast);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-md);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: 0.05em;
}

.toast--success {
  background: rgba(52, 199, 89, 0.1);
  border: 1px solid rgba(52, 199, 89, 0.3);
  color: var(--color-success);
}

.toast--error {
  background: rgba(255, 59, 48, 0.1);
  border: 1px solid rgba(255, 59, 48, 0.3);
  color: var(--color-accent-red);
}

.toast--info {
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.25);
  color: var(--color-accent-cyan);
}

.toast__icon {
  font-size: 14px;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 300ms var(--ease-out);
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(10px) translateX(10px);
}
</style>
