
<template>
    <DemoSettings v-model:disabled="isDisabled">
        <div class="flex items-center gap-2">
            <Checkbox v-model="isMasked" input-id="speed-dial-mask" binary />
            <label for="speed-dial-mask">Mask</label>
        </div>

        <div class="flex items-center gap-1">
            <div class="font-bold">
                Radius:
            </div>
            <InputNumber
                v-model="radius"
                placeholder="Radius"
                show-buttons
                :step="5"
                :min="0"
                fluid
                class="w-44"
            />
        </div>
    </DemoSettings>

    <DemoGroup title="Linear">
        <div class="demo-container">
            <SpeedDial
                :model="items"
                direction="up"
                :mask="isMasked"
                style="position: absolute; left: calc(50% - 2rem); bottom: 0"
            />
            <SpeedDial
                :model="items"
                direction="down"
                :mask="isMasked"
                style="position: absolute; left: calc(50% - 2rem); top: 0"
            />
            <SpeedDial
                :model="items"
                direction="left"
                :mask="isMasked"
                style="position: absolute; top: calc(50% - 2rem); right: 0"
            />
            <SpeedDial
                :model="items"
                direction="right"
                :mask="isMasked"
                style="position: absolute; top: calc(50% - 2rem); left: 0"
            />
        </div>
    </DemoGroup>

    <Divider />

    <DemoGroup title="Circle">
        <div class="demo-container flex items-center justify-center">
            <SpeedDial
                :model="items"
                type="circle"
                :radius="radius"
                :mask="isMasked"
                :button-props="{ severity: 'warn', rounded: true }"
                :disabled="isDisabled"
                style="position: absolute"
            />
        </div>
    </DemoGroup>

    <Divider />

    <DemoGroup title="Semi Circle">
        <div class="demo-container">
            <SpeedDial
                :model="items"
                type="semi-circle"
                direction="up"
                :radius="radius"
                :mask="isMasked"
                :disabled="isDisabled"
                style="position: absolute; left: calc(50% - 2rem); bottom: 0"
            />
            <SpeedDial
                :model="items"
                type="semi-circle"
                direction="down"
                :radius="radius"
                :mask="isMasked"
                :disabled="isDisabled"
                style="position: absolute; left: calc(50% - 2rem); top: 0"
            />
            <SpeedDial
                :model="items"
                type="semi-circle"
                direction="left"
                :radius="radius"
                :mask="isMasked"
                :disabled="isDisabled"
                style="position: absolute; top: calc(50% - 2rem); right: 0"
            />
            <SpeedDial
                :model="items"
                type="semi-circle"
                direction="right"
                :radius="radius"
                :mask="isMasked"
                :disabled="isDisabled"
                style="position: absolute; top: calc(50% - 2rem); left: 0"
            />
        </div>
    </DemoGroup>

    <Divider />

    <DemoGroup title="Quarter Circle">
        <div class="demo-container">
            <SpeedDial
                :model="items"
                :type="SpeedDialType.QUARTER_CIRCLE"
                direction="up-left"
                :radius="radius"
                :mask="isMasked"
                :disabled="isDisabled"
                style="position: absolute; right: 0; bottom: 0"
            />
            <SpeedDial
                :model="items"
                :type="SpeedDialType.QUARTER_CIRCLE"
                direction="up-right"
                :radius="radius"
                :mask="isMasked"
                :disabled="isDisabled"
                style="position: absolute; left: 0; bottom: 0"
            />
            <SpeedDial
                :model="items"
                :type="SpeedDialType.QUARTER_CIRCLE"
                direction="down-left"
                :radius="radius"
                :mask="isMasked"
                :disabled="isDisabled"
                style="position: absolute; right: 0; top: 0"
            />
            <SpeedDial
                :model="items"
                :type="SpeedDialType.QUARTER_CIRCLE"
                direction="down-right"
                :radius="radius"
                :mask="isMasked"
                :disabled="isDisabled"
                style="position: absolute; left: 0; top: 0"
            />
        </div>
    </DemoGroup>

    <Divider />

    <DemoGroup title="Tooltip">
        <div class="demo-container">
            <SpeedDial
                :model="items"
                direction="up"
                :button-props="{ severity: 'help', rounded: true }"
                :mask="isMasked"
                :tooltip-options="{ position: 'left', event: undefined }"
                :disabled="isDisabled"
                style="position: absolute; right: 0; bottom: 0 "
            />
            <SpeedDial
                :model="items"
                direction="up"
                :mask="isMasked"
                :button-props="{ severity: 'danger', rounded: true }"
                :tooltip-options="{ position: 'right', event: undefined }"
                :disabled="isDisabled"
                style="position: absolute; left: 0; bottom: 0"
            />
        </div>
    </DemoGroup>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import SpeedDial from 'primevue/speeddial';
    import { useToast } from 'primevue/usetoast';
    import { useRouter } from 'vue-router';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const toast = useToast();
    const router = useRouter();

    enum SpeedDialType {
        LINEAR = 'linear',
        CIRCLE = 'circle',
        SEMI_CIRCLE = 'semi-circle',
        QUARTER_CIRCLE = 'quarter-circle'
    }

    const isDisabled = ref(false);
    const isMasked = ref(false);
    const radius = ref(80);

    const items = ref([
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'Vue Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://vuejs.org/'
            }
        }
    ])
</script>

<style scoped>
    .demo-container {
        width: 100%;
        position: relative;
        height: 250px;
    }
</style>