<script setup lang="ts">
import BigTitle from '../BigTitle.vue';
import membersData from '../../Members'
import MembersCard from './MembersCard.vue';

import lodash from 'lodash'
</script>

<template>
  <div>
    <BigTitle main="映素" sub="成员" mb-12 />
    <div flex justify-between>
      <div v-for="(rowData, i) in membersData" :key="i" w="32.5%">
        <MembersCard v-for="(data, j) in lodash.shuffle(rowData)" :key="j" mb-4
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
