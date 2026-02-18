import { defineStore } from 'pinia'
import type { MissionType, FormStatus } from '@/types/form.types'
import emailjs from '@emailjs/browser'

export const useFormStore = defineStore('form', {
  state: () => ({
    nombre: '',
    empresa: '',
    email: '',
    whatsapp: '',
    mision: null as MissionType | null,
    ubicacion: '',
    mensaje: '',
    status: 'idle' as FormStatus,
  }),
  actions: {
    async submit() {
      this.status = 'sending'
      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        if (serviceId && templateId && publicKey) {
          await emailjs.send(serviceId, templateId, {
            nombre: this.nombre,
            empresa: this.empresa,
            email: this.email,
            whatsapp: this.whatsapp,
            mision: this.mision,
            ubicacion: this.ubicacion,
            mensaje: this.mensaje,
          }, publicKey)
        }

        this.status = 'success'
        this.$reset()
        this.status = 'success'
      } catch {
        this.status = 'error'
      }
    },
    resetStatus() {
      this.status = 'idle'
    },
  },
})
