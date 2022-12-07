<script setup lang="ts">
import lodash from 'lodash'
import BigTitle from '../BigTitle.vue'
import _membersData from '../../Members'
import MembersCard from './MembersCard.vue'

const membersData = lodash.shuffle(_membersData)

const defaultRowLength = Math.floor(membersData.length / 3)
const rows: number[] = []
for (let i = 0; i < 3; i++)
  rows[i] = defaultRowLength

switch (membersData.length % 3) {
  case 1:
    rows[1] += 1
    break
  case 2:
    rows[0] += 1
    rows[1] += 1
    break
  case 3:
    break
}
</script>

<template>
  <div>
    <BigTitle main="映素" sub="成员" mb-12 />
    <div flex justify-between>
      <div w="32.5%">
        <MembersCard
          v-for="(data, i) in membersData.slice(0, rows[0])" :key="i" mb-4
          :name="data.name"
          :brief="data.brief"
          :content="data.content"
          :avatar="data.avatar"
          :link="data.link"
        />
      </div>
      <div w="32.5%">
        <MembersCard
          v-for="(data, i) in membersData.slice(rows[0], rows[0] + rows[1])" :key="i" mb-4
          :name="data.name"
          :brief="data.brief"
          :content="data.content"
          :avatar="data.avatar"
          :link="data.link"
        />
      </div>
      <div w="32.5%">
        <MembersCard
          v-for="(data, i) in membersData.slice(rows[0] + rows[1], membersData.length)" :key="i" mb-4
          :name="data.name"
          :brief="data.brief"
          :content="data.content"
          :avatar="data.avatar"
          :link="data.link"
        />
      </div>
    </div>
  </div>
</template>
