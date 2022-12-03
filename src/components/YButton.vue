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
    class="flex justify-center items-center border-none"
    :class="[
      props.round ? 'b-rd-99' : '',
      props.translucent ? 'bg-hex-fafafd33 dark:bg-hex-1c1c1c33' : 'bg',
      props?.size === 'small' ? 'pa-1 text-3 b-rd-0.5' : '',
      props?.size === 'normal' ? 'pa-2 b-rd-2' : '',
      props?.size === 'large' ? 'pa-2 text-8 b-rd-4' : '',
      props.bordered ? 'border border-ldvs dark:border-ddvs' : '',
      props.disabled ? 'bg-hex-98999a color-white dark:bg-hex-38393a cursor-no-drop'
      : props.primary ? 'bg-logo dark:bg-logo text-white' : '',
      props.loading ? 'op-75 cursor-wait' : '',
      props.finished ? 'op-75 cursor-no-drop' : '',
    ]" :style="[
      props.translucent || props.disabled ? ''
      : props.primary ? 'box-shadow: 0 4px 4px #FF87294C'
        : props.color ? `box-shadow: 0 4px 4px #${props.color}4C`
          : '',
      $props.color ? `background: #${props.color}` : '']"
  >
    <span>
      <Transition name="fade">
        <div v-if="props.loading" i-ri:loader-5-line class="mr-2 loading" />
      </Transition>
      <slot name="icon" />
    </span>
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped>
.loading{
  animation: loading 0.75s infinite;
  animation-timing-function:linear;
}
@keyframes loading{
  0% {transform: rotate(0deg);}
  50% {transform: rotate(135deg);}
  100% {transform: rotate(360deg);}
}
</style>
