<template>
  <span>Choose accounts to perform operation on.</span>
  <v-sheet elevation="10" class="d-flex flex-column bg-blue-grey-darken-4 h-50 w-75 max-width-1024" rounded>
    <v-text-field
      v-model="filterInput"
      label="Filter by name"
      hide-details
    />
    <v-container class="pa-0 overflow-auto h-100">
      <beat-skeleton-loader
        v-if="accountList.length <= 0"
        :description="`Fetching ${store.getSelectedOrganization.name} user mailboxes`"></beat-skeleton-loader>
        <beat-list-item
          v-for="(account, index) in filteredAccountList"
          :key="account.alias"
          :name="account.displayName"
          :id="account.alias"
          :index="index"
          :description="`${account.alias} | ${account.primarySMTPAddress}`"
          :active="checkActive(account.alias)"
          @click="toggleUserCheck(account.alias)"
          >{{ account.displayName }}</beat-list-item>
    </v-container>
    <v-container class="pa-0">
      <v-btn 
        rounded="0"
        class="w-50 rounded-bs"
        @click="cancelChoice()"
      >Back</v-btn>
      <v-btn 
        rounded="0"
        class="w-50 bg-blue-grey rounded-be"
        @click="confirmChoice()"
        :disabled="selectedAccounts.length === 0"
      >Confirm</v-btn>
    </v-container>
  </v-sheet>
</template>

<script setup lang='ts'>
  //Imports
  import { Ref, ref, reactive, computed, onMounted } from 'vue'
  import { UserAccount } from '@/assets/interfaces'
  import BeatSkeletonLoader from '@/components/universal/BeatSkeletonLoader.vue'
  import BeatListItem from '@/components/universal/BeatListItem.vue'

  //Store
  import { useAppStore } from '@/store/app'
  const store = useAppStore()

  const accountList: UserAccount[] = reactive([])
  const selectedAccounts: string[] = reactive([])  

  const filterInput = ref('')

  const filteredAccountList = computed(() => {
    if(filterInput.value === '') return accountList
    const accounts = accountList.filter(account => account.displayName.toLowerCase().includes(filterInput.value.toLowerCase()))
    return accounts
  })

  function toggleUserCheck(inAlias: string) {
    //Check if alias is added to list already, if exists, remove it from the list, else, add to list
    if(!inAlias) throw new Error('Trying to toggle user account checkbox, but no user alias was suplied.')
    const searchIndex = selectedAccounts.indexOf(inAlias)
    if(searchIndex > -1){
      selectedAccounts.splice(searchIndex, 1)
    } else {
      selectedAccounts.push(inAlias)
    }
  }

  function checkActive(inAlias: string){
    if(!inAlias) throw new Error(`Call to checkActive() done with invalid inAlias argument: inAlias == ${inAlias}`)
    return (selectedAccounts.indexOf(inAlias) > -1)
  }

  //Button logic
  function cancelChoice(){
    //TODO: Undo op selection
    store.previousDashboardView()
  }

  function confirmChoice(){
    const accounts: UserAccount[] = []
    selectedAccounts.forEach(alias => {
      const account = accountList.find(search => search.alias === alias)
      if(!account) throw new Error(`Unable to find selected alias ${alias} in account list`)
      accounts.push(account)
    })
    store.setSelectedAccounts(accounts)
    store.nextDashboardView()
  }

  //Get accounts on mount
  onMounted(() => {
    fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/api/accounts/${store.getSelectedOrganization.domain}`).then(data => data.json()).then(result => {
      //TODO: Handle error
      const accounts = result as UserAccount[]
      accounts.sort((a, b) => a.displayName.localeCompare(b.displayName))

      Object.assign(accountList, accounts)
    })
  })
  
</script>

<style scoped>
  .account-names:nth-child(odd){
    background-color: #37474F;
  }

  .max-width-1024 {
    max-width: 1024px;
  }

  .beat-h-100 .v-skeleton-loader__bone {
    height: 100% !important;
  }
</style>