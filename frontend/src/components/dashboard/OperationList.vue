<template>
  <span>Choose operation to perform.</span>
  <v-sheet elevation="10" class="d-flex flex-column bg-blue-grey-darken-4 h-50 w-75 max-width-1024" rounded>
    <v-text-field
      v-model="filterInput"
      label="Filter by operation"
      hide-details
    />
    <v-container class="pa-0 overflow-auto h-100">
      <beat-skeleton-loader 
        v-if="operationList.length <= 0"
        description="Fetching operations list"></beat-skeleton-loader>
      <beat-list-item
        v-for="(op, index) in filteredOps"
        :key="op.name"
        :index="index"
        :name="op.name"
        :id="op.name"
        :active="selectedOp === op.name"
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
  import { ref, computed, reactive, onMounted } from 'vue'
  import { Operation } from '@/assets/interfaces'
  import BeatSkeletonLoader from '@/components/universal/BeatSkeletonLoader.vue'
  import BeatListItem from '@/components/universal/BeatListItem.vue'

  //Store
  import { useAppStore } from '@/store/app'
  const store = useAppStore()

  //Op list
  const filterInput = ref('')
  const operationList: Operation[] = reactive([])

  const filteredOps = computed(() => {
    if(filterInput.value === '') return operationList
    const ops = operationList.filter(op => op.name.toLowerCase().includes(filterInput.value.toLowerCase()))
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
    const op = operationList.find(search => search.name === selectedOp.value)
    if(!op) throw new Error(`Unable to find operation ${op} in operation list`)
    store.setSelectedOperation(op)
    store.nextDashboardView()
  }

  //Get ops on mount
  onMounted(() => {
    fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/api/operations`).then(data => data.json()).then(result => {
      console.log(result)
      Object.assign(operationList, result)
    })
  })
</script>

<style scoped>
  .max-width-1024 {
    max-width: 1024px;
  }
</style>