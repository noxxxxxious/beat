<template>
  <span>Choose organization to work on.</span>
  <v-sheet elevation="10" class="d-flex flex-column bg-blue-grey-darken-4 h-50 w-75 max-width-1024" rounded>
    <v-text-field
      v-model="filterInput"
      label="Filter by organization name"
      hide-details
    />
    <v-container class="pa-0 overflow-auto h-100">
      <beat-skeleton-loader 
        v-if="organizationList.length <= 0"
        description="Fetching organizations list"></beat-skeleton-loader>
      <beat-list-item
        v-for="(org, index) in filteredOrgs"
        :key="org.domain"
        :index="index"
        :name="org.name"
        :id="org.domain"
        :active="selectedOrg === org.domain"
        @click="setSelectedOrg(org.domain)" />
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
        :disabled="selectedOrg === ''"
      >Confirm</v-btn>
    </v-container>
  </v-sheet>
</template>

<script setup lang='ts'>
  //Imports
  import { Ref, ref, reactive, computed, onMounted } from 'vue'
  import { Org } from '@/assets/interfaces'
  import BeatSkeletonLoader from '@/components/universal/BeatSkeletonLoader.vue'
  import BeatListItem from '@/components/universal/BeatListItem.vue'
  
  //Store
  import { useAppStore } from '@/store/app'
  const store = useAppStore()

  let organizationList: Org[] = reactive([])
  const filterInput = ref('')

  const filteredOrgs = computed((): Org[] => {
    if(filterInput.value === '') return organizationList
    const orgs: Org[] = organizationList.filter(org => org.name.toLowerCase().includes(filterInput.value.toLowerCase()))
    return orgs
  })

  //Save selected org before sending to store on confirm button press
  const selectedOrg = ref('')
  function setSelectedOrg(orgId: string) {
    console.log(orgId)
    if(selectedOrg.value === orgId)
      selectedOrg.value = ''
    else
      selectedOrg.value = orgId

    console.log(selectedOrg.value)
  }

  //Button logic
  function confirmChoice(){
    if(!selectedOrg) return

    const org = organizationList.find(search => search.domain === selectedOrg.value)    
    if(!org) throw new Error(`Unable to find ${selectedOrg} in Organization list`)

    store.setSelectedOrganization(org)
    store.nextDashboardView()
  }

  //Get orgs on mount
  onMounted(() => {
    fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/api/organizations`).then(data => data.json()).then(result => {
      Object.assign(organizationList, result)
    })
  })
</script>

<style scoped>
  .max-width-1024 {
    max-width: 1024px;
  }
</style>