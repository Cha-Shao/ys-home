<script setup lang="ts">
import BigTitle from '../../Base/BigTitle.vue'

import modelIcon from '../../../assets/icon/model_animation.png'
import textureIcon from '../../../assets/icon/texture_animation.png'
import toiletIcon from '../../../assets/icon/toilet_animation.png'
import mapIcon from '../../../assets/icon/map_animation.png'
import RoutesCard from './RoutesCard.vue'

const routes = [{
  title: '浏览模型',
  icon: modelIcon,
  link: 'https://art.mmixel.com/classify/model',
}, {
  title: '浏览纹理',
  icon: textureIcon,
  link: 'https://art.mmixel.com/classify/texture',
}, {
  title: '前往厕所',
  icon: toiletIcon,
  link: 'https://art.mmixel.com/',
}, {
  title: '浏览地图',
  icon: mapIcon,
  link: 'https://art.mmixel.com/classify/map',
}]
</script>

<template>
  <div grid grid-cols-10 grid-rows-10 gap-4 h-160>
    <RoutesCard
      v-for="(data, i) in routes"
      :key="i"
      :class="i % 2 === 0 ? 'row-span-6' : 'row-span-4'"
      col-span-3
      :title="data.title"
      :icon="data.icon"
      :link="data.link"
    />
    <div
      rounded-4
      bg-bg
      shadow-md
      col-span-4 col-start-4
      row-span-10 row-start-1
      flex
      flex-col
      justify-center items-center
    >
      <BigTitle main="映素" sub="作坊" />
    </div>
  </div>
</template>
