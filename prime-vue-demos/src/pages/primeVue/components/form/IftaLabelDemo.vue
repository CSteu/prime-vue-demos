<template>
    <DemoGroup>
        <IftaLabel>
            <InputText id="ifta-username" v-model="value" />
            <label for="ifta-username">Username</label>
        </IftaLabel>
    </DemoGroup>
</template>

<script setup>
    import IftaLabel from 'primevue/iftalabel'; // Not in global scope.  If we want to use this elsewhere, add to that component or main.ts for global scoping
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';

    const value = ref(null);
</script>