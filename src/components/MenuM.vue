<script setup lang="ts">
import { useMenuStatus } from '../utils/showMenu'

const links = [
  {
    label: 'Bilibili',
    link: 'https://space.bilibili.com/400235810?spm_id_from=333.337.0.0',
  },
  {
    label: '联系我们',
    link: 'https://store.elfmc.com/contact',
  },
]
</script>

<template>
  <div
    fixed
    left="0"
    top="0"
    pa-4
    h-100vh
    box-border
    w-80vw
    bg-bg
    bg-op-85
    backdrop-blur-md
    b-white
    b-1
    z-2
    flex
    flex-col
  >
    <div i-ri:close-line mb-4 text-6 color-coolgray-500 @click="useMenuStatus.hide()" />
    <a
      v-for="(data, i) in links" :key="i"
      :href="data.link" target="_blank"
      mb-4
      text-4
    >{{ data.label }}</a>
  </div>
</template>
