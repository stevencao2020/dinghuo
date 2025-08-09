<!-- src/views/Calendar.vue -->
<template>
  <section>
    <h2>万年历</h2>

    <label>
      选择日期：
      <input type="date" v-model="date" />
    </label>

    <div v-if="info" style="margin-top:12px; line-height:1.8;">
      <div>公历：{{ info.date }}</div>
      <div>农历：{{ info.lunar }}</div>
      <div>干支：{{ info.ganzhi.year }}年 {{ info.ganzhi.month }}月 {{ info.ganzhi.day }}日</div>
      <div>生肖：{{ info.animal }}</div>
      <div>节气：{{ info.term || '—' }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import dayjs from 'dayjs'
import { getDayInfo, type DayInfo } from '../utils/calendar'

const date = ref(dayjs().format('YYYY-MM-DD'))
const info = ref<DayInfo | null>(null)

watch(
  date,
  (d) => {
    info.value = getDayInfo(d)
  },
  { immediate: true }
)
</script>

<style scoped>
h2 { margin: 12px 0; }
label { display: inline-flex; gap: 8px; align-items: center; }
</style>