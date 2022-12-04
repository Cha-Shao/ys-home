<script setup lang="ts">
const props = defineProps<{
  main: string
  sub: string
}>()
</script>

<template>
  <div relative w-fit mx-auto z-0>
    <div>
      <span h-lg>{{ props.main }}</span><span h-lg color-logo>{{ props.sub }}</span>
    </div>
    <div absolute z--1 w-full top="-20%" blur-50 op-75>
      <p absolute text-7xl font-700 color-logo left="10%" top="-15px">映</p>
      <p absolute text-7xl font-700 color-red-500 right="10%" top="15px">素</p>
    </div>
  </div>
</template>
