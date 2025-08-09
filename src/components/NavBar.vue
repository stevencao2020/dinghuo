<template>
  <header class="nav">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/trend">运势曲线</RouterLink>
    <RouterLink to="/profile">八字档案</RouterLink>
    <RouterLink to="/calendar">万年历</RouterLink>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav { display:flex; gap:16px; padding:12px 20px; border-bottom:1px solid #eee; }
</style>