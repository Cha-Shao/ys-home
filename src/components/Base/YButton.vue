<script lang="ts" setup>
const props = defineProps<{
  gray?: boolean
}>()
</script>

<template>
  <button
    flex
    justify-center
    items-center
    py-2
    px-4
    rounded-2
    :class="[
      props.gray ? 'bg-gray-3 color-black' : 'bg-logo shadow-md shadow-logo/33 color-white',
    ]"
    border-none
    cursor-pointer
  >
    <span>
      <slot />
    </span>
  </button>
</template>
