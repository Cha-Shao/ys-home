<script setup lang="ts">
import BigTitle from '../BigTitle.vue';
import VideoCard from './VideoCard.vue';

import videosData from '../../Videos'

const videosDataM = [
  videosData.main,
  videosData.leftTop,
  videosData.rightTop,
  videosData.rightBottom
]
</script>

<template>
  <div>
    <BigTitle main="动画" sub="作品" mobile mb-6 />
    <div flex overflow-x-scroll pb-2>
      <VideoCard v-for="(data, i) in videosDataM" :key="i"
        shrink-0
        mobile
        w-60
        ma-2
        grid-col-span-3
        :title="data.title"
        :brief="data.brief"
        :cover="data.cover"
        :link="data.link"
      />
    </div>
  </div>
</template>
