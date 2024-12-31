<template>
    <DemoSettings>
        <ToggleButton
            v-model="panelBlocked"
            on-icon="pi pi-lock"
            off-icon="pi pi-unlock"
            on-label="Blocked"
            off-label="Unblocked"
            size="small"
        />

        <Button
            label="Block Entire Document"
            size="small"
            @click="blockDocument()"
        />
    </DemoSettings>

    <DemoGroup>
        <BlockUI :blocked="panelBlocked">
            <Panel header="Basic">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </BlockUI>

        <BlockUI :blocked="documentBlocked" full-screen />
    </DemoGroup>
</template>

<script setup>
    import BlockUI from 'primevue/blockui';
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const panelBlocked = ref(false);
    const documentBlocked = ref(false);

    const blockDocument = () => {
        documentBlocked.value = true;

        setTimeout(() => {
            documentBlocked.value = false;
        }, 3000);
    }
</script>
