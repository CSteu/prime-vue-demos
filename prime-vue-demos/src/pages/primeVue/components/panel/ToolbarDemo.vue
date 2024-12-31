
<template>
    <DemoSettings>
        <div class="text-bold">
            Slots:
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="showStart" input-id="toolbar-start" binary />
            <label for="toolbar-start">Start</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showCenter" input-id="toolbar-center" binary />
            <label for="toolbar-center">Center</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showEnd" input-id="toolbar-end" binary />
            <label for="toolbar-end">End</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <Toolbar class="basis-[50rem]">
            <template v-if="showStart" #start>
                <Button
                    icon="pi pi-plus"
                    class="mr-2"
                    severity="secondary"
                    text
                />
                <Button
                    icon="pi pi-print"
                    class="mr-2"
                    severity="secondary"
                    text
                />
                <Button icon="pi pi-upload" severity="secondary" text />
            </template>

            <template v-if="showCenter" #center>
                <IconField>
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <InputText placeholder="Search" />
                </IconField>
            </template>

            <template v-if="showEnd" #end>
                <SplitButton label="Save" :model="items" size="small" />
            </template>
        </Toolbar>
    </DemoGroup>
</template>

<script setup>
    import SplitButton from 'primevue/splitbutton';
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const showStart = ref(true);
    const showCenter = ref(true);
    const showEnd = ref(true);


    const items = ref([
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ])
</script>
