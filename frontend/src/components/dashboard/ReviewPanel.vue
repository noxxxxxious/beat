<template>
  <span>Please review before proceeding.</span>
  <v-sheet elevation="10" class="bg-blue-grey-darken-4 h-50 w-75 d-flex flex-column max-width-1024 border-box" rounded>
    <v-container class="pa-0 headings-grid">
      <h2 class="text-h5 text-center py-3">Accounts</h2>
      <v-divider vertical></v-divider>
      <h2 class="text-h5 text-center py-3">Operations</h2>
    </v-container>
    <v-divider></v-divider>
    <v-container class="d-flex flex-grow-1 overflow-hidden pa-0">
      <v-container class="pa-0 d-flex flex-column overflow-auto">
        <beat-list-item
          v-for="(account, index) in accounts"
          :key="account.alias"
          :index="index"
          :id="account.alias"
          :name="account.displayName"
        >{{ account.displayName }}</beat-list-item>
      </v-container>
      <v-divider vertical></v-divider>
      <v-container class="pa-0 d-flex flex-column overflow-auto">
        <beat-list-item
          v-for="(operation, index) in operations"
          :key="operation"
          :name="operation"
          :index="index"
          :id="operation"
          description=" "
          :flipcolor="true"
        >{{ operation }}</beat-list-item>
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
        :disabled="confirmDisabled"
        @click="confirmChoice()"
      >{{ confirmDisabled ? countdownCounter : 'Confirm' }}</v-btn>
    </v-container>
  </v-sheet>
</template>

<script setup lang='ts'>
  //Imports
  import { ref, reactive, onMounted } from 'vue'
  import BeatListItem from '../universal/BeatListItem.vue'

  //Store
  import { useAppStore } from '@/store/app'
  const store = useAppStore()

  const confirmDisabled = ref(true)
  const countdownCounter = ref(3)
  let timer: NodeJS.Timer | null = null

  const accounts = store.getSelectedAccounts
  //Temp vars to fill up space
  const operations: string[] = reactive([])
  accounts.forEach(account => {
    store.getSelectedOperation.operationList.forEach(op => {
      let description = op.replaceAll('[alias]', account.alias)
      description = description.replaceAll('[displayName]', account.displayName)
      operations.push(description)
    })
  })

  //Button logic
  function cancelChoice(){
    //TODO: Undo accounts selection
    store.previousDashboardView()
  }

  function confirmChoice(){
    //TODO: Confirm all selection & perform actions
    const fetchOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({operation: store.getSelectedOperation, accounts: store.getSelectedAccounts})
    }

    fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/api/operate/${store.getSelectedOrganization.domain}`, fetchOptions)
    .then(data => data.json())
    .then(result => {
      console.log(result)
    })
    store.nextDashboardView()
  }

  //Countdown logic
  function countdown(){
    if(countdownCounter.value > 1)
      countdownCounter.value--
    else {
      confirmDisabled.value = false
      if(timer)
        clearInterval(timer)
    }
  }

  //Enable confirm 3 seconds after mount
  onMounted(() => {
    timer = setInterval(countdown, 1000)
  })
</script>

<style scoped>
.max-width-1024 {
  max-width: 1024px;
}

.border-box {
  box-sizing: border-box;
}

.headings-grid {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
}
</style>