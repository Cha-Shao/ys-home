<script lang="ts" setup>
const props = withDefaults(defineProps<{
  primary?: boolean
  round?: boolean
  translucent?: boolean
  size?: 'small' | 'normal' | 'large'
  bordered?: boolean
  loading?: boolean
  disabled?: boolean
  finished?: boolean
  color?: string
}>(), {
  size: 'normal',
})
</script>

<template>
  <button
    :disabled="props.disabled"
    flex
    justify-center
    items-center
    py-2
    px-4
    b-rd-2
    bg-logo
    text-white
    shadow-md
    shadow="logo/33"
    border-none
    cursor-pointer
  >
    <span>
      <slot />
    </span>
  </button>
</template>
