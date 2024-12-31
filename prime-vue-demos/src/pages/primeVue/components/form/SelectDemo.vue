<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    >
        <div class="flex items-center gap-2">
            <Checkbox v-model="isLoading" input-id="is-loading" binary />
            <label for="is-loading">Loading</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <div>
            <label for="basic" class="font-bold">Basic</label>
            <Select
                v-model="selectedCity"
                input-id="basic"
                :options="cities"
                option-label="name"
                placeholder="Select a City"
                fluid
                :disabled="isDisabled"
                :invalid="isInvalid"
                :loading="isLoading"
                class="max-w-56"
            />
        </div>

        <div>
            <label for="checkmark" class="font-bold">Checkmark</label>
            <Select
                v-model="selectedCity"
                input-id="checkmark"
                :options="cities"
                option-label="name"
                placeholder="Select a City"
                fluid
                checkmark
                :disabled="isDisabled"
                :invalid="isInvalid"
                :loading="isLoading"
                class="max-w-56"
            />
        </div>

        <div>
            <label for="editable" class="font-bold">Editable</label>
            <Select
                v-model="selectedCity"
                input-id="editable"
                :options="cities"
                option-label="name"
                placeholder="Select a City"
                fluid
                editable
                :disabled="isDisabled"
                :invalid="isInvalid"
                :loading="isLoading"
                class="max-w-56"
            />
        </div>

        <div>
            <label for="filter" class="font-bold">Filter</label>
            <Select
                v-model="selectedCity"
                input-id="filter"
                :options="cities"
                option-label="name"
                placeholder="Select a City"
                fluid
                filter
                :disabled="isDisabled"
                :invalid="isInvalid"
                :loading="isLoading"
                class="max-w-56"
            />
        </div>

        <div>
            <label for="clear-icon" class="font-bold">Clear Icon</label>
            <Select
                v-model="selectedCity"
                input-id="clear-icon"
                :options="cities"
                option-label="name"
                placeholder="Select a City"
                fluid
                show-clear
                :disabled="isDisabled"
                :invalid="isInvalid"
                :loading="isLoading"
                class="max-w-56"
            />
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const selectedCity = ref();
    const cities = ref([
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ]);


    const isInvalid = ref(false);
    const isDisabled = ref(false);
    const isLoading = ref(false);
</script>
