<template>
    <DataTable
        v-model:editingRows="editingRows"
        :value="products"
        :show-gridlines="props.showGridlines"
        :show-striped="props.showStriped"
        :resizable-columns="props.resizeableColumns"
        :paginator="props.paginator"
        :rows-per-page-options="[5, 10, 20, 50]"
        :rows="5"
        :scrollable="props.scrollable"
        :scroll-height="props.scrollable ? '400px' : undefined"
        :loading="props.loading"
        table-style="min-width: 50rem"
        data-key="id"
        :size="props.size"
        :pt="{
            column: {
                bodycell: ({ state }) => ({
                    style: state['d_editing'] && 'padding-top: 0.75rem; padding-bottom: 0.75rem'
                })
            }
        }"
        edit-mode="row"
        @row-edit-save="onRowEditSave"
    >
        <Column
            field="code"
            header="Code"
            :sortable="props.sortable"
            style="width: 20%"
        >
            <template #editor="{ data, field }">
                <InputText v-model="data[field]" fluid />
            </template>
        </Column>

        <Column
            field="name"
            header="Name"
            :sortable="props.sortable"
            style="width: 20%"
        >
            <template #editor="{ data, field }">
                <InputText v-model="data[field]" fluid />
            </template>
        </Column>

        <Column
            field="inventoryStatus"
            header="Status"
            :sortable="props.sortable"
            style="width: 20%"
        >
            <template #editor="{ data, field }">
                <Select
                    v-model="data[field]"
                    :options="statuses"
                    option-label="label"
                    option-value="value"
                    placeholder="Select a Status"
                    fluid
                >
                    <template #option="slotProps">
                        <Tag :value="slotProps.option.value" :severity="getStatusLabel(slotProps.option.value)" />
                    </template>
                </Select>
            </template>
            <template #body="slotProps">
                <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
            </template>
        </Column>

        <Column
            field="price"
            header="Price"
            :sortable="props.sortable"
            style="width: 20%"
        >
            <template #body="{ data, field }">
                {{ formatCurrency(data[field]) }}
            </template>
            <template #editor="{ data, field }">
                <InputNumber
                    v-model="data[field]"
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                    fluid
                />
            </template>
        </Column>

        <Column :row-editor="true" style="width: 10%; min-width: 8rem" body-style="text-align:center" />
    </DataTable>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import { MockDataService } from '../../../mockData.service';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const products = ref<Array<any>>([]);

    onMounted(async () => {
        products.value = await MockDataService.getProductsMiniAsync();
    })

    const props = defineProps({
        loading: { type: Boolean, required: true },
        showGridlines: { type: Boolean, required: true },
        showStriped: { type: Boolean, required: true },
        resizeableColumns: { type: Boolean, required: true },
        paginator: { type: Boolean, required: true },
        sortable: { type: Boolean, required: true },
        scrollable: { type: Boolean, required: true },
        size: { type: String as () => 'small' | 'large', default: null }
    });

    const editingRows = ref([]);
    const statuses = ref([
        { label: 'In Stock', value: 'INSTOCK' },
        { label: 'Low Stock', value: 'LOWSTOCK' },
        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ]);

    const onRowEditSave = (event) => {
        const { newData, index } = event;
        products.value[index] = newData;
    };

    const getStatusLabel = (status) => {
        switch (status) {
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

    const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
</script>