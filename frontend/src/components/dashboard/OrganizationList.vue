<template>
  <v-sheet elevation="10" class="bg-blue-grey-darken-4 h-50 w-75" rounded>
    <v-text-field
      v-model="filterInput"
      label="Filter by organization name"
      hide-details
    />
    <v-list class="bg-blue-grey-darken-4 overflow-auto h-100">
      <v-list-item
        class="org-names"
        v-for="org in filteredOrgs"
        :key="org.id"
        :name="org.name"
        :value="org.name">{{ org.name }}</v-list-item>
    </v-list>
  </v-sheet>
</template>

<script setup lang='ts'>
  import { ref, computed } from 'vue'
  import tempOrgs from '@/assets/tempOrgs'

  const filterInput = ref('')

  const filteredOrgs = computed(() => {
      if(filterInput.value === '') return tempOrgs
      const orgs = tempOrgs.filter(org => org.name.toLowerCase().includes(filterInput.value.toLowerCase()))
      return orgs
    })
</script>

<style scoped>
  .org-names:nth-child(odd){
    background-color: #37474F;
  }
</style>