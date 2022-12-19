<script setup lang="ts">
import BigTitle from '../../Base/BigTitle.vue'

import modelIcon from '../../../assets/icon/model.png'
import textureIcon from '../../../assets/icon/texture.png'
import toiletIcon from '../../../assets/icon/toilet.png'
import mapIcon from '../../../assets/icon/map.png'

const routes = [{
  title: '浏览模型',
  icon: modelIcon,
  link: '#',
}, {
  title: '浏览纹理',
  icon: textureIcon,
  link: '#',
}, {
  title: '浏览地图',
  icon: mapIcon,
  link: '#',
}, {
  title: '前往厕所',
  icon: toiletIcon,
  link: '#',
}]
</script>

<template>
  <div>
    <BigTitle main="映素" sub="作坊" mobile mb-6 />
    <div flex overflow-x-scroll pb-2>
      <a v-for="(data, i) in routes" :key="i" :href="data.link" target="_blank" m-2>
        <div w-60 h-75 bg-bg b-rd-4 shadow-md flex flex-col justify-center items-center>
          <img :src="data.icon" alt="Icon" mb-4>
          <h3 mt-4 h-sm>{{ data.title }}</h3>
        </div>
      </a>
    </div>
  </div>
</template>
