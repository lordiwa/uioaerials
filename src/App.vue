<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/organisms/TheNavbar.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'
import HudOverlay from '@/components/organisms/HudOverlay.vue'
import LoadingScreen from '@/components/ui/LoadingScreen.vue'
</script>

<template>
  <LoadingScreen />
  <HudOverlay />
  <TheNavbar />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
