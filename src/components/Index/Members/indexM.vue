<script setup lang="ts">
import lodash from 'lodash'
import { ref } from 'vue'
import BigTitle from '../../Base/BigTitle.vue'
import membersData from '../../Base/Members'
import MembersCard from './MembersCard.vue'

const membersDataM = lodash.shuffle(membersData)

const showMember = ref(0)
</script>

<template>
  <div>
    <BigTitle main="映素" sub="成员" mobile mb-6 />
    <div flex overflow-x-scroll px-2 mb-4>
      <img v-for="(data, i) in membersDataM" :key="i" :src="data.avatar" alt="Avatar" mr-4 b-rd-99 w-15 h-15 block shrink-0 @click="showMember = i">
    </div>
    <div v-for="(data, i) in membersDataM" :key="i">
      <MembersCard
        v-if="i === showMember"
        mx-2
        :name="data.name"
        :brief="data.brief"
        :content="data.content"
        :avatar="data.avatar"
        :link="data.link"
      />
    </div>
  </div>
</template>
