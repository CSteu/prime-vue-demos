<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox v-model="isCollapsable" input-id="orgchart-collapsable" binary />
            <label for="orgchart-collapsable">Collapsable</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isSelectable" input-id="orgchart-selectable" binary />
            <label for="orgchart-selectable">Selectable</label>
        </div>

        <ToggleButton
            v-if="isSelectable"
            v-model="isSingleSelectionMode"
            on-label="Single"
            off-label="Multiple"
        />
    </DemoSettings>

    <DemoGroup>
        <div class="flex flex-col gap-4 items-center">
            <OrganizationChart
                v-if="data"
                v-model:selectionKeys="selection"
                :selection-mode="selectionMode"
                :value="data"
                :collapsible="isCollapsable"
            >
                <template #person="slotProps">
                    <div class="flex flex-col">
                        <div class="flex flex-col items-center">
                            <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                            <span>{{ slotProps.node.data.title }}</span>
                        </div>
                    </div>
                </template>
                <template #default="slotProps">
                    <span>{{ slotProps.node.label }}</span>
                </template>
            </OrganizationChart>

            <div v-if="isSelectable">
                Selected: {{ selection }}
            </div>
        </div>
    </DemoGroup>
</template>

<script setup lang="ts">
    import OrganizationChart from 'primevue/organizationchart';
    import { computed, onMounted, ref } from 'vue';

    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';
    import { MockDataService } from '../../mockData.service';

    const data = ref(null);

    const selection = ref({});

    const isCollapsable = ref(false);

    const isSelectable = ref(false);
    const isSingleSelectionMode = ref(true);
    const selectionMode = computed(() => {
        if (!isSelectable.value) {
            return undefined;
        }
        return isSingleSelectionMode.value ? 'single' : 'multiple'
    });

    onMounted(async () => data.value = await MockDataService.getOrgChartAsync());
</script>