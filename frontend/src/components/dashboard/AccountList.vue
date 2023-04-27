<template>
  <span>Choose accounts to perform operation on.</span>
  <v-sheet elevation="10" class="d-flex flex-column bg-blue-grey-darken-4 h-50 w-75" rounded>
    <v-text-field
      v-model="filterInput"
      label="Filter by name"
      hide-details
    />
    <v-container class="pa-0 overflow-auto h-100">
      <v-list class="bg-blue-grey-darken-4">
        <v-list-item
          class="account-names"
          v-for="account in filteredAccounts"
          :key="account.alias"
          :name="account.alias"
          :value="account.alias"
          @click="toggleUserCheck(account.alias)"
          >
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
          {{ account.name }}</v-list-item>
      </v-list>
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
      >Confirm</v-btn>
    </v-container>
  </v-sheet>
</template>

<script setup lang='ts'>
  import { ref, computed } from 'vue'
  import { useAppStore } from '@/store/app'
  const store = useAppStore()

  import tempOrgs from '@/assets/tempOrgs'
  const tempAccounts = tempOrgs[0].users

  //Figure out how to type
  const accountModels: any = {}

  tempAccounts.forEach(account => {
    accountModels[account.alias] = { isChecked: false }
  })

  const filterInput = ref('')

  const filteredAccounts = computed(() => {
    if(filterInput.value === '') return tempAccounts
    const accounts = tempAccounts.filter(account => account.name.toLowerCase().includes(filterInput.value.toLowerCase()))
    return accounts
  })

  function toggleUserCheck(accountAlias: string) {
    if(!accountAlias) throw new Error('Trying to toggle user account checkbox, but no user alias was suplied.')
    accountModels[accountAlias].isChecked = !accountModels[accountAlias].isChecked
    console.log(`accountModel[${accountAlias}].isChecked is now: ${accountModels[accountAlias].isChecked}`)
  }

  function cancelChoice(){
    //TODO: Undo op selection
    store.previousDashboardView()
  }

  function confirmChoice(){
    //TODO: Confirm accounts selection
    store.nextDashboardView()
  }
  
</script>

<style scoped>
  .account-names:nth-child(odd){
    background-color: #37474F;
  }
</style>