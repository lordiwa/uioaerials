<template>
  <div ref="containerRef" class="three-viewer">
    <div v-if="!webglSupported" class="three-viewer__fallback">
      <p>Tu navegador no soporta WebGL.</p>
      <p class="three-viewer__fallback-sub">Modelo 3D no disponible.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)
const webglSupported = ref(true)

let renderer: THREE.WebGLRenderer | null = null
let animationId: number | null = null

onMounted(() => {
  const container = containerRef.value
  if (!container) return

  // Check WebGL support
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    if (!gl) {
      webglSupported.value = false
      return
    }
  } catch {
    webglSupported.value = false
    return
  }

  const width = container.clientWidth
  const height = container.clientHeight

  // Scene
  const scene = new THREE.Scene()

  // Camera
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
  camera.position.set(3, 2, 4)
  camera.lookAt(0, 0, 0)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  container.appendChild(renderer.domElement)

  // Wireframe building geometry
  const buildingGroup = new THREE.Group()

  // Main building body
  const bodyGeo = new THREE.BoxGeometry(1.5, 3, 1.5)
  const bodyMat = new THREE.MeshBasicMaterial({
    color: 0x00E5FF,
    wireframe: true,
    transparent: true,
    opacity: 0.5,
  })
  const body = new THREE.Mesh(bodyGeo, bodyMat)
  body.position.y = 1.5
  buildingGroup.add(body)

  // Secondary structure
  const wingGeo = new THREE.BoxGeometry(1, 2, 1)
  const wingMat = new THREE.MeshBasicMaterial({
    color: 0x00E5FF,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  })
  const wing = new THREE.Mesh(wingGeo, wingMat)
  wing.position.set(1.2, 1, 0)
  buildingGroup.add(wing)

  // Roof detail
  const roofGeo = new THREE.ConeGeometry(0.4, 0.8, 4)
  const roofMat = new THREE.MeshBasicMaterial({
    color: 0x00E5FF,
    wireframe: true,
    transparent: true,
    opacity: 0.4,
  })
  const roof = new THREE.Mesh(roofGeo, roofMat)
  roof.position.y = 3.4
  buildingGroup.add(roof)

  // Ground grid
  const gridHelper = new THREE.GridHelper(8, 16, 0x00E5FF, 0x00E5FF)
  gridHelper.material.opacity = 0.08
  gridHelper.material.transparent = true
  scene.add(gridHelper)

  scene.add(buildingGroup)

  // Animate
  function animate() {
    animationId = requestAnimationFrame(animate)
    buildingGroup.rotation.y += 0.003
    renderer!.render(scene, camera)
  }
  animate()

  // Resize handler
  function onResize() {
    if (!container || !renderer) return
    const w = container.clientWidth
    const h = container.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  if (animationId !== null) cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.dispose()
    renderer.domElement.remove()
  }
})
</script>

<style scoped>
.three-viewer {
  width: 100%;
  height: 400px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
}

.three-viewer :deep(canvas) {
  display: block;
}

.three-viewer__fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: 0.1em;
}

.three-viewer__fallback-sub {
  font-size: var(--text-xs);
  margin-top: var(--space-2);
}
</style>
