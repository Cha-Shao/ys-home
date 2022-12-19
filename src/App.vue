<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from 'naive-ui'

import customTheme from './naive-ui-theme-overrides.json'
</script>

<template>
  <NConfigProvider :theme-overrides="customTheme">
    <NMessageProvider>
      <RouterView />
    </NMessageProvider>
  </NConfigProvider>
</template>
