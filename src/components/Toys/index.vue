<script setup lang="ts">
import BigTitle from '../BigTitle.vue';
import ToysCard from './ToysCard.vue';

import toysData from '../../Toys'
</script>

<template>
  <div w-full grid grid-cols-3 grid-rows-2 gap-4>
    <ToysCard
      main
      grid-row-span-2
      :cover="toysData.main"
    />
    <ToysCard
      v-for="(data, i) in toysData.sub"
      :cover="data"
    />
    <div shadow-md bg-bg b-rd-4 flex justify-between items-center>
      <BigTitle main="周边" sub="研发" />
    </div>
  </div>
</template>
