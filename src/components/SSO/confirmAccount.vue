<script setup lang="ts">
import { useRoute } from 'vue-router'
import YButton from '../Base/YButton.vue'

const route = useRoute()
const token = route.query.token
</script>

<template>
  <div pa-7 b-rd-4 bg-bg shadow-md min-w-120>
    <!-- 没有参数 -->
    <div v-if="token == null">
      <p text-2xl font-700 mb-2>
        错误
      </p>
      <p>未输入参数</p>
    </div>
    <!-- 成功的 -->
    <div v-else>
      <p text-2xl font-700 mb-2>
        验证邮件地址成功
      </p>
      <p>已成功注册！🎉</p>
      <a href="/sso/login" mt-4 inline-block>
        <YButton primary>前往登录</YButton>
      </a>
    </div>
  </div>
</template>
