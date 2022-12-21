<script setup lang="ts">
import { useRoute } from 'vue-router'
import YButton from '../Base/YButton.vue'

import { confirmAccount, resultText } from '../../api/confirmAccount'

const route = useRoute()
const token = route.query.token

confirmAccount(token)
</script>

<template>
  <div pa-7 rounded-4 bg-bg shadow-md min-w-120>
    <div>
      <p text-2xl font-700 mb-2>
        {{ resultText.title }}
      </p>
      <p>{{ resultText.msg }}</p>
      <a v-if="resultText.title !== '错误'" href="/sso/login" mt-4 inline-block>
        <YButton primary>前往登录</YButton>
      </a>
    </div>
  </div>
</template>
