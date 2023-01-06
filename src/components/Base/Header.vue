<script setup lang="ts">
import { h } from 'vue'
import { NDropdown, useMessage } from 'naive-ui'
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

const renderIcon = (icon: string) => {
  return () => {
    return h('div', { class: icon })
  }
}

const dropDownOptions = [{
  label: '退出登录',
  key: '/logout',
  icon: renderIcon('i-ri:logout-box-r-line'),
}]

const message = useMessage()
const handleSelect = (key: string) => {
  if (key === '/logout') {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    message.success('已退出登录')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
}
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

      <div v-if="loginStatus.status === null" h-6 w-6 flex>
        <div m-auto class="loading" i-ri:loader-5-line />
      </div>
      <p v-else-if="loginStatus.status === true">
        <NDropdown trigger="hover" :options="dropDownOptions" @select="handleSelect">
          {{ loginStatus.username }}
        </NDropdown>
      </p>
      <a v-else href="/sso/login">
        <YButton primary mx-4>
          登录
        </YButton>
      </a>
    </div>
  </div>
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
