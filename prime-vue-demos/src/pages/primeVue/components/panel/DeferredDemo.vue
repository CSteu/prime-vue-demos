<template>
    <DemoGroup column>
        <div style="height: 600px">
            Scroll down to lazy load data table.
        </div>

        <Message v-if="!isLazyLoadTriggered" severity="warn">
            Deferred not yet triggered
        </Message>

        <DeferredContent
            role="region"
            aria-live="polite"
            aria-label="Content loaded after page scrolled down"
            @load="onDataLoad"
        >
            <div v-for="product in products" :key="product.id">
                {{ product.name }}
            </div>
        </DeferredContent>
    </DemoGroup>
</template>

<script setup lang="ts">
    import DeferredContent from 'primevue/deferredcontent';
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import { MockDataService, MockProduct } from '../../mockData.service';

    const products = ref<Array<MockProduct>>([]);

    const isLazyLoadTriggered = ref(false);

    const onDataLoad = async () => {
        isLazyLoadTriggered.value = true;
        products.value = await MockDataService.getProductsMiniAsync(1000);
    };
</script>
