export type MissionType = 'video-evento' | 'real-estate' | 'comercial' | 'escaneo-3d'

export interface FormData {
  nombre: string
  empresa: string
  email: string
  whatsapp: string
  mision: MissionType | null
  ubicacion: string
  mensaje: string
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export interface MissionOption {
  value: MissionType
  label: string
  icon: string
  description: string
}
