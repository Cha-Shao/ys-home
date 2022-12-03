<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
import NewsPage from './components/News/index.vue'
import VideosPage from './components/Videos/index.vue'
import MembersPage from './components/Members/index.vue'
import Footer from './components/Footer/index.vue'

import customTheme from './naive-ui-theme-overrides.json'
</script>

<template>
  <n-config-provider :theme-overrides="customTheme">
    <div class="root" max-w-1440px mx-auto>
      <div min-h-80vh mt-12vh>
        <NewsPage />
      </div>
      <div min-h-80vh mt-12vh>
        <VideosPage />
      </div>
      <div min-h-80vh mt-12vh>
        <MembersPage />
      </div>
    </div>
    <Footer />
  </n-config-provider>
</template>
