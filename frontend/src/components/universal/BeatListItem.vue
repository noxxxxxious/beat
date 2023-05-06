<template>
  <v-list-item 
  :class="classes" 
  :value="id" 
  :index="index"
  active-class="active">
    <div class="d-flex justify-space-between">
      <span>{{ name }}</span>
      <span class="text-grey">{{ subTitle }}</span>
    </div>
  </v-list-item>
</template>

<script setup lang='ts'>
  import { computed } from 'vue';

  const { id, name, index, description } = defineProps({
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: ''
    }
  })

  const classes = computed(() => {
    return index % 2 === 0 ? 'bg-blue-grey-darken-3' : 'bg-blue-grey-darken-4'
  })

  const subTitle = computed(() => {
    return description ? description : id
  })
</script>

<style scoped>
  .active {
    background: #0D47A1 !important;
  }
</style>