<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  icon: string
  link: string
}>()

const frame = ref(0)

const iconAnimation = (to: number, key: string) => {
  for (let i = 0; i < 19; i++) {
    setTimeout(() => {
      frame.value += to * 96
    }, i * 20)
  }
}
</script>

<template>
  <a :href="props.link" target="_blank">
    <div
      h-full cursor-pointer rounded-4 bg-bg shadow-md flex flex-col justify-center items-center
      @mouseenter="iconAnimation(-1, 'model')" @mouseleave="iconAnimation(1, 'model')"
    >
      <div
        h-24
        w-24
        bg-cover
        bg-no-repeat
        bg-top
        :style="{
          backgroundImage: `url(${props.icon})`,
          backgroundPositionY: `${frame}px`,
        }"
      />
      <h3 mt-4 h-sm>{{ props.title }}</h3>
    </div>
  </a>
</template>
