<template>
  <div class="stat-block">
    <span ref="numberRef" class="stat-block__value" :style="{ color: accentColor }">
      0{{ suffix }}
    </span>
    <span class="stat-block__label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = withDefaults(defineProps<{
  value: number
  label: string
  suffix?: string
  color?: 'red' | 'cyan' | 'white'
}>(), {
  suffix: '',
  color: 'white',
})

const numberRef = ref<HTMLElement | null>(null)

const accentColor = computed(() => {
  if (props.color === 'red') return 'var(--color-accent-red)'
  if (props.color === 'cyan') return 'var(--color-accent-cyan)'
  return 'var(--color-text-primary)'
})

onMounted(() => {
  if (!numberRef.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    numberRef.value.textContent = `${props.value}${props.suffix}`
    return
  }

  const obj = { val: 0 }
  gsap.to(obj, {
    val: props.value,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: numberRef.value,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    onUpdate() {
      if (numberRef.value) {
        numberRef.value.textContent = `${Math.round(obj.val)}${props.suffix}`
      }
    },
  })
})
</script>

<style scoped>
.stat-block {
  text-align: center;
  padding: var(--space-5);
}

.stat-block__value {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 900;
  letter-spacing: var(--tracking-wide);
  line-height: 1;
  margin-bottom: var(--space-2);
}

.stat-block__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
}
</style>
