<template>
  <span>Choose organization to work on.</span>
  <v-sheet elevation="10" class="d-flex flex-column bg-blue-grey-darken-4 h-50 w-75 max-width-1024" rounded>
    <v-text-field
      v-model="filterInput"
      label="Filter by organization name"
      hide-details
    />
    <v-container class="pa-0 overflow-auto h-100">
      <v-list class="bg-blue-grey-darken-4">
        <v-list-item
          class="org-names"
          v-for="org in filteredOrgs"
          :key="org.id"
          :name="org.name"
          :value="org.name">{{ org.name }}</v-list-item>
      </v-list>
    </v-container>
    <v-container class="pa-0">
      <v-btn 
        rounded="0"
        class="w-50 rounded-bs"
        disabled
      >Back</v-btn>
      <v-btn 
        rounded="0"
        class="w-50 bg-blue-grey rounded-be"
        @click="confirmChoice()"
      >Confirm</v-btn>
    </v-container>
  </v-sheet>
</template>

<script setup lang='ts'>
  import { ref, computed } from 'vue'
  import tempOrgs from '@/assets/tempOrgs'

  import { useAppStore } from '@/store/app'
  const store = useAppStore()

  const filterInput = ref('')

  const filteredOrgs = computed(() => {
    if(filterInput.value === '') return tempOrgs
    const orgs = tempOrgs.filter(org => org.name.toLowerCase().includes(filterInput.value.toLowerCase()))
    return orgs
  })

  function confirmChoice(){
    //TODO: Lock in organization
    store.nextDashboardView()
  }
</script>

<style scoped>
  .org-names:nth-child(odd){
    background-color: #37474F;
  }

  .max-width-1024 {
    max-width: 1024px;
  }
</style>