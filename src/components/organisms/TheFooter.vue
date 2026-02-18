<template>
  <footer class="footer">
    <UDivider gradient="both" />
    <div class="footer__inner container">
      <div class="footer__brand">
        <span class="footer__logo">UIO <span>AERIALS</span></span>
        <p class="footer__tagline">Imagen Aérea Inmersiva.</p>
      </div>

      <nav class="footer__nav">
        <router-link to="/" class="footer__link">Inicio</router-link>
        <router-link to="/cinematografia-fpv" class="footer__link">Cinematografía FPV</router-link>
        <router-link to="/digitalizacion-3d" class="footer__link">Soluciones 3D</router-link>
        <router-link to="/contacto" class="footer__link">Contacto</router-link>
      </nav>

      <div class="footer__info">
        <UBadge color="green">✓ Autorización DGAC · RDAC-101</UBadge>
      </div>

      <div class="footer__bottom">
        <span class="footer__copy">© {{ year }} UIO Aerials. Todos los derechos reservados.</span>
        <span class="footer__location">Quito, Ecuador</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import UDivider from '@/components/atoms/UDivider.vue'
import UBadge from '@/components/atoms/UBadge.vue'

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: var(--space-8) 0 var(--space-6);
  border-top: 1px solid var(--color-border);
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--space-6);
  align-items: start;
}

.footer__logo {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 900;
  letter-spacing: var(--tracking-wider);
  color: var(--color-text-primary);
}

.footer__logo span {
  color: var(--color-accent-red);
}

.footer__tagline {
  font-size: 13px;
  color: var(--color-text-muted);
  margin-top: var(--space-2);
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__link {
  font-size: 13px;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--duration-fast);
  letter-spacing: 0.03em;
}

.footer__link:hover { color: var(--color-text-primary); }

.footer__info {
  text-align: right;
}

.footer__bottom {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-border);
  margin-top: var(--space-5);
}

.footer__copy,
.footer__location {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
}

@media (max-width: 640px) {
  .footer__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer__info { text-align: center; }
  .footer__nav { align-items: center; }
  .footer__bottom { flex-direction: column; gap: var(--space-2); }
}
</style>
