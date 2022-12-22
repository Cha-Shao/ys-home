<script setup lang="ts">
import { loginStatus } from '../../api/checkLogin'
import YButton from './YButton.vue'

const links = [
  {
    label: '商店',
    link: 'https://store.elfmc.com/',
  },
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
  <div flex justify-between items-center w-full px-8 pt-4 box-border>
    <div flex items-center>
      <img src="/favicon-small.svg" alt="Logo-small" w-12 mr-4>
      <p font-500>
        映素作坊
      </p>
    </div>
    <div flex items-center>
      <a v-for="(data, i) in links" :key="i" :href="data.link" target="_blank" hover:color-logo transition-200 font-500 px-4>{{ data.label }}</a>
      <div h-6 w-1px bg-hex-00000018 mx-4 />
      <a v-if="loginStatus.status === false" href="/sso/login">
        <YButton primary mx-4>
          登录
        </YButton>
      </a>
      <p v-else>
        {{ loginStatus.name }}
      </p>
    </div>
  </div>
</template>
