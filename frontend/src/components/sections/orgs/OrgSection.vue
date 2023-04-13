<template>
    <div class="section-wrapper">
        <org-listing v-for="org in orgs" :org="org" :key="org.id" />
    </div>
</template>

<script setup lang='ts'>
    import { PropType } from 'vue'
    import OrgListing from './OrgListing.vue'

    //tempdata
    import { Org } from '@/components/nav/tempOrgs'

    defineProps({
        orgs: {
            type: Array as PropType<Org[]>,
            required: true
        }
    })
</script>

<style scoped>
    .section-wrapper {
        width: 500px;
        margin: auto;
    }
</style>
