<template>
  <div>
    <dashboard-nav></dashboard-nav>
    <org-section :orgs="tempOrgs" />
  </div>
</template>

<script setup lang='ts'>
  import DashboardNav from '../components/nav/DashboardNav.vue'
  import OrgSection from '@/components/sections/orgs/OrgSection.vue';

  //tempdata
  import tempOrgs from '@/components/nav/tempOrgs'


  
</script>

<style scoped>
  
</style>