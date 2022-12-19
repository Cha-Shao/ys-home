<script setup lang="ts">
import { NCheckbox, NInput } from 'naive-ui'
import type { Ref } from 'vue'
import { ref } from 'vue'

import login from '../../api/login'
import YButton from '../Base/YButton.vue'

const inputUsername: Ref<string> = ref('')
const inputPassword: Ref<string> = ref('')
const keepLogin: Ref<boolean> = ref(false)
</script>

<template>
  <div mx-auto flex flex-col flex-gap-y-4 w="3/4" max-w-100>
    <p text-2xl font-700>
      登录到映素
    </p>
    <div class="w-full flex gap-x-4 items-center">
      <span class="shrink-0">账号</span>
      <NInput
        v-model:value="inputUsername"
        type="text"
        placeholder="账号"
        :maxlength="16"
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
        @keyup.enter="login(inputUsername, inputPassword, keepLogin)"
      />
    </div>
    <div flex justify-between>
      <NCheckbox v-model:checked="keepLogin">
        保持登录
      </NCheckbox>
      <a href="/lostpassword" target="_blank" color-logo>忘记密码？</a>
    </div>
    <YButton primary w-full @click="login(inputUsername, inputPassword, keepLogin)">
      登录
    </YButton>
    <p text-3 text-center>
      登录或完成注册即代表你同意<a href="https://store.elfmc.com/privacy-policy" target="_blank" text-logo>用户协议</a>和<a href="https://store.elfmc.com/privacy-policy" target="_blank" text-logo>隐私政策</a>
    </p>
  </div>
</template>
