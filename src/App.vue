<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';

// PC
import Header from './components/Header.vue'
import TopPage from './components/Top/index.vue'
import RoutesPage from './components/Routes/index.vue'
import NewsPage from './components/News/index.vue'
import BannerPage from './components/Banner.vue'
import VideosPage from './components/Videos/index.vue'
import ToysPage from './components/Toys/index.vue'
import MembersPage from './components/Members/index.vue'
import Footer from './components/Footer.vue'

// Mobile
import HeaderM from './components/HeaderM.vue'
import TopPageM from './components/Top/indexM.vue'
import RoutesPageM from './components/Routes/indexM.vue'
import NewsPageM from './components/News/indexM.vue'
import VideosPageM from './components/Videos/indexM.vue'
import ToysPageM from './components/Toys/indexM.vue'
import MembersPageM from './components/Members/indexM.vue'

import customTheme from './naive-ui-theme-overrides.json'

import { isMobile } from './utils/isMobile';
</script>

<template>
  <n-config-provider :theme-overrides="customTheme">
    <div v-if="isMobile == false">
      <Header h-8vh />
      <div class="root" max-w-1440px mx-auto px-16>
        <TopPage h-92vh />
        <div my-15vh>
          <RoutesPage />
        </div>
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
    </div>
    <div v-else>
      <HeaderM h-7vh />
      <div class="root mobile">
        <TopPageM h-93vh />
        <div my-3vh>
          <RoutesPageM />
        </div>
        <div my-3vh>
          <NewsPageM />
        </div>
        <div my-3vh>
          <VideosPageM />
        </div>
        <div my-3vh>
          <ToysPageM />
        </div>
        <div my-3vh>
          <MembersPageM />
        </div>
      </div>
      <Footer />
    </div>
  </n-config-provider>
</template>
