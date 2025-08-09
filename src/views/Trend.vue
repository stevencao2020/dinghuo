<template>
  <main style="padding:24px">
    <h2 style="margin-bottom:16px;">运势曲线 · 示例</h2>
    <div ref="chartRef" style="width:100%;height:360px;"></div>
  </main>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, onBeforeUnmount, ref } from 'vue'

const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

function render() {
  if (!chartRef.value) return
  chart = echarts.init(chartRef.value)
  chart.setOption({
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: ['一','二','三','四','五','六','日'] },
    yAxis: { type: 'value', name: '评分' },
    series: [{ name: '本周运势', type: 'line', smooth: true, data: [65,72,70,78,85,88,80] }]
  })
  window.addEventListener('resize', handleResize)
}
function handleResize() { chart && chart.resize() }

onMounted(render)
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  chart && chart.dispose()
})
</script>
