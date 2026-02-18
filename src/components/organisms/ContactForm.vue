<template>
  <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
    <!-- Mission Selector -->
    <MissionSelector
      :modelValue="form.mision.value"
      @update:modelValue="form.mision.value = $event"
      :options="missionOptions"
      :error="form.errors.value.mision"
    />

    <div class="contact-form__grid">
      <ContactField
        v-model="form.nombre.value"
        label="Nombre"
        name="nombre"
        placeholder="Tu nombre"
        :error="form.errors.value.nombre"
      />
      <ContactField
        v-model="form.empresa.value"
        label="Empresa (opcional)"
        name="empresa"
        placeholder="Tu empresa"
      />
    </div>

    <div class="contact-form__grid">
      <ContactField
        v-model="form.email.value"
        label="Email"
        name="email"
        type="email"
        placeholder="tu@email.com"
        :error="form.errors.value.email"
      />
      <ContactField
        v-model="form.whatsapp.value"
        label="WhatsApp (opcional)"
        name="whatsapp"
        type="tel"
        placeholder="+593 9XX XXX XXX"
      />
    </div>

    <ContactField
      v-model="form.ubicacion.value"
      label="Ubicación del proyecto (opcional)"
      name="ubicacion"
      placeholder="Ej: Cumbayá, Quito Norte..."
    />

    <ContactField
      v-model="form.mensaje.value"
      label="Mensaje"
      name="mensaje"
      type="textarea"
      placeholder="Cuéntanos sobre tu proyecto..."
      :error="form.errors.value.mensaje"
    />

    <div class="contact-form__footer">
      <UButton
        variant="primary"
        size="lg"
        type="submit"
        :disabled="status === 'sending'"
      >
        <template v-if="status === 'sending'">
          <span class="contact-form__loader"></span> Enviando...
        </template>
        <template v-else>
          Enviar Solicitud
        </template>
      </UButton>

      <p class="contact-form__privacy">
        Al enviar, acepta nuestra política de privacidad.
      </p>
    </div>

    <!-- Success state -->
    <div v-if="status === 'success'" class="contact-form__success">
      <span class="contact-form__success-icon">✓</span>
      <p class="contact-form__success-text">
        ¡Mensaje enviado! Te responderemos en menos de 24 horas.
      </p>
    </div>

    <!-- Error state -->
    <div v-if="status === 'error'" class="contact-form__error-msg">
      <span>✕</span>
      <p>Hubo un error al enviar. Intenta de nuevo o escríbenos por WhatsApp.</p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from '@/composables/useForm'
import { missionOptions } from '@/data/services'
import { useFormStore } from '@/stores/form'
import ContactField from '@/components/molecules/ContactField.vue'
import MissionSelector from '@/components/molecules/MissionSelector.vue'
import UButton from '@/components/atoms/UButton.vue'
import type { FormStatus } from '@/types/form.types'

const form = useForm()
const formStore = useFormStore()
const status = ref<FormStatus>('idle')

async function handleSubmit() {
  const valid = await form.validate()
  if (!valid) return

  // Sync to store
  formStore.nombre = form.nombre.value
  formStore.empresa = form.empresa.value
  formStore.email = form.email.value
  formStore.whatsapp = form.whatsapp.value
  formStore.mision = form.mision.value
  formStore.ubicacion = form.ubicacion.value
  formStore.mensaje = form.mensaje.value

  status.value = 'sending'
  await formStore.submit()
  status.value = formStore.status

  if (formStore.status === 'success') {
    form.reset()
    setTimeout(() => { status.value = 'idle' }, 5000)
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 640px;
}

.contact-form__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

.contact-form__footer {
  margin-top: var(--space-5);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.contact-form__privacy {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--color-text-disabled);
  letter-spacing: 0.05em;
}

.contact-form__loader {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1.5px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.contact-form__success {
  margin-top: var(--space-5);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  border: 1px solid rgba(52, 199, 89, 0.3);
  background: rgba(52, 199, 89, 0.08);
  border-radius: var(--radius-md);
}

.contact-form__success-icon {
  color: var(--color-success);
  font-size: 18px;
}

.contact-form__success-text {
  font-size: 14px;
  color: var(--color-success);
}

.contact-form__error-msg {
  margin-top: var(--space-5);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  border: 1px solid rgba(255, 59, 48, 0.3);
  background: rgba(255, 59, 48, 0.08);
  border-radius: var(--radius-md);
  font-size: 14px;
  color: var(--color-accent-red);
}

@media (max-width: 640px) {
  .contact-form__grid { grid-template-columns: 1fr; }
}
</style>
