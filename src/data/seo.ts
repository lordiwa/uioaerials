import type { SeoMeta } from '@/types/service.types'

export const seoData: { [key: string]: SeoMeta; home: SeoMeta; fpv: SeoMeta; '3d': SeoMeta; contacto: SeoMeta } = {
  home: {
    title: 'UIO Aerials — Imagen Aérea Inmersiva · Drones FPV Ecuador',
    description: 'Cinematografía FPV de precisión y digitalización 3D en Ecuador. Servicios aéreos profesionales con autorización DGAC. Video de bodas, inmobiliario y publicidad con drones.',
    ogImage: '/og-image.jpg',
    ogType: 'website',
  },
  fpv: {
    title: 'Cinematografía FPV — Video Aéreo Profesional · UIO Aerials',
    description: 'Video de bodas, eventos y publicidad con drones FPV en Ecuador. Tomas imposibles en interiores y exteriores con autorización DGAC.',
    ogImage: '/og-fpv.jpg',
  },
  '3d': {
    title: 'Digitalización 3D — Gemelos Digitales Ecuador · UIO Aerials',
    description: 'Fotogrametría, NeRFs y modelos 3D de alta fidelidad para arquitectura, patrimonio e industria. Escaneo aéreo e interior en Ecuador.',
    ogImage: '/og-3d.jpg',
  },
  contacto: {
    title: 'Cotizar Vuelo — UIO Aerials',
    description: 'Solicita una cotización para cinematografía FPV o digitalización 3D. Asesoría gratuita sobre viabilidad, seguridad y normativa DGAC.',
    ogImage: '/og-image.jpg',
  },
}

export const hudData = {
  topLeft: 'UIO // AERIALS // QUITO-EC',
  topRight: 'DGAC RDAC-101 ✓',
  bottomLeft: '-0.2295° S / -78.5243° W',
  bottomRight: 'ALT: 2,850m MSL',
  statusBar: 'SISTEMA OPERATIVO // MODO: VUELO',
}
