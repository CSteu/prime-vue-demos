<template>
    <DemoSettings
        v-model:disabled="isDisabled"
        v-model:invalid="isInvalid"
    >
        <div class="flex items-center gap-2">
            <Checkbox v-model="isLoading" input-id="is-loading" binary />
            <label for="is-loading">Loading</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showClearButton" input-id="showClear" binary />
            <label for="show-clear">Clearable</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <div class="text-center">
            <div class="font-bold">
                Basic
            </div>
            <CascadeSelect
                v-model="basicVal"
                :options="countries"
                option-label="cname"
                option-group-label="name"
                :option-group-children="['states', 'cities']"
                placeholder="Select a City"
                :show-clear="showClearButton"
                :loading="isLoading"
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="w-48"
            />
        </div>
    </DemoGroup>

    <DemoGroup title="Sizes">
        <CascadeSelect
            v-model="smallVal"
            :options="countries"
            option-label="cname"
            option-group-label="name"
            :option-group-children="['states', 'cities']"
            size="small"
            placeholder="Small"
            :show-clear="showClearButton"
            :loading="isLoading"
            :disabled="isDisabled"
            :invalid="isInvalid"
            class="w-48"
        />
        <CascadeSelect
            v-model="normalVal"
            :options="countries"
            option-label="cname"
            option-group-label="name"
            :option-group-children="['states', 'cities']"
            placeholder="Normal"
            :show-clear="showClearButton"
            :loading="isLoading"
            :disabled="isDisabled"
            :invalid="isInvalid"
            class="w-48"
        />
        <CascadeSelect
            v-model="largeVal"
            :options="countries"
            option-label="cname"
            option-group-label="name"
            :option-group-children="['states', 'cities']"
            size="large"
            placeholder="Large"
            :show-clear="showClearButton"
            :loading="isLoading"
            :disabled="isDisabled"
            :invalid="isInvalid"
            class="w-48"
        />
    </DemoGroup>
</template>

<script setup>
    import CascadeSelect from 'primevue/cascadeselect'; // Not in global scope.  If we want to use this elsewhere, add to that component or main.ts for global scoping
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const basicVal = ref();
    const smallVal = ref();
    const normalVal = ref();
    const largeVal = ref();

    const showClearButton = ref(false);
    const isLoading = ref(false);
    const isInvalid = ref(false);
    const isDisabled = ref(false);

    const countries = ref([
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        { cname: 'Sydney', code: 'A-SY' },
                        { cname: 'Newcastle', code: 'A-NE' },
                        { cname: 'Wollongong', code: 'A-WO' }
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        { cname: 'Brisbane', code: 'A-BR' },
                        { cname: 'Townsville', code: 'A-TO' }
                    ]
                }
            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        { cname: 'Montreal', code: 'C-MO' },
                        { cname: 'Quebec City', code: 'C-QU' }
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        { cname: 'Ottawa', code: 'C-OT' },
                        { cname: 'Toronto', code: 'C-TO' }
                    ]
                }
            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        { cname: 'Los Angeles', code: 'US-LA' },
                        { cname: 'San Diego', code: 'US-SD' },
                        { cname: 'San Francisco', code: 'US-SF' }
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        { cname: 'Jacksonville', code: 'US-JA' },
                        { cname: 'Miami', code: 'US-MI' },
                        { cname: 'Tampa', code: 'US-TA' },
                        { cname: 'Orlando', code: 'US-OR' }
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        { cname: 'Austin', code: 'US-AU' },
                        { cname: 'Dallas', code: 'US-DA' },
                        { cname: 'Houston', code: 'US-HO' }
                    ]
                }
            ]
        }
    ]);
</script>