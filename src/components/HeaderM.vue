<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const links = [
  {
    label: '商店',
    link: 'https://store.elfmc.com/'
  },
  {
    label: 'Bilibili',
    link: 'https://space.bilibili.com/400235810?spm_id_from=333.337.0.0'
  },
  {
    label: '联系我们',
    link: 'https://store.elfmc.com/contact'
  },
]

const menuStatus: Ref<boolean> = ref(false)
</script>

<template>
  <div relative>
    <div pa-5 w-fit @click="menuStatus = !menuStatus">
      <div i-ri:menu-fill w-6 h-6 />
    </div>
    <div absolute left="50%" translate-x="-50%" top-4 flex items-center>
      <img src="/favicon-small.svg" alt="Logo-small" w-12 mr-4>
    </div>
    <div />
  </div>
</template>
