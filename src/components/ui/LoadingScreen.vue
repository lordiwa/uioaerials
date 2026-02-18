<template>
  <Transition name="loading">
    <div v-if="ui.isLoading" class="loading-screen">
      <div class="loading-screen__content">
        <div class="loading-screen__logo">
          UIO <span>AERIALS</span>
        </div>
        <div class="loading-screen__bar">
          <div class="loading-screen__progress"></div>
        </div>
        <div class="loading-screen__text">INICIALIZANDO SISTEMAS</div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUiStore } from '@/stores/ui'

const ui = useUiStore()

onMounted(() => {
  setTimeout(() => {
    ui.finishLoading()
  }, 1800)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--color-bg-base);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-screen__content {
  text-align: center;
}

.loading-screen__logo {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 900;
  letter-spacing: var(--tracking-wider);
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

.loading-screen__logo span {
  color: var(--color-accent-red);
}

.loading-screen__bar {
  width: 200px;
  height: 2px;
  background: var(--color-border);
  margin: 0 auto var(--space-4);
  border-radius: 1px;
  overflow: hidden;
}

.loading-screen__progress {
  height: 100%;
  background: var(--color-accent-red);
  animation: load-progress 1.5s ease-in-out forwards;
}

.loading-screen__text {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-widest);
}

@keyframes load-progress {
  from { width: 0; }
  to   { width: 100%; }
}

.loading-leave-active {
  transition: opacity 0.5s ease;
}
.loading-leave-to {
  opacity: 0;
}
</style>
