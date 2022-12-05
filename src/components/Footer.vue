<script lang="ts" setup>
const links = [{
  title: 'GitHub',
  icon: 'i-ri:github-line',
  to: 'https://github.com/Cha-Shao/ys-home',
}, {
  title: 'QQ',
  icon: 'i-ri:qq-line',
  to: '/',
},]
</script>

<template>
  <div pa-4 b-t-1 b-t-logo bg-bg>
    <div px-4 py-2 justify-between>
      <div flex flex-col items-start>
        <img src="/favicon.svg" alt="Logo" h-16>
        <p mb-2>
          我是一个一个一个脚注啊啊啊
        </p>
        <div flex gap-2>
          <a v-for="(data, i) in links" :key="i" :href="data.to" :title="data.title" icon-btn pa-1 bg-pbg
            b-rd-99>
            <div :class="data.icon" />
          </a>
        </div>
      </div>
    </div>
    <div px-4 py-2 flex justify-between>
      <p>© Copyright {{ new Date().getFullYear() }} YingSu</p>
      <p>#FF8729</p>
    </div>
  </div>
</template>
