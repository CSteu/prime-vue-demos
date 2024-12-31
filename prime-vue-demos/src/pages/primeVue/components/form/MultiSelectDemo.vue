<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    />

    <DemoGroup>
        <div>
            <label for="basic" class="font-bold">Basic</label>
            <MultiSelect
                v-model="selectedCities"
                input-id="basic"
                :options="cities"
                option-label="name"
                filter
                placeholder="Select Cities"
                :max-selected-labels="3"
                fluid
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="max-w-56"
            />
        </div>

        <div>
            <label for="chips" class="font-bold">Chips</label>
            <MultiSelect
                v-model="selectedCities"
                input-id="chips"
                display="chip"
                :options="cities"
                option-label="name"
                filter
                placeholder="Select Cities"
                :max-selected-labels="3"
                fluid
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="max-w-56"
            />
        </div>

        <div>
            <label for="filter" class="font-bold">Filter</label>
            <MultiSelect
                v-model="selectedCities"
                input-id="filter"
                :options="cities"
                option-label="name"
                filter
                placeholder="Select Cities"
                :max-selected-labels="3"
                fluid
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="max-w-56"
            />
        </div>

        <div>
            <label for="loading" class="font-bold">Loading</label>
            <MultiSelect
                v-model="selectedCities"
                input-id="filter"
                :options="cities"
                option-label="name"
                filter
                placeholder="Loading..."
                :max-selected-labels="3"
                fluid
                loading
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="max-w-56"
            />
        </div>
    </DemoGroup>

    <DemoGroup title="Sizes">
        <MultiSelect
            v-model="smallVal"
            :options="cities"
            option-label="name"
            :max-selected-labels="3"
            size="small"
            placeholder="Small"
            fluid
            :disabled="isDisabled"
            :invalid="isInvalid"
            class="max-w-56"
        />
        <MultiSelect
            v-model="normalVal"
            :options="cities"
            option-label="name"
            :max-selected-labels="3"
            placeholder="Normal"
            fluid
            :disabled="isDisabled"
            :invalid="isInvalid"
            class="max-w-56"
        />
        <MultiSelect
            v-model="largeVal"
            :options="cities"
            option-label="name"
            :max-selected-labels="3"
            size="large"
            placeholder="Large"
            fluid
            :disabled="isDisabled"
            :invalid="isInvalid"
            class="max-w-56"
        />
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const selectedCities = ref();
    const smallVal = ref();
    const normalVal = ref();
    const largeVal = ref();
    const isInvalid = ref(false);
    const isDisabled = ref(false);

    const cities = ref([
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ]);
</script>