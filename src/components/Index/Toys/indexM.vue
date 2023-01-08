<script setup lang="ts">
import BigTitle from '../../Base/BigTitle.vue'
import toysData from '../../Base/Toys'
import ToysCard from './ToysCard.vue'
</script>

<template>
  <div>
    <BigTitle main="周边" sub="研发" mobile mb-6 />
    <div flex overflow-x-scroll pb-2>
      <ToysCard v-for="(data, i) in toysData" :key="i" grid-col-span-3 :cover="data" mx-2 h-75 w-60 shrink-0 />
    </div>
  </div>
</template>
