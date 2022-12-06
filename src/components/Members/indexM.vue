<script setup lang="ts">
import BigTitle from '../BigTitle.vue';
import membersData from '../../Members'
import MembersCard from './MembersCard.vue';

import lodash from 'lodash'
import { ref } from 'vue';

const membersDataM = lodash.shuffle(lodash.concat(membersData[0], membersData[1], membersData[2]))

const showMember = ref(membersDataM[0].name)
</script>

<template>
  <div>
    <BigTitle main="映素" sub="成员" mobile mb-6 />
    <div flex overflow-x-scroll px-2 mb-4>
      <img v-for="(data, i) in membersDataM" :key="i" :src="data.avatar" alt="Avatar" mr-4 b-rd-99 w-15 h-15 block shrink-0 @click="showMember = membersDataM[i].name">
    </div>
    <MembersCard
      mx-2
      :name="lodash.filter(membersDataM, {'name': showMember})[0].name"
      :brief="lodash.filter(membersDataM, {'name': showMember})[0].brief"
      :content="lodash.filter(membersDataM, {'name': showMember})[0].content"
      :avatar="lodash.filter(membersDataM, {'name': showMember})[0].avatar"
      :link="lodash.filter(membersDataM, {'name': showMember})[0].link"
    />
  </div>
</template>
