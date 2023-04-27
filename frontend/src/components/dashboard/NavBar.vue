<template>
  <v-container class="d-flex align-center justify-center">
    <v-btn @click="changeDashboardView(DashboardView.Organizations)" class="bg-blue-grey-darken-4">Organizations</v-btn>
    <div class="spacer bg-blue-grey-darken-4"></div>
    <v-btn @click="changeDashboardView(DashboardView.Operations)" class="bg-blue-grey-darken-4">Operation</v-btn>
    <div class="spacer bg-blue-grey-darken-4"></div>
    <v-btn @click="changeDashboardView(DashboardView.Accounts)" class="bg-blue-grey-darken-4">Accounts</v-btn>
    <div class="spacer bg-blue-grey-darken-4"></div>
    <v-btn @click="changeDashboardView(DashboardView.Review)" class="bg-blue-grey-darken-4">Review</v-btn>
    <div class="spacer bg-blue-grey-darken-4"></div>
    <v-btn @click="changeDashboardView(DashboardView.Result)" class="bg-blue-grey-darken-4">Result</v-btn>
  </v-container>
</template>

<script setup lang='ts'>
  import { DashboardView } from '@/assets/enums'

  import { useAppStore } from '@/store/app'
  const store = useAppStore()

  function changeDashboardView(inView: DashboardView){
    store.setCurrentDashboardView(inView)
  }
</script>

<style scoped>
  .spacer {
    height: 2px;
    width: 25px;
  }
</style>