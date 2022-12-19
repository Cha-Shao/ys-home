<script setup lang="ts">
const props = defineProps<{
  main: string
  sub: string
  mobile?: boolean
}>()
</script>

<template>
  <div relative w-fit :class="[props.mobile ? 'ml-2' : 'mx-auto z-0']">
    <div>
      <span :class="[props.mobile ? 'text-5xl font-700' : 'text-6xl font-700']">{{ props.main }}</span><span
        :class="[props.mobile ? 'text-5xl font-700' : 'text-6xl font-700']" color-logo
      >{{ props.sub }}</span>
    </div>
    <div absolute z--1 w-full top="-20%" blur-50 op-75>
      <p text-7xl absolute font-700 color-logo left="10%" top="-15px">
        映
      </p>
      <p text-7xl absolute font-700 color-red-500 right="10%" top="15px">
        素
      </p>
    </div>
  </div>
</template>
