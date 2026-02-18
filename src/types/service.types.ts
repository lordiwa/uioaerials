export interface Service {
  id: string
  title: string
  copy: string
  media: string
  cta: string
  color: 'red' | 'cyan'
  route?: string
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  thumbnail: string
  videoUrl?: string
  description?: string
}

export interface SeoMeta {
  title: string
  description: string
  ogImage?: string
  ogType?: string
}

export interface HudData {
  topLeft: string
  topRight: string
  bottomLeft: string
  bottomRight: string
  statusBar?: string
}
