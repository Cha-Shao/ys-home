<script setup lang="ts">
const content = `我们已向您填写的电子邮箱地址发送了一封邮件
请验证邮件地址以启用账户`
</script>

<template>
  <div pa-7 b-rd-4 bg-bg shadow-md min-w-120>
    <p text-2xl font-700 mb-2>
      需要验证邮件地址
    </p>
    <p break-all whitespace-pre-wrap>
      {{ content }}
    </p>
    <a href="/contact" target="_blank" color-logo mt-6 block>未收到邮件?联系我们的支持小组</a>
  </div>
</template>
