import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useVideoAutoplay(videoRef: Ref<HTMLVideoElement | null>) {
  const isPlaying = ref(false)

  function handlePlay() {
    isPlaying.value = true
  }
  function handlePause() {
    isPlaying.value = false
  }

  onMounted(() => {
    const video = videoRef.value
    if (!video) return
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.play().catch(() => {
      // Autoplay blocked — that's okay
    })
  })

  onUnmounted(() => {
    const video = videoRef.value
    if (!video) return
    video.removeEventListener('play', handlePlay)
    video.removeEventListener('pause', handlePause)
  })

  return { isPlaying }
}
