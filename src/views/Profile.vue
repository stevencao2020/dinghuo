<!-- src/views/Profile.vue -->
<template>
  <main style="padding:24px;max-width:640px">
    <h2 style="margin-bottom:16px;">八字档案 · 最小表单</h2>

    <form @submit.prevent="onSubmit" style="display:grid;gap:12px;">
      <label>姓名
        <input v-model="form.name" required placeholder="张三" />
      </label>

      <label>性别
        <select v-model="form.gender" required>
          <option value="">请选择</option>
          <option value="male">男</option>
          <option value="female">女</option>
        </select>
      </label>

      <label>出生日期
        <input type="date" v-model="form.birthDate" required />
      </label>

      <label>出生时间
        <input type="time" v-model="form.birthTime" required />
      </label>

      <label>出生地（先用文字占位）
        <input v-model="form.birthplace" placeholder="北京市 海淀区" />
      </label>

      <button type="submit">保存</button>
    </form>

    <p style="margin-top:12px;color:#666;">数据将保存在本机浏览器，用于后续万年历与运势计算。</p>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useAppStore, type Profile } from '../store'

const store = useAppStore()
const form = reactive<Profile>({ ...store.profile })

function onSubmit() {
  store.saveProfile({ ...form })
  alert('已保存 ✅')
}
</script>

<style scoped>
input, select, button { padding:8px; font-size:14px; }
label { display:grid; gap:6px; }
</style>