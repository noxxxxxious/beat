<template>
  <div class="d-flex align-center justify-center bg-blue-grey-darken-4 text-grey h-100">
    <div class="loading-text">
      {{ dots + description + dots }}
    </div>
  </div>
</template>

<script setup lang='ts'>
  import { ref } from 'vue'

  const { description } = defineProps({
    description: {
      type: String,
      default: 'Loading'
    }
  })

  const dots = ref('')

  setInterval(() => {
    if(dots.value.length < 3)
      dots.value += '.'
    else
      dots.value = ''
  }, 500)

</script>

<style scoped>
</style>