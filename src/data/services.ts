import type { Service } from '@/types/service.types'

export const fpvServices: Service[] = [
  {
    id: 'eventos',
    title: 'Eventos & Espectáculos',
    copy: 'Capturamos la energía de tu boda, concierto o evento corporativo desde adentro. Volamos sobre y entre los asistentes con seguridad certificada, garantizando un video que no olvidarás.',
    media: '',
    cta: 'Ver Demo',
    color: 'red',
    route: '/cinematografia-fpv#eventos',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    copy: 'Muestra la fluidez y distribución de una propiedad en una sola toma (One-Shot). Entramos por la puerta principal, recorremos habitaciones y salimos al jardín sin cortes.',
    media: '',
    cta: 'Ver Demo',
    color: 'red',
    route: '/cinematografia-fpv#real-estate',
  },
  {
    id: 'comercial',
    title: 'Comercial & Acción',
    copy: 'Persecuciones de vehículos, deportes extremos y publicidad de alto impacto. Sincronizamos el vuelo con la acción para tomas vertiginosas.',
    media: '',
    cta: 'Ver Demo',
    color: 'red',
    route: '/cinematografia-fpv#comercial',
  },
]

export const services3D: Service[] = [
  {
    id: 'indoors',
    title: 'Escaneo Interior',
    copy: 'Escaneo visual en entornos sin GPS. Navegamos manualmente bodegas, túneles, museos o interiores patrimoniales para capturar texturas y geometrías complejas.',
    media: '',
    cta: 'Más info',
    color: 'cyan',
    route: '/digitalizacion-3d#indoors',
  },
  {
    id: 'outdoors',
    title: 'Levantamiento Exterior',
    copy: 'Levantamiento visual de fachadas, terrenos y cubiertas. Inspección de estructuras altas sin andamios y generación de modelos para pre-visualización arquitectónica.',
    media: '',
    cta: 'Más info',
    color: 'cyan',
    route: '/digitalizacion-3d#outdoors',
  },
]

export const missionOptions = [
  { value: 'video-evento' as const, label: 'Video Evento', icon: '🎬', description: 'Boda, concierto, corporativo' },
  { value: 'real-estate' as const, label: 'Real Estate', icon: '🏠', description: 'Propiedad, one-shot tour' },
  { value: 'comercial' as const, label: 'Comercial', icon: '⚡', description: 'Publicidad, acción, deportes' },
  { value: 'escaneo-3d' as const, label: 'Escaneo 3D', icon: '📐', description: 'Digital twin, fotogrametría' },
]
