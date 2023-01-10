<script setup lang="ts">
import { authorizeData } from '../../api/getAuthorizes'
import emptyIcon from '../../assets/icon/empty.svg'

const removeAuthorize = (appID: string) => {
  console.error(appID)
}
</script>

<template>
  <div pa-7 rounded-4 bg-bg shadow-md w="3/4" max-w-100>
    <p text-2xl font-700>
      管理授权登录
    </p>
    <div v-if="!authorizeData" h-40 flex>
      <div m-auto i-ri:loader-5-line text-2xl text-logo animate-spin />
    </div>
    <div v-else>
      <div v-if="authorizeData.authorzes === null" text-coolgray py-6>
        <div
          w-24 h-24
          m-auto
          color-inherit
          :style="{
            WebkitMask: `url(${emptyIcon}) no-repeat`,
            WebkitMaskSize: '100% 100%',
            backgroundColor: 'currentColor',
          }"
        />
        <p
          text-center
        >
          无授权过的应用
        </p>
      </div>
      <div v-else>
        {{ authorizeData }}
      </div>
    </div>
  </div>
</template>
