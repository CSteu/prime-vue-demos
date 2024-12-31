<template>
    <DataTable
        :value="products"
        :loading="props.loading"
        :show-gridlines="props.showGridlines"
        :show-striped="props.showStriped"
        :resizable-columns="props.resizeableColumns"
        :paginator="props.paginator"
        :rows-per-page-options="[5, 10, 20, 50]"
        :rows="5"
        :scrollable="props.scrollable"
        :scroll-height="props.scrollable ? '400px' : undefined"
        table-style="min-width: 50rem"
        :size="props.size"
        :pt="{
            column: {
                bodycell: ({ state }) => ({
                    class: [{ '!py-0': state['d_editing'] }]
                })
            }
        }"
        edit-mode="cell"
        @cell-edit-complete="onCellEditComplete"
    >
        <Column
            v-for="col of columns"
            :key="col.field"
            :field="col.field"
            :header="col.header"
            :sortable="props.sortable"
            style="width: 25%"
        >
            <template #body="{ data, field }">
                {{ field === 'price' ? formatCurrency(data[field]) : data[field] }}
            </template>
            <template #editor="{ data, field }">
                <template v-if="field !== 'price'">
                    <InputText v-model="data[field]" autofocus fluid />
                </template>
                <template v-else>
                    <InputNumber
                        v-model="data[field]"
                        mode="currency"
                        currency="USD"
                        locale="en-US"
                        autofocus
                        fluid
                    />
                </template>
            </template>
        </Column>
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

    const columns = ref([
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'price', header: 'Price' }
    ]);

    const onCellEditComplete = (event) => {
        let { data, newValue, field } = event;

        switch (field) {
            case 'quantity':
            case 'price':
                if (isPositiveInteger(newValue)) data[field] = newValue;
                else event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0) data[field] = newValue;
                else event.preventDefault();
                break;
        }
    };

    const isPositiveInteger = (val) => {
        let str = String(val);

        str = str.trim();

        if (!str) {
            return false;
        }

        str = str.replace(/^0+/, '') || '0';
        const num = Math.floor(Number(str));

        return num !== Infinity && String(num) === str && num >= 0;
    };

    const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
</script>