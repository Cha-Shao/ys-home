<script setup lang="ts">
const props = defineProps<{
  color?: string
}>()
</script>

<template>
  <div absolute right--18px top-7>
    <div b-rd-l-2 py-1 px-3 :style="{ background: `#${props.color ? props.color : 'FF8729'}` }">
      <slot />
    </div>
    <div w-0 h-0 b-12 b-transparent :class="[`b-r-hex-${props.color ? props.color : 'FF8729'}`]" brightness-80 rotate-45 absolute bottom="-12px" right="5px" />
  </div>
</template>
