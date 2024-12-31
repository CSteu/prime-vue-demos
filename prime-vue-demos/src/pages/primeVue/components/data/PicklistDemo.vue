<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox v-model="isStriped" input-id="picklist-striped" binary />
            <label for="picklist-striped">Striped</label>
        </div>
    </DemoSettings>

    <DemoGroup title="Basic">
        <PickList
            v-model="products"
            data-key="id"
            :responsive="false"
            :striped="isStriped"
            class="w-full max-w-7xl"
        >
            <template #option="{ option }">
                {{ option.name }}
            </template>
        </PickList>
    </DemoGroup>

    <DemoGroup title="Responsive (vertical below 1200px)">
        <PickList
            v-model="products"
            data-key="id"
            breakpoint="1200px"
            :striped="isStriped"
            class="w-full max-w-7xl"
        >
            <template #option="{ option }">
                {{ option.name }}
            </template>
        </PickList>
    </DemoGroup>
</template>

<script setup lang="ts">
    import PickList from 'primevue/picklist';

    import { ref, onMounted } from 'vue';
    import { MockDataService } from '../../mockData.service'
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const products = ref(null);

    const isStriped = ref(false);

    onMounted(async () => {
        products.value = [await MockDataService.getProductsSmallAsync(), []];    });

</script>

<style scoped>
    .picklist-container {
        width: 100%;
        max-width: 800px;
    }
</style>