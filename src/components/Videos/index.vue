<script setup lang="ts">
import BigTitle from '../BigTitle.vue';
import VideoCard from './VideoCard.vue';

import videosData from '../../Videos'
</script>

<template>
  <div w-full grid grid-cols-3 grid-rows-2 gap-4>
    <VideoCard
      :title="videosData.leftTop.title"
      :brief="videosData.leftTop.brief"
      :cover="videosData.leftTop.cover"
      :link="videosData.leftTop.link"
    />
    <VideoCard
      :title="videosData.rightTop.title"
      :brief="videosData.rightTop.brief"
      :cover="videosData.rightTop.cover"
      :link="videosData.rightTop.link"
    />
    <VideoCard
      main
      grid-row-span-2
      :title="videosData.main.title"
      :brief="videosData.main.brief"
      :cover="videosData.main.cover"
      :link="videosData.main.link"
    />
    <div shadow-md bg-bg b-rd-4 flex justify-between items-center>
      <BigTitle main="动画" sub="作品" />
    </div>
    <VideoCard
      :title="videosData.rightBottom.title"
      :brief="videosData.rightBottom.brief"
      :cover="videosData.rightBottom.cover"
      :link="videosData.rightBottom.link"
    />
  </div>
</template>
