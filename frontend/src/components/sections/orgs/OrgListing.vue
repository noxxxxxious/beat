<template>
    <div class="org-listing-wrapper">
        <span class="org-name">{{ orgName }}</span>
    </div>
</template>

<script setup lang='ts'>
    const props = defineProps({
        orgName: {
            type: String,
            required: true
        },
        orgId: {
            type: String,
            required: true
        }
    })
</script>

<style scoped>
    
</style>
