<template>
  <span>Choose operation to perform.</span>
  <v-sheet elevation="10" class="d-flex flex-column bg-blue-grey-darken-4 h-50 w-75" rounded>
    <v-text-field
      v-model="filterInput"
      label="Filter by operation"
      hide-details
    />
    <v-container class="pa-0 overflow-auto h-100">
      <v-list class="bg-blue-grey-darken-4">
        <v-list-item
          class="op-names"
          v-for="op in filteredOps"
          :key="op.name"
          :name="op.name"
          :value="op.name">
          <div class="d-flex justify-space-between">
            <span>{{ op.name }}</span>
            <span class="text-grey">{{ op.description }}</span>
          </div>
        </v-list-item>
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

  function cancelChoice(){
    //TODO: Undo org selection
    store.previousDashboardView()
  }

  function confirmChoice(){
    //TODO: Confirm op selection
    store.nextDashboardView()
  }
</script>

<style scoped>
  .op-names:nth-child(odd){
    background-color: #37474F;
  }
</style>