<script setup lang="ts">
import BigTitle from '../../Base/BigTitle.vue'
import videosData from '../../Base/Videos'
import VideoCard from './VideoCard.vue'
</script>

<template>
  <div w-full grid grid-cols-10 grid-rows-2 gap-4>
    <VideoCard
      v-for="(data, i) in videosData.normal"
      :key="i"
      col-span-3
      :title="data.title"
      :brief="data.brief"
      :cover="data.cover"
      :link="data.link"
    />
    <VideoCard
      col-span-4 col-start-7
      row-span-2 row-start-1
      main
      :title="videosData.main.title"
      :brief="videosData.main.brief"
      :cover="videosData.main.cover"
      :link="videosData.main.link"
    />
    <div shadow-md bg-bg rounded-4 flex justify-between items-center col-span-3>
      <BigTitle main="动画" sub="作品" />
    </div>
  </div>
</template>
