<template>
    <DemoSettings>
        <div class="flex flex-wrap gap-2">
            <Button
                label="Expand All"
                size="small"
                @click="expandAll"
            />
            <Button
                label="Collapse All"
                size="small"
                @click="collapseAll"
            />
        </div>

        <div class="flex items-center gap-2">
            <label for="tree-select-mode">Select Mode: </label>
            <Select
                v-model="selectionMode"
                input-id="tree-select-mode"
                :options="selectionModes"
                option-label="label"
                option-value="value"
                placeholder="None"
                class="w-36"
            />
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showFilter" input-id="tree-show-filter" binary />
            <label for="tree-show-filter">Filter</label>
        </div>

        <ToggleButton
            v-if="showFilter"
            v-model="isStrictFilter"
            on-label="Strict Filter"
            off-label="Lenient Filter"
        />
    </DemoSettings>

    <DemoGroup>
        <Tree
            v-model:expanded-keys="expandedKeys"
            v-model:selectionKeys="selectedKey"
            :value="nodes"
            :selection-mode="selectionMode"
            :filter="showFilter"
            :filter-mode="filterMode"
            class="w-full md:w-[30rem]"
        >
            <template #nodeicon="{node}">
                <i class="material-icons">{{ node.icon }}</i>
            </template>
        </Tree>
    </DemoGroup>
</template>

<script setup lang="ts">
    import Tree from 'primevue/tree';

    import { ref, onMounted, computed } from 'vue';
    import { MockDataService } from '../../mockData.service';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const nodes = ref(null);

    const expandedKeys = ref({});
    const selectedKey = ref(null);

    const selectionMode = ref(null);
    const selectionModes = [
        { label: 'None', value: null},
        { label: 'Single', value: 'single'},
        { label: 'Multiple', value: 'multiple'},
        { label: 'Checkbox', value: 'checkbox'}
    ];

    const showFilter = ref(false);
    const isStrictFilter = ref(true);
    const filterMode = computed(() => isStrictFilter.value ? 'strict' : 'lenient');

    onMounted(async () => {
        nodes.value = await MockDataService.getTreeNodesAsync();
    });

    const expandAll = () => {
        for (let node of nodes.value) {
            expandNode(node);
        }

        expandedKeys.value = { ...expandedKeys.value };
    };

    const collapseAll = () => {
        expandedKeys.value = {};
    };

    const expandNode = (node) => {
        if (node.children && node.children.length) {
            expandedKeys.value[node.key] = true;

            for (let child of node.children) {
                expandNode(child);
            }
        }
    };
</script>