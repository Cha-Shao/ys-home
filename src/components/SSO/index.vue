<script setup lang="ts">
import { useMessage } from 'naive-ui'

window.$message = useMessage()
</script>

<template>
  <div flex h-100vh relative>
    <img src="../../assets/background_raw.png" w="1/2" object-cover>
    <div absolute left-8 top-8 flex items-center>
      <img src="/favicon-small.svg" alt="X" w-12 mr-4>
      <p color-logo text-2xl font-700>
        MPixel SSO
      </p>
    </div>
    <div w="1/2" flex bg="bg op-75 backdrop-blur-md" b-white b-l-1 relative>
      <div m-auto w-full>
        <RouterView />
      </div>
      <p absolute left="50%" translate-x="-50%" bottom-4 color-coolgray>
        © Copyright {{ new Date().getFullYear() }} <a href="/" target="_blank">MPixel</a>
      </p>
    </div>
  </div>
</template>
