
<template>
    <DemoSettings>
        <!-- Paginator -->
        <div class="flex items-center gap-2">
            <Checkbox v-model="showPaginator" input-id="treetable-paginator" binary />
            <label for="treetable-paginator">Paginator</label>
        </div>

        <!-- Sizes -->
        <div class="flex items-center gap-2">
            <label for="treetable-size">Size: </label>
            <Select
                v-model="selectedSize"
                input-id="treetable-size"
                :options="sizes"
                option-label="label"
                option-value="value"
                placeholder="Normal"
                class="w-32"
            />
        </div>

        <!-- Sort -->
        <div class="flex items-center gap-2">
            <Checkbox v-model="isSortable" input-id="treetable-sortable" binary />
            <label for="treetable-sortable">Sortable</label>
        </div>

        <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2">
                <Checkbox
                    v-model="isMultiSort"
                    input-id="treetable-multi-sort"
                    binary
                    :disabled="!isSortable"
                />
                <label for="treetable-multi-sort">Multi-Sort</label>
            </div>

            <div class="flex items-center gap-2">
                <Checkbox
                    v-model="isRemovableSort"
                    input-id="treetable-removeable-sort"
                    binary
                    :disabled="!isSortable"
                />
                <label for="treetable-removable-sort">Removable Sort</label>
            </div>
        </div>

        <!-- Filter -->
        <div class="flex items-center gap-2">
            <Checkbox v-model="showFilter" input-id="treetable-filter" binary />
            <label for="treetable-filter">Filter</label>
        </div>

        <!-- Selection -->
        <InputGroup class="w-60">
            <InputGroupAddon>
                <Checkbox
                    v-model="isSelectable"
                    input-id="treetable-selectable"
                    binary
                    size="small"
                />
            </InputGroupAddon>
            <Select
                v-model="selectionMode"
                input-id="treetable-select-mode"
                :options="selectionModes"
                option-label="label"
                option-value="value"
                size="small"
                :disabled="!isSelectable"
            />
        </InputGroup>
    </DemoSettings>

    <DemoGroup>
        <TreeTable
            v-model:selection-keys="selectedKey"
            :value="nodes"
            :size="selectedSize"
            :paginator="showPaginator"
            :rows="5"
            :rows-per-page-options="[5, 10, 25]"
            :sort-mode="isMultiSort ? 'multiple' : 'single'"
            :removable-sort="isRemovableSort"
            :filters="showFilter ? filters : undefined"
            :selection-mode="isSelectable ? selectionMode : undefined"
            table-style="min-width: 50rem"
        >
            <template v-if="showFilter" #header>
                <div class="flex justify-between items-center gap-2">
                    <SelectButton
                        v-model="filterMode"
                        option-label="label"
                        option-value="value"
                        data-key="value"
                        :options="filterOptions"
                    />

                    <IconField>
                        <InputIcon>
                            <i class="material-icons">search</i>
                        </InputIcon>
                        <InputText v-model="filters['global']" placeholder="Global Search" />
                    </IconField>
                </div>
            </template>

            <Column
                field="name"
                header="Name"
                expander
                :sortable="isSortable"
                class="w-4/12"
            >
                <template v-if="showFilter" #filter>
                    <InputText v-model="filters['name']" placeholder="Filter by name" />
                </template>
            </Column>

            <Column
                field="size"
                header="Size"
                :sortable="isSortable"
                class="w-4/12"
            >
                <template v-if="showFilter" #filter>
                    <InputText v-model="filters['size']" placeholder="Filter by size" />
                </template>
            </Column>

            <Column
                field="type"
                header="Type"
                :sortable="isSortable"
                class="w-4/12"
            >
                <template v-if="showFilter" #filter>
                    <InputText v-model="filters['type']" placeholder="Filter by type" />
                </template>
            </Column>
        </TreeTable>
    </DemoGroup>
</template>

<script setup lang="ts">
    import TreeTable from 'primevue/treetable';
    import SelectButton from 'primevue/selectbutton';
    import Column from 'primevue/column';

    import { ref, onMounted } from 'vue';
    import { MockDataService } from '../../mockData.service';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    onMounted(async () => {
        nodes.value = await MockDataService.getTreeTableNodesAsync();
    });

    const nodes = ref();

    // Sizes
    const selectedSize = ref<'small' | 'large' | null>(null);
    const sizes = [
        { label: 'Small', value: 'small' },
        { label: 'Normal', value: null },
        { label: 'Large', value: 'large' }
    ];

    // Paginator
    const showPaginator = ref(false);

    // Sort
    const isSortable = ref(false);
    const isMultiSort = ref(false);
    const isRemovableSort = ref(false);

    // filter
    const showFilter = ref(false);
    const filterMode = ref('lenient');
    const filters = ref({});
    const filterOptions = [
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ];

    // Selection
    const isSelectable = ref(false);
    const selectedKey = ref(null);
    const selectionMode = ref<'single' | 'multiple' | 'checkbox'>('single');
    const selectionModes = [
        { label: 'Selectable - Single', value: 'single' },
        { label: 'Selectable - Multiple', value: 'multiple' },
        { label: 'Selectable - Checkbox', value: 'checkbox' }
    ]

</script>
