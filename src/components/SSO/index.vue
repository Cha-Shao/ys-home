<script setup lang="ts">
import { useMessage } from 'naive-ui'

window.$message = useMessage()
</script>

<template>
  <div flex flex-col justify-center items-center h-100vh style="background: url('../../assets/background_raw.png')">
    <div flex items-center mb-4>
      <img src="/favicon-small.svg" alt="X" w-24 mr-4>
      <p color-logo text-3xl font-700>
        MMixel SSO
      </p>
    </div>

    <RouterView />
    <p absolute left="50%" translate-x="-50%" bottom-4 color-coolgray>
      © Copyright {{ new Date().getFullYear() }} <a href="/" target="_blank">MMixel</a>
    </p>
  </div>
</template>
