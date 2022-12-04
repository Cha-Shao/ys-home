<script setup lang="ts">
import { NAvatar } from 'naive-ui';

const props = defineProps<{
  name: string
  brief: string
  content: string
  avatar: string
  link?: string
}>()
</script>

<template>
  <a v-if="props.link" :href="props.link" target="_blank" block>
    <div pa-6 bg-bg b-rd-4 relative>
      <div flex mb-2>
        <n-avatar round :size="60" :src="props.avatar" mr-4 />
        <div flex items-center>
          <div>
            <h1 text-lg>{{ props.name }}</h1>
            <p color-coolgray>{{ props.brief }}</p>
          </div>
        </div>
      </div>
      <p w-full break-all>{{ props.content }}</p>
      <div i-ri:external-link-line absolute right-3 top-3 color-coolgray />
    </div>
  </a>
  <div v-else pa-6 bg-bg b-rd-4 relative>
      <div flex mb-2>
        <n-avatar round :size="60" :src="props.avatar" mr-4 />
        <div flex items-center>
          <div>
            <h1 text-lg>{{ props.name }}</h1>
            <p color-coolgray>{{ props.brief }}</p>
          </div>
        </div>
      </div>
      <p w-full break-all>{{ props.content }}</p>
    </div>
</template>
