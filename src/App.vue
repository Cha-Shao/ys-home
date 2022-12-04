<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
import NewsPage from './components/News/index.vue'
import BannerPage from './components/Banner.vue'
import VideosPage from './components/Videos/index.vue'
import ToysPage from './components/Toys/index.vue'
import MembersPage from './components/Members/index.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import customTheme from './naive-ui-theme-overrides.json'
</script>

<template>
  <n-config-provider :theme-overrides="customTheme">
    <Header />
    <div class="root" max-w-1440px mx-auto px-16>
      <div my-15vh>
        <NewsPage />
      </div>
      <div mb-12vh>
        <BannerPage />
      </div>
      <div my-15vh>
        <VideosPage />
      </div>
      <div my-15vh>
        <ToysPage />
      </div>
      <div my-15vh>
        <MembersPage />
      </div>
    </div>
    <Footer />
  </n-config-provider>
</template>
