<template>
  <v-container class="d-flex flex-column justify-center align-center h-screen">
    <nav-bar></nav-bar>
    <!-- <org-list></org-list> -->
    <!-- <op-list></op-list> -->
    <account-list></account-list>
  </v-container>
</template>

<script setup lang='ts'>
  import NavBar from '@/components/dashboard/NavBar.vue'
  // import OrgList from '@/components/dashboard/OrganizationList.vue'
  // import OpList from '@/components/dashboard/OperationList.vue'
  import AccountList from '@/components/dashboard/AccountList.vue'
</script>

<style scoped>
  
</style>