<script setup lang="ts">
import { NAutoComplete, NInput } from 'naive-ui'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'

import register from '../../api/register'
import YButton from '../Base/YButton.vue'

const inputUsername: Ref<string> = ref('')
const inputEmail: Ref<string> = ref('')
const inputPassword: Ref<string> = ref('')
const confirmPassword: Ref<string> = ref('')
</script>

<template>
  <div flex flex-col flex-gap-y-2 w="3/4" max-w-100 bg-bg rounded-4 pa-7 shadow-md relative>
    <a href="/sso/login" absolute right--3 top-7>
      <YButton primary size="small">
        登录
      </YButton>
    </a>
    <p text-2xl font-700 mb-2>
      注册映素账号
    </p>
    <div class="w-full flex gap-x-4 items-center">
      <span class="shrink-0">用户名</span>
      <NInput
        v-model:value="inputUsername"
        type="text"
        placeholder="仅支持英文+数字"
        :maxlength="16"
      />
    </div>
    <p text-3 color-coolgray>
      你的主页链接将是space/{{ inputUsername }}
    </p>
    <div class="w-full flex gap-x-4 items-center">
      <span class="shrink-0">邮箱</span>
      <NInput
        v-model:value="inputEmail"
        type="text"
        placeholder="邮箱"
      />
    </div>
    <div class="w-full flex gap-x-4 items-center">
      <span class="shrink-0">密码</span>
      <NInput
        v-model:value="inputPassword"
        type="password"
        show-password-on="mousedown"
        placeholder="密码"
        :maxlength="16"
        @keyup.enter="register(inputUsername, inputEmail, inputPassword, confirmPassword)"
      />
    </div>
    <div class="w-full flex gap-x-4 items-center">
      <span class="shrink-0">确认密码</span>
      <NInput
        v-model:value="confirmPassword"
        type="password"
        show-password-on="mousedown"
        placeholder="密码"
        :maxlength="16"
        @keyup.enter="register(inputUsername, inputEmail, inputPassword, confirmPassword)"
      />
    </div>
    <YButton primary w-full mt-2 @click="register(inputUsername, inputEmail, inputPassword, confirmPassword)">
      注册
    </YButton>
    <p text-3 text-center>
      登录或完成注册即代表你同意<a href="https://store.elfmc.com/privacy-policy" target="_blank" text-logo>用户协议</a>和<a href="https://store.elfmc.com/privacy-policy" target="_blank" text-logo>隐私政策</a>
    </p>
  </div>
</template>
