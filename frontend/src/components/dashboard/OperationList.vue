<template>
  <span>Choose operation to perform.</span>
  <v-sheet elevation="10" class="d-flex flex-column bg-blue-grey-darken-4 h-50 w-75 max-width-1024" rounded>
    <v-text-field
      v-model="filterInput"
      label="Filter by operation"
      hide-details
    />
    <v-container class="pa-0 overflow-auto h-100">
      <beat-list-item
        v-for="(op, index) in filteredOps"
        :key="op.name"
        :index="index"
        :name="op.name"
        :id="op.name"
        :description="op.description"
        @click="setSelectedOp(op.name)" />
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
        :disabled="selectedOp === ''"
        @click="confirmChoice()"
      >Confirm</v-btn>
    </v-container>
  </v-sheet>
</template>

<script setup lang='ts'>
  //Imports
  import { ref, computed } from 'vue'
  import BeatListItem from '@/components/universal/BeatListItem.vue'

  //Store
  import { useAppStore } from '@/store/app'
  const store = useAppStore()

  //Op list
  const filterInput = ref('')
  const operations = [{
    name: 'Retire Users',
    description: 'Move mail to hidden shared-mailbox & delete'
  },{
    name: 'Delete Users',
    description: 'Delete without saving email'
  },{
    name: 'Create Users',
    description: 'Create account according to org defaults'
  }]

  const filteredOps = computed(() => {
    if(filterInput.value === '') return operations
    const ops = operations.filter(op => op.name.toLowerCase().includes(filterInput.value.toLowerCase()))
    return ops
  })

  //Save selected op before sending to store on confirm button press
  const selectedOp = ref('')
  function setSelectedOp(opId: string) {
    console.log(opId)
    if(selectedOp.value === opId)
      selectedOp.value = ''
    else
      selectedOp.value = opId

    console.log(selectedOp.value)
  }

  //Button logic
  function cancelChoice(){
    //TODO: Undo org selection
    store.previousDashboardView()
  }

  function confirmChoice(){
    store.setSelectedOperation(selectedOp.value)
    store.nextDashboardView()
  }
</script>

<style scoped>
  .max-width-1024 {
    max-width: 1024px;
  }
</style>