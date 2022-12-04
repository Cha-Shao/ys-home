<script setup lang="ts">
const props = defineProps<{
  cover: string
  main?: boolean
}>()
</script>

<template>
  <div shadow-md bg-bg b-rd-4 overflow-hidden h-full>
    <img :src="props.cover" alt="cover" w-full block object-cover :class="[
      props.main ? 'h-full' : 'aspect-ratio-5/4'
    ]">
  </div>
</template>
