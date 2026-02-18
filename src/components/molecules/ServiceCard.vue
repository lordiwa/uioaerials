<template>
  <router-link
    :to="route || '#'"
    :class="['service-card', { 'service-card--3d': color === 'cyan' }]"
  >
    <div class="service-card__media">
      <img v-if="media" :src="media" :alt="title" loading="lazy" />
      <div class="service-card__overlay"></div>
    </div>
    <div class="service-card__content">
      <USectionLabel :text="eyebrow || ''" :color="color" />
      <h3 class="service-card__title">{{ title }}</h3>
      <p class="service-card__copy">{{ copy }}</p>
      <span class="service-card__cta">
        {{ cta }} <span class="service-card__arrow">→</span>
      </span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import USectionLabel from '@/components/atoms/USectionLabel.vue'

withDefaults(defineProps<{
  title: string
  copy: string
  media?: string
  cta: string
  color?: 'red' | 'cyan'
  route?: string
  eyebrow?: string
}>(), {
  color: 'red',
})
</script>

<style scoped>
.service-card {
  display: block;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
  transition: border-color 300ms var(--ease-out),
              transform 300ms var(--ease-out);
  text-decoration: none;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-accent-red);
  transform: scaleX(0);
  transition: transform 400ms var(--ease-out);
  transform-origin: left;
  z-index: 2;
}

.service-card:hover {
  border-color: rgba(255, 59, 48, 0.4);
  transform: translateY(-4px);
  box-shadow: var(--shadow-dark);
}

.service-card:hover::before { transform: scaleX(1); }

.service-card--3d::before { background: var(--color-accent-cyan); }
.service-card--3d:hover { border-color: rgba(0, 229, 255, 0.3); }

.service-card__media {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.service-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms var(--ease-out);
}

.service-card:hover .service-card__media img {
  transform: scale(1.05);
}

.service-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--color-surface) 0%, transparent 60%);
}

.service-card__content {
  padding: var(--space-5);
}

.service-card__title {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.service-card__copy {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-4);
}

.service-card__cta {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent-red);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.service-card--3d .service-card__cta {
  color: var(--color-accent-cyan);
}

.service-card__arrow {
  display: inline-block;
  transition: transform 200ms var(--ease-out);
}

.service-card:hover .service-card__arrow {
  transform: translateX(4px);
}
</style>
