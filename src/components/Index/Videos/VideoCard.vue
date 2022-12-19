<script setup lang="ts">
const props = defineProps<{
  title: string
  brief: string
  cover: string
  link: string
  main?: boolean
  mobile?: boolean
}>()
</script>

<template>
  <a :href="props.link" target="_blank" :class="[props.mobile ? 'h-75' : 'h-full']">
    <div shadow-md bg-bg b-rd-4 overflow-hidden h-full flex flex-col>
      <img
        :src="props.cover" alt="cover" flex-grow w-full block object-cover :class="[
          props.main ? '' : 'aspect-ratio-960/600',
        ]"
      >
      <div px-4 py-2 box-border h-24>
        <h1 h-lt :class="[props.mobile ? 'line-clamp-1' : '']">{{ props.title }}</h1>
        <p color-coolgray-500 line-clamp-2 whitespace-pre-wrap>{{ props.brief }}</p>
      </div>
    </div>
  </a>
</template>
