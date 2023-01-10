<script setup lang="ts">
import { useRoute } from 'vue-router'
import { loginStatus } from '../../api/checkLogin'
import { appInfo, authorizedLogin } from '../../api/authorizedLogin'
import YButton from '../Base/YButton.vue'

const route = useRoute()

const app_id = route.query.app_id
authorizedLogin.getAppInfo(String(app_id))
const redirect_uri = route.query.redirect_uri

const token = localStorage.getItem('token')
if (token === null) {
  window.$message.error('未登录')
  setTimeout(() => {
    window.location.href = '/'
  }, 1000)
}

const authorize = () => {
  if (app_id && token) {
    new Promise((resolve, reject) => {
      const authorizeToken = authorizedLogin.getToken(String(app_id), token)
      resolve(authorizeToken)
    }).then(
      (authorizeToken) => {
        if (authorizeToken)
          window.location.href = `${redirect_uri}?token=${authorizeToken}`
        else
          window.$message.error('获取不到授权码')
      },
    )
  }
  else { window.$message.error('没有参数') }
}

const reject = () => {
  window.close()
}

const canDo = [
  '获得您的用户名和邮件地址',
]
const cantDo = [
  '清理你堵住的马桶',
  '做个巧克力蛋糕',
  '为你讲睡前故事',
]
</script>

<template>
  <div flex flex-col flex-gap-y-2 w="3/4" max-w-100 bg-bg rounded-4 pa-7 shadow-md>
    <p text-2xl font-700 mb-2>
      授权登录
    </p>
    <div v-if="appInfo.status === null">
      <div h-20 rounded-4 bg-gray-2 animate-pulse mb-4 />
      <div h-6 rounded-2 bg-gray-2 animate-pulse mb-2 />
      <div h-6 rounded-2 bg-gray-2 animate-pulse />
    </div>
    <div v-else-if="appInfo.status">
      <p>以 <span color-logo>{{ loginStatus.username }}</span> 身份授权登录到：</p>
      <div bg-darker rounded-4 pa-2 flex items-center mb-4>
        <img :src="appInfo.app_avatar" alt="Avatar" w-16 h-16 rounded-2 mr-4>
        <p>{{ appInfo.app_name }}</p>
      </div>
      <div>
        <p text-3>
          允许后{{ appInfo.app_name }}将可以：
        </p>
        <div v-for="(data, i) in canDo" :key="i" flex items-center mb-1>
          <div w-2 h-2 rounded-99 bg-green mr-2 />
          {{ data }}
        </div>
        <div flex items-center mb-1>
          <div w-2 h-2 rounded-99 bg-gray-4 mr-2 />
          {{ cantDo[Math.floor(Math.random() * cantDo.length)] }}
        </div>
      </div>
      <div flex gap-2 mt-4>
        <YButton gray size="large" w="1/2" @click="reject()">
          拒绝
        </YButton>
        <YButton size="large" primary w="1/2" @click="authorize()">
          授权登录
        </YButton>
      </div>
    </div>
  </div>
</template>
