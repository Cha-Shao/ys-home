<script setup lang="ts">
import { ref } from 'vue';
import BigTitle from '../BigTitle.vue';

import modelIcon from '../../assets/icon/model_animation.png'
import textureIcon from '../../assets/icon/texture_animation.png'
import toiletIcon from '../../assets/icon/toilet_animation.png'
import mapIcon from '../../assets/icon/map_animation.png'

const iconFrames: any = ref({
  model: 0,
  texture: 0,
  toilet: 0,
  map: 0,
})

const iconAnimation = (to: number, key: string) => {
  for (let i = 0; i < 19; i++) {
    setTimeout(() => {
      iconFrames.value[key] += to * 96
    }, i * 20);
  }
}
</script>

<template>
  <div grid grid-cols-10 grid-rows-10 gap-4 h-160>
    <div cursor-pointer b-rd-4 bg-bg shadow-md grid-col-span-3 grid-row-span-6 flex flex-col justify-center items-center
      @mouseenter="iconAnimation(-1, 'model')" @mouseleave="iconAnimation(1, 'model')">
      <div class="icon" :style="{
        backgroundImage: `url(${modelIcon})`,
        backgroundPositionY: `${iconFrames['model']}px`
      }" />
      <h3 mt-4 h-sm>浏览模型</h3>
    </div>
    <div b-rd-4 bg-bg shadow-md grid-col-span-4 grid-row-span-10 flex flex-col justify-center items-center>
      <BigTitle main="映素" sub="作坊" />
    </div>
    <div cursor-pointer b-rd-4 bg-bg shadow-md grid-col-span-3 grid-row-span-4 flex flex-col justify-center items-center
      @mouseenter="iconAnimation(-1, 'texture')" @mouseleave="iconAnimation(1, 'texture')">
      <div class="icon" :style="{
        backgroundImage: `url(${textureIcon})`,
        backgroundPositionY: `${iconFrames['texture']}px`
      }" />
      <h3 mt-4 h-sm>浏览纹理</h3>
    </div>
    <div cursor-pointer b-rd-4 bg-bg shadow-md grid-col-span-3 grid-row-span-6 flex flex-col justify-center items-center
      @mouseenter="iconAnimation(-1, 'map')" @mouseleave="iconAnimation(1, 'map')">
      <div class="icon" :style="{
        backgroundImage: `url(${mapIcon})`,
        backgroundPositionY: `${iconFrames['map']}px`
      }" />
      <h3 mt-4 h-sm>浏览地图</h3>
    </div>
    <div cursor-pointer b-rd-4 bg-bg shadow-md grid-col-span-3 grid-row-span-4 flex flex-col justify-center items-center
      @mouseenter="iconAnimation(-1, 'toilet')" @mouseleave="iconAnimation(1, 'toilet')">
      <div class="icon" :style="{
        backgroundImage: `url(${toiletIcon})`,
        backgroundPositionY: `${iconFrames['toilet']}px`
      }" />
      <h3 mt-4 h-sm>前往厕所</h3>
    </div>
  </div>
</template>

<style>
.icon {
  height: 6rem;
  width: 6rem;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100%;
}
</style>