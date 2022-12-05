<script setup lang="ts">
import { NCarousel } from "naive-ui";

import bannerData from '../Banner'
</script>

<template>
  <div b-rd-4 overflow-hidden shadow-md>
    <n-carousel autoplay draggable show-arrow>
      <a v-for="(data, i) in bannerData" :href="data.link" target="_blank" aspect-ratio="1280/450" block>
        <img :src="data.cover" alt="Banner" w-full h-full object-cover block>
      </a>
    </n-carousel>
  </div>
</template>
