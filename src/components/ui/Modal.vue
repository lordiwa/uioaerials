<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-backdrop" @click.self="close">
        <div class="modal">
          <button class="modal__close" @click="close" aria-label="Cerrar">✕</button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function close() {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-5);
}

.modal {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-7);
  max-width: 640px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.modal__close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  font-size: 16px;
  color: var(--color-text-muted);
  transition: color var(--duration-fast);
}

.modal__close:hover {
  color: var(--color-text-primary);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 300ms var(--ease-out);
}
.modal-enter-active .modal,
.modal-leave-active .modal {
  transition: transform 300ms var(--ease-out);
}

.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-from .modal { transform: scale(0.95) translateY(10px); }
.modal-leave-to .modal { transform: scale(0.95) translateY(10px); }
</style>
