<template>
  <div :class="['contact-field', { 'contact-field--error': error }]">
    <label :for="name" class="contact-field__label">{{ label }}</label>
    <textarea
      v-if="type === 'textarea'"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      class="contact-field__input contact-field__input--textarea"
      rows="4"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    ></textarea>
    <input
      v-else
      :id="name"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      class="contact-field__input"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span v-if="error" class="contact-field__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  type?: string
  name: string
  placeholder?: string
  modelValue: string
  error?: string
}>(), {
  type: 'text',
  placeholder: '',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style scoped>
.contact-field {
  margin-bottom: var(--space-4);
}

.contact-field__label {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}

.contact-field__input {
  width: 100%;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  transition: border-color var(--duration-fast);
  outline: none;
}

.contact-field__input::placeholder {
  color: var(--color-text-disabled);
}

.contact-field__input:focus {
  border-color: var(--color-accent-red);
  box-shadow: 0 0 0 1px var(--color-accent-red-dim);
}

.contact-field__input--textarea {
  resize: vertical;
  min-height: 100px;
}

.contact-field--error .contact-field__input {
  border-color: var(--color-error);
}

.contact-field__error {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-error);
  margin-top: var(--space-1);
  letter-spacing: 0.05em;
}
</style>
