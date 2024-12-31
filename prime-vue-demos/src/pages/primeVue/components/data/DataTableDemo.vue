<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox v-model="isLoading" input-id="datatable-loading" binary />
            <label for="datatable-loading">Loading</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isResizeableColumns" input-id="datatable-resizeable" binary />
            <label for="datatable-resizeable">Resizeable</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showPaginator" input-id="datatable-paginator" binary />
            <label for="datatable-paginator">Paginator</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isSortable" input-id="datatable-sortable" binary />
            <label for="datatable-sortable">Sortable</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isScrollable" input-id="datatable-scrollable" binary />
            <label for="datatable-scrollable">Scrollable</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showGridLines" input-id="datatable-gridlines" binary />
            <label for="datatable-gridlines">Grid Lines</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showStriped" input-id="datatable-striped" binary />
            <label for="datatable-striped">Striped</label>
        </div>

        <div class="flex items-center gap-2">
            <label for="datatable-size">Size: </label>
            <Select
                v-model="selectedSize"
                input-id="datatable-size"
                :options="sizes"
                option-label="label"
                option-value="value"
                placeholder="Normal"
                class="w-32"
            />
        </div>
    </DemoSettings>

    <div class="flex items-start">
        <div class="flex justify-center flex-wrap items-start grow gap-6">
            <DemoGroup title="Basic" :full-width="false">
                <DataTable
                    :value="products"
                    :loading="isLoading"
                    :show-gridlines="showGridLines"
                    :show-striped="showStriped"
                    :resizable-columns="isResizeableColumns"
                    :paginator="showPaginator"
                    :rows-per-page-options="[5, 10, 20, 50]"
                    :rows="5"
                    :scrollable="isScrollable"
                    :scroll-height="isScrollable ? '400px' : undefined"
                    table-style="min-width: 50rem"
                    :size="selectedSize"
                >
                    <Column field="code" header="Code" :sortable="isSortable" />
                    <Column field="name" header="Name" :sortable="isSortable" />
                    <Column field="category" header="Category" :sortable="isSortable" />
                    <Column field="quantity" header="Quantity" :sortable="isSortable" />
                </DataTable>
            </DemoGroup>

            <DemoGroup align-y="top">
                <DemoGroup title="Edit Cells" :full-width="false">
                    <DataTableCellEditDemo
                        v-model:products="products"
                        :loading="isLoading"
                        :show-gridlines="showGridLines"
                        :show-striped="showStriped"
                        :resizeable-columns="isResizeableColumns"
                        :paginator="showPaginator"
                        :sortable="isSortable"
                        :scrollable="isScrollable"
                        :size="selectedSize"
                    />
                </DemoGroup>

                <DemoGroup title="Edit Row" :full-width="false">
                    <DataTableRowEditDemo
                        v-model:products="products"
                        :loading="isLoading"
                        :show-gridlines="showGridLines"
                        :show-striped="showStriped"
                        :resizeable-columns="isResizeableColumns"
                        :paginator="showPaginator"
                        :sortable="isSortable"
                        :scrollable="isScrollable"
                        :size="selectedSize"
                    />
                </DemoGroup>
            </DemoGroup>
        </div>

        <div class="other-features">
            <div class="text-lg font-bold">
                See Also
            </div>
            <ul>
                <li v-for="feature in seeAlso" :key="feature.label" class="text-left">
                    <Button
                        as="a"
                        :label="feature.label"
                        :href="feature.url"
                        variant="link"
                        severity="info"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { MockDataService, MockProduct } from '../../mockData.service';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';
    import DataTableRowEditDemo from './components/DataTableRowEditDemo.vue';
    import DataTableCellEditDemo from './components/DataTableCellEditDemo.vue';

    const products = ref<Array<MockProduct>>();
    const isLoading = ref(false);
    const showGridLines = ref(false);
    const showStriped = ref(false);
    const isResizeableColumns = ref(false);
    const showPaginator = ref(false);
    const isSortable = ref(false);
    const isScrollable = ref(true);

    const selectedSize = ref<'small' | 'large' | null>(null);
    const sizes = [
        { label: 'Small', value: 'small' },
        { label: 'Normal', value: null },
        { label: 'Large', value: 'large' }
    ];

    onMounted(async () => {
        products.value = await MockDataService.getProductsAsync();
    });

    const seeAlso = [
        { label: 'Row Selection', url: 'https://primevue.org/datatable/#row_selection' },
        { label: 'Filtering', url: 'https://primevue.org/datatable/#filter' },
        { label: 'Row Selection', url: 'https://primevue.org/datatable/#row_selection'},
        { label: 'Expandable Rows', url: 'https://primevue.org/datatable/#row_expansion' },
        { label: 'Frozen Rows', url: 'https://primevue.org/datatable/#frozen_rows' },
        { label: 'Frozen Columns', url: 'https://primevue.org/datatable/#frozen_columns' },
        { label: 'Column Groups', url: 'https://primevue.org/datatable/#column_group' },
        { label: 'Row Groups', url: 'https://primevue.org/datatable/#row_group' },
        { label: 'Virtual Scrolling (Preload and Lazy)', url: 'https://primevue.org/datatable/#virtualscroll' },
        { label: 'Reordering', url: 'https://primevue.org/datatable/#reorder'},
        { label: 'Advanced Examples', url: 'https://primevue.org/datatable/#samples'}
    ];
</script>