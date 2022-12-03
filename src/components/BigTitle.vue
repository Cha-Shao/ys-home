<script setup lang="ts">
const props = defineProps<{
  main: string
  sub: string
}>()
</script>

<template>
  <div relative w-fit mx-auto z-2>
    <div>
      <span h-lg>{{ props.main }}</span><span h-lg color-logo>{{ props.sub }}</span>
    </div>
    <div absolute left="-25%" top="-180%" z--1>
      <img src="../assets/title-before.svg" h-70 w-95>
    </div>
  </div>
</template>
