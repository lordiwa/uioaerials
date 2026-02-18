<template>
  <div class="video-player">
    <div v-if="type === 'youtube'" class="video-player__iframe">
      <iframe
        :src="`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
    <div v-else class="video-player__native">
      <video
        ref="videoRef"
        :src="src"
        :poster="poster"
        :autoplay="autoplay"
        :muted="autoplay"
        :loop="autoplay"
        playsinline
        preload="metadata"
      ></video>
      <div v-if="!autoplay" class="video-player__controls">
        <button class="video-player__play" @click="togglePlay">
          {{ isPlaying ? '❚❚' : '▶' }}
        </button>
      </div>
    </div>
    <!-- HUD frame -->
    <div class="video-player__hud video-player__hud--tl"></div>
    <div class="video-player__hud video-player__hud--tr"></div>
    <div class="video-player__hud video-player__hud--bl"></div>
    <div class="video-player__hud video-player__hud--br"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useVideoAutoplay } from '@/composables/useVideoAutoplay'

const props = withDefaults(defineProps<{
  src: string
  type?: 'youtube' | 'file'
  poster?: string
  autoplay?: boolean
}>(), {
  type: 'file',
  autoplay: false,
})

const videoRef = ref<HTMLVideoElement | null>(null)
const { isPlaying } = useVideoAutoplay(videoRef)

const youtubeId = computed(() => {
  if (props.type !== 'youtube') return ''
  const match = props.src.match(/(?:youtu\.be\/|v=)([^&]+)/)
  return match ? match[1] : props.src
})

function togglePlay() {
  const video = videoRef.value
  if (!video) return
  if (video.paused) video.play()
  else video.pause()
}
</script>

<style scoped>
.video-player {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: #000;
}

.video-player__iframe {
  position: relative;
  padding-top: 56.25%;
}

.video-player__iframe iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-player__native video {
  width: 100%;
  display: block;
}

.video-player__controls {
  position: absolute;
  bottom: 16px;
  left: 16px;
}

.video-player__play {
  width: 40px;
  height: 40px;
  background: rgba(13, 13, 13, 0.8);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-text-primary);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-fast);
}

.video-player__play:hover {
  border-color: var(--color-accent-red);
  box-shadow: var(--shadow-red);
}

/* HUD corner decorations */
.video-player__hud {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: rgba(255, 59, 48, 0.25);
  border-style: solid;
  pointer-events: none;
}

.video-player__hud--tl { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
.video-player__hud--tr { top: 8px; right: 8px; border-width: 1px 1px 0 0; }
.video-player__hud--bl { bottom: 8px; left: 8px; border-width: 0 0 1px 1px; }
.video-player__hud--br { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }
</style>
