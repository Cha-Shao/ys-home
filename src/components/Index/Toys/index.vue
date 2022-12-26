<script setup lang="ts">
import BigTitle from '../../Base/BigTitle.vue'
import toysData from '../../Base/Toys'
import ToysCard from './ToysCard.vue'
</script>

<template>
  <div w-full grid grid-cols-10 grid-rows-2 gap-4>
    <ToysCard
      main
      h-full
      col-span-4
      row-span-2
      :cover="toysData.main"
    />
    <ToysCard
      v-for="(data, i) in toysData.normal"
      :key="i"
      col-span-3
      h-full
      :cover="data"
    />
    <div shadow-md bg-bg rounded-4 col-span-3 flex justify-between items-center>
      <BigTitle main="周边" sub="研发" />
    </div>
  </div>
</template>
