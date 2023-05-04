<template>
  <v-list-item 
  :class="classes" 
  :value="id" 
  :index="index" 
  active-class="bg-blue-darken-4">
    <div class="d-flex justify-space-between">
      <span>{{ name }}</span>
      <span class="text-grey">{{ id }}</span>
    </div>
  </v-list-item>
</template>

<script setup lang='ts'>
  import { computed } from 'vue';

  const { id, name, index } = defineProps({
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
    }
  })

  const classes = computed(() => {
    return index % 2 === 0 ? 'bg-blue-grey-darken-3' : 'bg-blue-grey-darken-4'
  })
</script>