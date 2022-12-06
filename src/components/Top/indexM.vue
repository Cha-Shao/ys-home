<script setup lang="ts">
const content = `因为年轻，什么都敢于尝试
因为年轻 我们不怕碰壁
因为年轻，我们敢为自己爱好奋斗， 我们可能奔向那个未来，也可能因此堕入深渊，
但我们从未害怕过。`
</script>

<template>
  <div flex flex-col justify-center items-center text-center relative mx-2>
    <img src="/favicon-small.svg" alt="YingSu" w="75%" mb-8>
    <h1 text-5xl>晚点再想（）</h1>
    <p text-md mt-4 op-75 whitespace-pre-wrap>
      {{ content }}
    </p>

    <div absolute bottom-0 left="50%" translate-x="-50%" bottom-4 op-50>
      <div i-ri:arrow-down-s-line />
      <div i-ri:arrow-down-s-line mt--3 />
    </div>
  </div>
</template>
