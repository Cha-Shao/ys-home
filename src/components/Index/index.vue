<script setup lang="ts">
// 检测是否手机
import { isMobile } from '../../utils/isMobile'
// 手机才有的侧边栏
import { menuStatus } from '../../utils/showMenu'
// PC
import Header from '../Base/Header.vue'
import BannerPage from '../Base/Banner.vue'
import Footer from '../Base/Footer.vue'
import HeaderM from '../Base/HeaderM.vue'
import MenuM from '../Base/MenuM.vue'
import TopPage from './Top/index.vue'
import RoutesPage from './Routes/index.vue'
import NewsPage from './News/index.vue'
import VideosPage from './Videos/index.vue'
import ToysPage from './Toys/index.vue'
import MembersPage from './Members/index.vue'

// Mobile
import TopPageM from './Top/indexM.vue'
import RoutesPageM from './Routes/indexM.vue'
import NewsPageM from './News/indexM.vue'
import VideosPageM from './Videos/indexM.vue'
import ToysPageM from './Toys/indexM.vue'
import MembersPageM from './Members/indexM.vue'
</script>

<template>
  <div v-if="isMobile === false">
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
    <Transition name="fade">
      <MenuM v-if="menuStatus" />
    </Transition>
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
</template>
