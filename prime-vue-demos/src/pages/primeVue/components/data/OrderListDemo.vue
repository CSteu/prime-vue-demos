
<template>
    <DemoGroup>
        <OrderList
            v-model="products"
            data-key="id"
            breakpoint="575px"
            :pt="{
                pcListbox: {
                    root: {
                        class: 'w-full sm:w-56'
                    }
                }
            }"
        >
            <template #option="{option}">
                {{ option.name }}
            </template>
        </OrderList>
    </DemoGroup>
</template>

<script setup lang="ts">
    import OrderList from 'primevue/orderlist';
    import { ref, onMounted } from 'vue';
    import { MockDataService } from '../../mockData.service';
    import DemoGroup from '../../../../components/DemoGroup.vue';

    const products = ref(null);

    onMounted(async () => {
        products.value = await MockDataService.getProductsSmallAsync();
    });
</script>