<template>
  <div>
    <!-- Eventos -->
    <section id="eventos" class="section">
      <div class="container">
        <CategoryHeader
          eyebrow="EVENTOS & ESPECTÁCULOS"
          title="Inmersión Total."
          copy="Capturamos la energía de tu boda, concierto o evento corporativo desde adentro. Volamos sobre y entre los asistentes con seguridad certificada, garantizando un video que no olvidarás."
          color="red"
        />
        <div class="fpv-video reveal">
          <VideoPlayer src="" type="youtube" />
        </div>
      </div>
    </section>

    <UDivider gradient="red" />

    <!-- Real Estate -->
    <section id="real-estate" class="section">
      <div class="container">
        <CategoryHeader
          eyebrow="REAL ESTATE"
          title="El Recorrido Perfecto."
          copy="Muestra la fluidez y distribución de una propiedad en una sola toma (One-Shot). Entramos por la puerta principal, recorremos habitaciones y salimos al jardín sin cortes. La herramienta definitiva para vender espacios de lujo."
          color="red"
        />
        <div class="fpv-video reveal">
          <VideoPlayer src="" type="youtube" />
        </div>
      </div>
    </section>

    <UDivider gradient="red" />

    <!-- Comercial -->
    <section id="comercial" class="section">
      <div class="container">
        <CategoryHeader
          eyebrow="COMERCIAL & ACCIÓN"
          title="Velocidad y Precisión."
          copy="Persecuciones de vehículos, deportes extremos y publicidad de alto impacto. Sincronizamos el vuelo con la acción para tomas vertiginosas en interiores y exteriores que retienen la atención en redes sociales y TV."
          color="red"
        />
        <div class="fpv-video reveal">
          <VideoPlayer src="" type="youtube" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CategoryHeader from '@/components/molecules/CategoryHeader.vue'
import VideoPlayer from '@/components/molecules/VideoPlayer.vue'
import UDivider from '@/components/atoms/UDivider.vue'
</script>

<style scoped>
.fpv-video {
  max-width: 900px;
}
</style>
