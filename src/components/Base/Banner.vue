<script setup lang="ts">
import { NCarousel } from 'naive-ui'

import bannerData from './Banner'
</script>

<template>
  <div rounded-4 overflow-hidden shadow-md>
    <NCarousel autoplay draggable show-arrow>
      <a v-for="(data, i) in bannerData" :key="i" :href="data.link" target="_blank" aspect-ratio="1280/450" block>
        <img :src="data.cover" alt="Banner" w-full h-full object-cover block>
      </a>
    </NCarousel>
  </div>
</template>
