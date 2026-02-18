<script setup lang="ts">
import { computed } from 'vue'
import ContactForm from '@/components/organisms/ContactForm.vue'
import USectionLabel from '@/components/atoms/USectionLabel.vue'
import UBadge from '@/components/atoms/UBadge.vue'
import UDivider from '@/components/atoms/UDivider.vue'
import { useMeta } from '@/composables/useMeta'
import { seoData } from '@/data/seo'

useMeta(seoData.contacto)

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '593XXXXXXXXX'
const whatsappLink = computed(() =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, me interesa cotizar un servicio de UIO Aerials.')}`
)
</script>

<template>
  <div class="contacto-page">
    <section class="section contacto-hero">
      <div class="container">
        <USectionLabel text="CONTACTO" color="red" />
        <h1 class="contacto-hero__title">¿Tienes un proyecto<br>en mente?</h1>
        <p class="contacto-hero__copy">
          No solo volamos, te asesoramos sobre la viabilidad,
          seguridad y normativa de tu idea.
        </p>
      </div>
    </section>

    <UDivider gradient="both" />

    <section class="section">
      <div class="container">
        <div class="contacto-grid">
          <!-- Form -->
          <div class="contacto-grid__form">
            <ContactForm />
          </div>

          <!-- Sidebar -->
          <aside class="contacto-grid__sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-card__title">WhatsApp Directo</h3>
              <p class="sidebar-card__copy">
                ¿Prefieres una respuesta inmediata? Escríbenos directamente.
              </p>
              <a :href="whatsappLink" target="_blank" rel="noopener" class="sidebar-card__wa-link">
                💬 Abrir WhatsApp
              </a>
            </div>

            <div class="sidebar-card">
              <h3 class="sidebar-card__title">Zonas de Operación</h3>
              <div class="sidebar-card__zones">
                <UBadge color="gray">Quito</UBadge>
                <UBadge color="gray">Cumbayá</UBadge>
                <UBadge color="gray">Tumbaco</UBadge>
                <UBadge color="gray">Valle de los Chillos</UBadge>
                <UBadge color="gray">Mitad del Mundo</UBadge>
                <UBadge color="gray">Sierra Norte</UBadge>
              </div>
            </div>

            <div class="sidebar-card">
              <h3 class="sidebar-card__title">Tiempo de Respuesta</h3>
              <p class="sidebar-card__copy">
                Respondemos en menos de 24 horas hábiles.
                Para urgencias, usa WhatsApp.
              </p>
            </div>

            <div class="sidebar-card">
              <h3 class="sidebar-card__title">Certificación</h3>
              <UBadge color="green">✓ Autorización DGAC · RDAC-101</UBadge>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contacto-hero {
  padding-top: calc(72px + var(--space-9));
}

.contacto-hero__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 900;
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-4);
}

.contacto-hero__copy {
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  max-width: 500px;
  line-height: 1.7;
}

.contacto-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--space-8);
  align-items: start;
}

.sidebar-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  background: var(--color-surface);
  margin-bottom: var(--space-4);
}

.sidebar-card__title {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}

.sidebar-card__copy {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.sidebar-card__wa-link {
  display: inline-block;
  margin-top: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-success);
  letter-spacing: 0.05em;
  transition: opacity var(--duration-fast);
}

.sidebar-card__wa-link:hover {
  opacity: 0.8;
}

.sidebar-card__zones {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

@media (max-width: 768px) {
  .contacto-grid {
    grid-template-columns: 1fr;
  }
}
</style>
