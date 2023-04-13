<template>
  <div>
    <dashboard-nav></dashboard-nav>
  </div>
</template>

<script setup lang='ts'>
  import { onMounted } from 'vue';
import DashboardNav from '../components/nav/DashboardNav.vue'
  
  //tempdata
  import tempOrgs from '@/components/nav/tempOrgs'

  onMounted(() => {
    console.log(tempOrgs)
  })
  
</script>

<style scoped>
  
</style>