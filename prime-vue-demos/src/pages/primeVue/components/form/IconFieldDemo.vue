<template>
    <DemoGroup>
        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
        </IconField>

        <IconField>
            <InputText v-model="value2" variant="filled" />
            <InputIcon class="pi pi-spin pi-spinner" />
        </IconField>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';

    const value1 = ref(null);
    const value2 = ref(null);
</script>
