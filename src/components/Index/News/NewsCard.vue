<script setup lang="ts">
const props = defineProps<{
  type: string
  content: string
  date: string
  link: string
  mobile?: boolean
}>()
</script>

<template>
  <a
    :href="props.link" target="_blank" px-4 bg-pbg block mb-1 flex items-center
    :class="[props.mobile ? 'h-12 rounded-2' : 'py-6 rounded-4']"
  >
    <div mr-4 color-white shrink-0>
      <div v-if="props.type === 'news'" bg-hex-45f5a9 px-2 py-1 rounded-1>
        <p text-3>新闻</p>
      </div>
      <div v-else-if="props.type === 'active'" bg-hex-00b3fd px-2 py-1 rounded-1>
        <p text-3>活动</p>
      </div>
      <div v-else bg-logo px-2 py-1 rounded-1>
        <p text-3>公告</p>
      </div>
    </div>
    <p flex-grow line-clamp-1>{{ props.content }}</p>
    <p op-50 shrink-0>{{ date }}</p>
  </a>
</template>
