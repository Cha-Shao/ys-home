<script setup lang="ts">
import { useMenuStatus } from '../../utils/showMenu'
</script>

<template>
  <div relative>
    <div pa-5 w-fit @click="useMenuStatus.show()">
      <div i-ri:menu-fill w-6 h-6 />
    </div>
    <div absolute left="50%" translate-x="-50%" top-4 flex items-center>
      <img src="/favicon-small.svg" alt="Logo-small" w-12 mr-4>
    </div>
    <div />
  </div>
</template>
