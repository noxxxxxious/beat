<template>
  <v-sheet elevation="10" class="bg-blue-grey-darken-4 h-50 w-75" rounded>
    <v-text-field
      v-model="filterInput"
      label="Filter by name"
      hide-details
    />
    <v-list class="bg-blue-grey-darken-4 overflow-auto h-100">
      <v-list-item
        class="account-names"
        v-for="account in filteredAccounts"
        
        :key="account.alias"
        :name="account.alias"
        :value="account.alias">{{ account.name }}</v-list-item>
    </v-list>
  </v-sheet>
</template>

<script setup lang='ts'>
  import { ref, computed } from 'vue'
  import tempOrgs from '@/assets/tempOrgs'

  const tempAccounts = tempOrgs[0].users

  const filterInput = ref('')

  const filteredAccounts = computed(() => {
      if(filterInput.value === '') return tempAccounts
      const accounts = tempAccounts.filter(account => account.name.toLowerCase().includes(filterInput.value.toLowerCase()))
      return accounts
    })
</script>

<style scoped>
  .account-names:nth-child(odd){
    background-color: #37474F;
  }
</style>