<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
        align-y="top"
    >
        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
                <Checkbox v-model="showCheckmark" input-id="show-checkmark" binary />
                <label for="show-checkmark">Checkmark</label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox v-model="showHighlight" input-id="show-highlight" binary />
                <label for="show-highlight">Highlight Selected</label>
            </div>

            <div class="flex items-center gap-2">
                <Checkbox v-model="isStriped" input-id="is-striped" binary />
                <label for="is-striped">Striped</label>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
                <label for="show-filter">Filter</label>
                <Select
                    v-model="filterType"
                    input-id="filter-type"
                    :options="filterOptions"
                    option-label="label"
                    option-value="value"
                    fluid
                    class="max-w-48"
                />
            </div>
        </div>
    </DemoSettings>

    <DemoGroup>
        <Listbox
            v-model="value"
            :options="cities"
            option-label="name"
            :checkmark="showCheckmark"
            :highlight-on-select="showHighlight"
            :filter="showFilter"
            :disabled="isDisabled"
            :invalid="isInvalid"
            class="w-56"
        />
    </DemoGroup>

    <DemoGroup title="Options">
        <div class="text-center">
            <div class="font-bold">
                Virtual Scroll
                <span class="text-xs">&nbsp;(100,000 items)</span>
            </div>
            <Listbox
                v-model="virtualScrollVal"
                :options="virtualScrollItems"
                option-label="label"
                option-value="value"
                :virtual-scroller-options="{ itemSize: 38 }"
                striped
                list-style="height:250px"
                :checkmark="showCheckmark"
                :highlight-on-select="showHighlight"
                :filter="showFilter"
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="w-56"
            />
        </div>
        <div class="text-center">
            <div class="font-bold">
                Grouped
            </div>
            <Listbox
                v-model="groupedVal"
                :options="groupedCities"
                option-label="label"
                option-group-label="label"
                option-group-children="items"
                list-style="max-height:250px"
                :checkmark="showCheckmark"
                :highlight-on-select="showHighlight"
                :filter="showFilter"
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="w-56"
            >
                <template #optiongroup="slotProps">
                    <div class="flex items-center">
                        <img
                            :alt="slotProps.option.name"
                            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                            :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
                            style="width: 18px"
                        >
                        <div>{{ slotProps.option.label }}</div>
                    </div>
                </template>
            </Listbox>
        </div>
    </DemoGroup>
</template>

<script setup>
    import Listbox from 'primevue/listbox';
    import { ref, computed } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const value = ref();

    const showCheckmark = ref(false);
    const showHighlight = ref(true);
    const isStriped = ref(false);

    const virtualScrollVal = ref();
    const isDisabled = ref(false);
    const isInvalid = ref(false);

    const cities = ref([
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ]);

    const filterType = ref(null);
    const showFilter = computed(() => filterType.value !== null);
    const filterOptions = ref([
        { label: 'None', value: null },
        { label: 'Starts with', value: 'startsWith' },
        { label: 'Contains', value: 'contains' },
        { label: 'Ends with', value: 'endsWith' }
    ]);

    const virtualScrollItems = ref(Array.from({ length: 100000 }, (_, i) => ({ label: `Item #${i}`, value: i })));


    const groupedVal = ref();
    const groupedCities = ref([
        {
            label: 'Germany',
            code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ]);


</script>
