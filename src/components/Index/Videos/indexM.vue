<script setup lang="ts">
import BigTitle from '../../Base/BigTitle.vue'
import videosData from '../../Base/Videos'
import VideoCard from './VideoCard.vue'
</script>

<template>
  <div>
    <BigTitle main="动画" sub="作品" mobile mb-6 />
    <div flex overflow-x-scroll pb-2>
      <VideoCard
        v-for="(data, i) in videosData" :key="i"
        shrink-0
        mobile
        w-60
        ma-2
        :title="data.title"
        :brief="data.brief"
        :cover="data.cover"
        :link="data.link"
      />
    </div>
  </div>
</template>
