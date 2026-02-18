import { useHead } from '@vueuse/head'
import type { SeoMeta } from '@/types/service.types'

export function useMeta(meta: SeoMeta) {
  useHead({
    title: meta.title,
    meta: [
      { name: 'description', content: meta.description },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:image', content: meta.ogImage || '/og-image.jpg' },
      { property: 'og:type', content: meta.ogType || 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
    ],
  })
}
