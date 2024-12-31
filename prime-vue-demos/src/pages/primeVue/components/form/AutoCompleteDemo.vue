<template>
    <DemoSettings
        v-model:isInvalid="isInvalid"
        v-model:isDisabled="isDisabled"
    >
        <div class="flex items-center gap-2">
            <Checkbox v-model="isLoading" input-id="is-loading" binary />
            <label for="is-loading">Loading</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <div class="text-center">
            <div class="font-bold">
                Basic
            </div>
            <AutoComplete
                v-model="basicVal"
                :suggestions="basicItems"
                :disabled="isDisabled"
                :invalid="isInvalid"
                :loading="isLoading"
                @complete="basicSearch"
            />
        </div>

        <div class="text-center">
            <div class="font-bold">
                Objects
            </div>
            <AutoComplete
                v-model="selectedCountry"
                option-label="name"
                :suggestions="filteredCountries"
                :disabled="isDisabled"
                :invalid="isInvalid"
                :loading="isLoading"
                @complete="objectsSearch"
            />
        </div>

        <div class="text-center">
            <div class="font-bold">
                DropDown
            </div>
            <AutoComplete
                v-model="dropDownVal"
                dropdown
                :suggestions="dropDownItems"
                :disabled="isDisabled"
                :invalid="isInvalid"
                :loading="isLoading"
                @complete="dropDownSearch"
            />
        </div>

        <div class="text-center">
            <div class="font-bold">
                Group
            </div>

            <AutoComplete
                v-model="groupSelectedCity"
                :suggestions="groupFilteredCities"
                option-label="label"
                option-group-label="label"
                option-group-children="items"
                placeholder="Hint: type 'a'"
                :disabled="isDisabled"
                :invalid="isInvalid"
                :loading="isLoading"
                @complete="groupSearch"
            >
                <template #optiongroup="slotProps">
                    <div class="flex items-center country-item">
                        <img
                            :alt="slotProps.option.label"
                            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                            :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
                            style="width: 18px"
                        >
                        <div>{{ slotProps.option.label }}</div>
                    </div>
                </template>
            </AutoComplete>
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import AutoComplete from 'primevue/autocomplete'; // Not in global scope.  If we want to use this elsewhere, add to that component or main.ts for global scoping
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import { MockDataService } from '../../mockData.service';

    // Basic Demo
    const basicVal = ref('');
    const basicItems = ref([]);
    const basicSearch = (event) => {
        basicItems.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }

    // Objects Demo
    const countries = ref();
    const selectedCountry = ref();
    const filteredCountries = ref();

    const isDisabled = ref(false);
    const isInvalid = ref(false);
    const isLoading = ref(false);

    onMounted(async () => {
        countries.value = await MockDataService.getCountriesAsync();
    });

    const objectsSearch = (event) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                filteredCountries.value = [...countries.value];
            } else {
                filteredCountries.value = countries.value.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
        }, 250);
    }

    // Dropdown Demo
    const dropDownVal = ref('');
    const dropDownItems = ref([]);

    const dropDownSearch = (event) => {
        let _items = [...Array(10).keys()];

        dropDownItems.value = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
    }

    // Group Demo
    import { FilterMatchMode, FilterService } from '@primevue/core/api';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const groupSelectedCity = ref();
    const groupFilteredCities = ref();
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

    const groupSearch = (event) => {
        let query = event.query;
        let newFilteredCities = [];

        for (let country of groupedCities.value) {
            let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);
            if (filteredItems && filteredItems.length) {
                newFilteredCities.push({...country, ...{items: filteredItems}});
            }
        }

        groupFilteredCities.value = newFilteredCities;

    }
</script>