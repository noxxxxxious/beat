<template>
    <div class="org-listing-wrapper">
        <span class="org-name">{{ org.name }}</span>
        <div class="details">
            <span class="org-domain">Domain: {{ domain }}</span>
            <span class="org-user-count">Users: {{  org.users.length }}</span>
        </div>
    </div>
</template>

<script setup lang='ts'>
    import { PropType, computed } from 'vue';
    //tempdata
    import { Org } from '@/components/nav/tempOrgs'

    const props = defineProps({
        org: {
            type: Object as PropType<Org>,
            required: true
        }
    })

    const domain = computed((): string => {
        return props.org.name.toLowerCase() + '.com'
    })
</script>

<style scoped>
    .org-listing-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #aaa;
        color: #222;
        padding: 5px;
        border: 1px solid #eee;
        border-radius: 5px;
    }

    .org-listing-wrapper:hover {
        background: lightblue;
        cursor: pointer;
        border: 1px solid #222;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-style: italic;
    }
</style>
