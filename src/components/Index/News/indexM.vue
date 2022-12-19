<script setup lang="ts">
import { NCarousel, NTabPane, NTabs } from 'naive-ui'
import lodash from 'lodash'
import YButton from '../../Base/YButton.vue'
import BigTitle from '../../Base/BigTitle.vue'

import { timeAnalysis } from '../../../utils/timeAnalysis'

// 公告处理
import newsData from '../../Base/News'
import NewsCard from './NewsCard.vue'
const news = newsData.news
const latestNews = lodash.orderBy(news, 'time', 'desc').slice(0, 6)
const newsNews = lodash.filter(news, { type: 'news' }).slice(0, 6)
const activeNews = lodash.filter(news, { type: 'active' }).slice(0, 6)
const announceNews = lodash.filter(news, { type: 'announce' }).slice(0, 6)
</script>

<template>
  <div>
    <BigTitle main="新闻" sub="动态" mobile mb-6 />
    <div bg-bg b-rd-4 shadow-md mx-2 overflow-hidden>
      <NCarousel draggable autoplay>
        <a v-for="(data, i) in newsData.carousel" :key="i" :href="data.link" target="_blank">
          <img :src="data.img" alt="Carousel Image" w-full h-64 object-cover>
        </a>
      </NCarousel>
      <div px-2 pb-2>
        <NTabs type="line" animated size="large" justify-content="space-evenly" mb-2>
          <NTabPane name="latest" tab="最新">
            <NewsCard
              v-for="(data, i) in latestNews" :key="i" :type="data.type" :content="data.contnet"
              :date="timeAnalysis(data.time)" :link="data.link" mobile
            />
          </NTabPane>
          <NTabPane name="news" tab="新闻">
            <NewsCard
              v-for="(data, i) in newsNews" :key="i" :type="data.type" :content="data.contnet"
              :date="timeAnalysis(data.time)" :link="data.link" mobile
            />
          </NTabPane>
          <NTabPane name="active" tab="活动">
            <NewsCard
              v-for="(data, i) in activeNews" :key="i" :type="data.type" :content="data.contnet"
              :date="timeAnalysis(data.time)" :link="data.link" mobile
            />
          </NTabPane>
          <NTabPane name="announce" tab="公告">
            <NewsCard
              v-for="(data, i) in announceNews" :key="i" :type="data.type" :content="data.contnet"
              :date="timeAnalysis(data.time)" :link="data.link" mobile
            />
          </NTabPane>
        </NTabs>
        <a href="https://store.elfmc.com/news" target="_blank">
          <YButton primary w-full>查看更多</YButton>
        </a>
      </div>
    </div>
  </div>
</template>
