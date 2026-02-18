import { ref, computed } from 'vue'
import * as yup from 'yup'
import type { MissionType } from '@/types/form.types'

const schema = yup.object({
  nombre: yup.string().required('El nombre es obligatorio').min(2, 'Mínimo 2 caracteres'),
  empresa: yup.string().default(''),
  email: yup.string().required('El email es obligatorio').email('Email no válido'),
  whatsapp: yup.string().default(''),
  mision: yup.string().nullable().required('Selecciona un tipo de misión'),
  ubicacion: yup.string().default(''),
  mensaje: yup.string().required('Escribe un mensaje').min(10, 'Mínimo 10 caracteres'),
})

export function useForm() {
  const nombre = ref('')
  const empresa = ref('')
  const email = ref('')
  const whatsapp = ref('')
  const mision = ref<MissionType | null>(null)
  const ubicacion = ref('')
  const mensaje = ref('')
  const errors = ref<Record<string, string>>({})

  const isValid = computed(() => Object.keys(errors.value).length === 0)

  async function validate(): Promise<boolean> {
    errors.value = {}
    try {
      await schema.validate(
        { nombre: nombre.value, empresa: empresa.value, email: email.value, whatsapp: whatsapp.value, mision: mision.value, ubicacion: ubicacion.value, mensaje: mensaje.value },
        { abortEarly: false }
      )
      return true
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        for (const e of err.inner) {
          if (e.path) errors.value[e.path] = e.message
        }
      }
      return false
    }
  }

  function reset() {
    nombre.value = ''
    empresa.value = ''
    email.value = ''
    whatsapp.value = ''
    mision.value = null
    ubicacion.value = ''
    mensaje.value = ''
    errors.value = {}
  }

  return {
    nombre, empresa, email, whatsapp, mision, ubicacion, mensaje,
    errors, isValid, validate, reset,
  }
}
