<template>
  <header :class="['navbar', { 'navbar--scrolled': isScrolled, 'navbar--open': ui.isMobileMenuOpen }]">
    <div class="navbar__inner container--wide">
      <router-link to="/" class="navbar__logo" @click="ui.closeMobileMenu()">
        UIO <span>AERIALS</span>
      </router-link>

      <nav class="navbar__links">
        <router-link to="/cinematografia-fpv" class="navbar__link">Cinematografía FPV</router-link>
        <router-link to="/digitalizacion-3d" class="navbar__link">Soluciones 3D</router-link>
        <router-link to="/contacto" class="navbar__link">Contacto</router-link>
      </nav>

      <UButton variant="outline" size="sm" to="/contacto" class="navbar__cta">
        Cotizar
      </UButton>

      <button class="navbar__hamburger" @click="ui.toggleMobileMenu()" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile drawer -->
    <div v-if="ui.isMobileMenuOpen" class="navbar__mobile">
      <nav class="navbar__mobile-links">
        <router-link to="/cinematografia-fpv" class="navbar__mobile-link" @click="ui.closeMobileMenu()">Cinematografía FPV</router-link>
        <router-link to="/digitalizacion-3d" class="navbar__mobile-link" @click="ui.closeMobileMenu()">Soluciones 3D</router-link>
        <router-link to="/contacto" class="navbar__mobile-link" @click="ui.closeMobileMenu()">Contacto</router-link>
        <UButton variant="primary" size="md" to="/contacto" @click="ui.closeMobileMenu()">
          Cotizar Vuelo
        </UButton>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useUiStore } from '@/stores/ui'
import UButton from '@/components/atoms/UButton.vue'

const ui = useUiStore()
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 80
  ui.setNavScrolled(isScrolled.value)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  transition: background var(--duration-normal) var(--ease-out),
              backdrop-filter var(--duration-normal) var(--ease-out),
              border-color var(--duration-normal) var(--ease-out);
  border-bottom: 1px solid transparent;
}

.navbar--scrolled {
  background: rgba(13, 13, 13, 0.95);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--color-border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 var(--space-6);
  max-width: 1440px;
  margin: 0 auto;
}

.navbar__logo {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 900;
  letter-spacing: var(--tracking-wider);
  color: var(--color-text-primary);
  text-decoration: none;
}

.navbar__logo span {
  color: var(--color-accent-red);
}

.navbar__links {
  display: flex;
  gap: var(--space-6);
}

.navbar__link {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
  text-decoration: none;
  text-transform: uppercase;
  transition: color var(--duration-fast);
  position: relative;
}

.navbar__link:hover,
.navbar__link.router-link-active {
  color: var(--color-text-primary);
}

.navbar__link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-accent-red);
}

.navbar__cta {
  margin-left: var(--space-4);
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--color-text-primary);
  transition: all var(--duration-fast);
}

.navbar--open .navbar__hamburger span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 5px);
}
.navbar--open .navbar__hamburger span:nth-child(2) {
  opacity: 0;
}
.navbar--open .navbar__hamburger span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -5px);
}

/* Mobile */
.navbar__mobile {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(13, 13, 13, 0.98);
  backdrop-filter: blur(20px);
  padding: var(--space-7) var(--space-6);
  animation: slide-in 300ms var(--ease-out);
}

.navbar__mobile-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.navbar__mobile-link {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  text-decoration: none;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-border);
}

@keyframes slide-in {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

@media (max-width: 768px) {
  .navbar__links,
  .navbar__cta { display: none; }
  .navbar__hamburger { display: flex; }
}
</style>
