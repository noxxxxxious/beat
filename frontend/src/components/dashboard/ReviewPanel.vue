<template>
  <span>Please review before proceeding.</span>
  <v-sheet elevation="10" class="bg-blue-grey-darken-4 h-50 w-75 d-flex flex-column" rounded>
    <v-container class="pa-0 d-flex">
      <h2 class="text-h5 text-center py-3 flex-grow-0">Accounts</h2>
      <v-divider vertical></v-divider>
      <h2 class="text-h5 text-center py-3 flex-grow-0">Operations</h2>
    </v-container>
    <v-divider></v-divider>
    <v-container class="d-flex flex-grow-1 overflow-hidden pa-0">
      <v-container class="pa-0 d-flex flex-column">
        <v-list class="bg-blue-grey-darken-4 pa-0 overflow-auto">
          <v-list-item
            v-for="(account, index) in accounts"
            :key="index + account"
          >{{ account }}</v-list-item>
        </v-list>
      </v-container>
      <v-divider vertical></v-divider>
      <v-container class="pa-0 d-flex flex-column">
        <v-list class="bg-blue-grey-darken-4 pa-0 overflow-auto">
          <v-list-item
            v-for="(operation, index) in operations"
            :key="index + operation"
          >{{ operation }}</v-list-item>
        </v-list>
      </v-container>
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
  import { useAppStore } from '@/store/app';
  const store = useAppStore()

  //Temp vars to fill up space
  const accounts = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
  const operations = ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
  // const accounts = ['a', 'a', 'a', 'a', 'a']
  // const operations = ['o', 'o', 'o', 'o', 'o']

  function cancelChoice(){
    //TODO: Undo accounts selection
    store.previousDashboardView()
  }

  function confirmChoice(){
    //TODO: Confirm all selection & perform actions
    store.nextDashboardView()
  }
</script>

<style scoped>
</style>