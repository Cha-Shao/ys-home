<script setup lang="ts">
const props = defineProps<{
  cover: string
  main?: boolean
}>()
</script>

<template>
  <div shadow-md bg-bg rounded-4 overflow-hidden>
    <img
      :src="props.cover" alt="cover" h-full w-full block object-cover :class="[
        props.main ? 'h-full' : 'aspect-ratio-10/9',
      ]"
    >
  </div>
</template>
