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
    <BigTitle main="新闻" sub="动态" mb-12 />
    <div rounded-4 shadow-md bg-bg flex h-600px overflow-hidden>
      <div w="1/2" shrink-0>
        <NCarousel show-arrow draggable autoplay>
          <a v-for="(data, i) in newsData.carousel" :key="i" :href="data.link" target="_blank">
            <img :src="data.img" alt="Carousel Image" w-full h-full object-cover>
          </a>
          <template #dots="{ total, currentIndex, to }">
            <ul class="custom-dots">
              <li
                v-for="index of total" :key="index" :class="{ ['is-active']: currentIndex === index - 1 }"
                @click="to(index - 1)"
              />
            </ul>
          </template>
        </NCarousel>
      </div>
      <div w="1/2" py-4 px-7>
        <NTabs type="line" animated size="large" mb-2>
          <NTabPane name="latest" tab="最新">
            <NewsCard
              v-for="(data, i) in latestNews" :key="i" :type="data.type" :content="data.contnet"
              :date="timeAnalysis(data.time)" :link="data.link"
            />
          </NTabPane>
          <NTabPane name="news" tab="新闻">
            <NewsCard
              v-for="(data, i) in newsNews" :key="i" :type="data.type" :content="data.contnet"
              :date="timeAnalysis(data.time)" :link="data.link"
            />
          </NTabPane>
          <NTabPane name="active" tab="活动">
            <NewsCard
              v-for="(data, i) in activeNews" :key="i" :type="data.type" :content="data.contnet"
              :date="timeAnalysis(data.time)" :link="data.link"
            />
          </NTabPane>
          <NTabPane name="announce" tab="公告">
            <NewsCard
              v-for="(data, i) in announceNews" :key="i" :type="data.type" :content="data.contnet"
              :date="timeAnalysis(data.time)" :link="data.link"
            />
          </NTabPane>
        </NTabs>
        <a href="https://store.elfmc.com/news" target="_blank" float-right>
          <YButton primary>查看更多</YButton>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-dots {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  height: 16px;
  width: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  height: 24px;
  background: #fff;
}
</style>
