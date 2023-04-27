<template>
  <v-container class="d-flex flex-column justify-center align-center h-screen">
    <h1 class="text-h1 text-center temp-text-logo">BEAT</h1>
    <nav-bar></nav-bar>
    <org-list v-if="showOrgs"></org-list>
    <op-list v-else-if="showOps"></op-list>
    <account-list v-else-if="showAccounts"></account-list>
    <review-panel v-else-if="showReview"></review-panel>
    <span v-else>Unrecognized Dashboard View</span>
  </v-container>
</template>

<script setup lang='ts'>
  import { computed } from 'vue'
  import { DashboardView } from '@/assets/enums'

  //Components
  import NavBar from '@/components/dashboard/NavBar.vue'
  import OrgList from '@/components/dashboard/OrganizationList.vue'
  import OpList from '@/components/dashboard/OperationList.vue'
  import AccountList from '@/components/dashboard/AccountList.vue'
  import ReviewPanel from '@/components/dashboard/ReviewPanel.vue'
  
  //Initialize store
  import { useAppStore } from '@/store/app'
  const store = useAppStore()

  //Variables for cleaner v-if's
  const showOrgs      = computed(() => store.getCurrentDashboardView === DashboardView.Organizations)
  const showOps       = computed(() => store.getCurrentDashboardView === DashboardView.Operations)
  const showAccounts  = computed(() => store.getCurrentDashboardView === DashboardView.Accounts)
  const showReview    = computed(() => store.getCurrentDashboardView === DashboardView.Review)
  const showResult    = computed(() => store.getCurrentDashboardView === DashboardView.Result)
</script>

<style scoped>
  .temp-text-logo {
    letter-spacing: 20px !important;
  }
</style>