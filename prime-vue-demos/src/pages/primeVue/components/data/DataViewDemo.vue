
<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox v-model="showTopPaginator" input-id="dataview-top-paginator" binary />
            <label for="dataview-top-paginator">Top Paginator</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showBottomPaginator" input-id="dataview-bottom-paginator" binary />
            <label for="dataview-bottom-paginator">Bottom Paginator</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isSortable" input-id="dataview-sortable" binary />
            <label for="dataview-sortable">Sortable</label>
        </div>

        <div v-if="isSortable" class="flex items-center gap-2">
            <Select
                v-model="sortField"
                :options="sortFieldOptions"
                option-label="label"
                option-value="value"
            />
            <ToggleButton
                v-model="isAscendingSort"
                on-label="Asc"
                off-label="Desc"
            />
        </div>
    </DemoSettings>

    <DemoGroup column>
        <DataView
            :value="products"
            :paginator="showPaginator"
            :paginator-position="paginatorPosition"
            :rows="paginatorRows"
            :sort-field="isSortable ? sortField : undefined"
            :sort-order="isSortable ? sortOrder : undefined"
            data-key="id"
        >
            <template #list="slotProps">
                <div class="flex flex-col">
                    <div v-for="(item, index) in slotProps.items" :key="index">
                        <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <div class="md:w-40 relative">
                                <img class="block xl:block mx-auto rounded w-full" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name">
                                <div class="absolute bg-black/70 rounded-border" style="left: 4px; top: 4px">
                                    <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" />
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                    <div>
                                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                                        <div class="text-lg font-medium mt-2">
                                            {{ item.name }}
                                        </div>
                                    </div>
                                    <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                        <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="material-icons text-yellow-500">star</i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col md:items-end gap-8">
                                    <span class="text-xl font-semibold">${{ item.price }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <Button outlined>
                                            <template #icon>
                                                <i class="material-icons">favorite</i>
                                            </template>
                                        </Button>

                                        <Button
                                            label="Buy Now"
                                            :disabled="item.inventoryStatus === 'OUTOFSTOCK'"
                                            class="flex-auto md:flex-initial whitespace-nowrap"
                                        >
                                            <template #icon>
                                                <i class="material-icons">shopping_cart</i>
                                            </template>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </DemoGroup>
</template>

<script setup lang="ts">
    import DataView from 'primevue/dataview';

    import { ref, onMounted, computed } from 'vue';
    import { MockDataService } from '../../mockData.service';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    onMounted(async () => {
        products.value = (await MockDataService.getProductsSmallAsync());
    });

    const products = ref();

    const showTopPaginator = ref(true);
    const showBottomPaginator = ref(false);
    const showPaginator = computed(() => showTopPaginator.value || showBottomPaginator.value);
    const paginatorRows = computed(() => showPaginator.value ? 5 : undefined);
    const paginatorPosition = computed(() => {
        if (showTopPaginator.value && showBottomPaginator.value) {
            return 'both';
        } else if (showTopPaginator.value) {
            return 'top';
        } else if (showBottomPaginator.value) {
            return 'bottom';
        }
        return undefined;
    });

    const isSortable = ref(false);
    const sortFieldOptions = [
        { label: 'Sort by Name', value: 'name' },
        { label: 'Sort by Price', value: 'price' },
        { label: 'Sort by Category', value: 'category' },
        { label: 'Sort by Quantity', value: 'quantity' },
        { label: 'Sort by Rating', value: 'rating' },
        { label: 'Sort by Status', value: 'inventoryStatus' }
    ];

    const sortField = ref('name');
    const isAscendingSort = ref(true);
    const sortOrder = computed(() => isAscendingSort.value ? 1 : -1);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
    };
</script>
