<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    >
        <div class="flex items-center gap-2">
            <label for="display-mode">Display: </label>
            <Select
                v-model="displayMode"
                :options="displayModes"
                option-label="label"
                option-value="value"
                class="w-32"
            />
        </div>

        <div class="flex items-center gap-1">
            <Checkbox v-model="showFilter" input-id="show-filter" binary />
            <Select
                v-model="filterMode"
                :options="filterModes"
                option-label="label"
                option-value="value"
                class="w-44"
            />
        </div>

        <div class="flex items-center gap-1">
            <Checkbox v-model="isLoading" input-id="is-loading" binary />
            <Select
                v-model="loadingMode"
                :options="loadingModes"
                option-label="label"
                option-value="value"
                class="w-44"
            />
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showClearButton" input-id="show-clear" binary />
            <label for="show-clear">Clearable</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <div class="flex flex-col gap-2">
            <div class="font-bold">
                Single
            </div>
            <TreeSelect
                v-model="singleVal"
                :options="nodes"
                selection-mode="single"
                :display="displayMode"
                :filter="showFilter"
                :filter-mode="filterMode"
                :show-clear="showClearButton"
                :max-selection-limit="maxSelectable"
                :loading="isLoading"
                :loading-mode="loadingMode"
                :disabled="isDisabled"
                :invalid="isInvalid"
                placeholder="Select Item"
                class="w-72"
            />

            <div class="text-xs">
                {{ singleVal }}
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <div class="font-bold">
                Multiple
            </div>
            <TreeSelect
                v-model="multipleVal"
                :options="nodes"
                selection-mode="multiple"
                :display="displayMode"
                :filter="showFilter"
                :filter-mode="filterMode"
                :show-clear="showClearButton"
                :max-selected-labels="maxSelectable"
                :selected-items-label="`${multipleSelectedItemCount} Selected`"
                :loading="isLoading"
                :loading-mode="loadingMode"
                :disabled="isDisabled"
                :invalid="isInvalid"
                placeholder="Select Item(s)"
                class="w-72"
            />
            <div class="text-xs">
                {{ multipleVal }}
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <div class="font-bold">
                Checkbox
            </div>
            <TreeSelect
                v-model="checkboxVal"
                :options="nodes"
                selection-mode="checkbox"
                :display="displayMode"
                :filter="showFilter"
                :filter-mode="filterMode"
                :show-clear="showClearButton"
                :max-selected-labels="maxSelectable"
                :selected-items-label="`${checkboxSelectedItemCount} Selected`"
                :loading="isLoading"
                :loading-mode="loadingMode"
                :disabled="isDisabled"
                :invalid="isInvalid"
                placeholder="Select Item(s)"
                class="w-72"
            />

            <div class="text-xs">
                {{ checkboxVal }}
            </div>
        </div>
    </DemoGroup>

    <DemoGroup title="Sizes">
        <div class="flex flex-col gap-2">
            <div class="font-bold">
                Small
            </div>
            <TreeSelect
                v-model="smallVal"
                :options="nodes"
                selection-mode="single"
                :display="displayMode"
                :filter="showFilter"
                :filter-mode="filterMode"
                :show-clear="showClearButton"
                :max-selection-limit="maxSelectable"
                :loading="isLoading"
                :loading-mode="loadingMode"
                :disabled="isDisabled"
                :invalid="isInvalid"
                placeholder="Select Item"
                class="w-72"
            />
        </div>

        <div class="flex flex-col gap-2">
            <div class="font-bold">
                Normal
            </div>
            <TreeSelect
                v-model="normalVal"
                :options="nodes"
                selection-mode="single"
                :display="displayMode"
                :filter="showFilter"
                :filter-mode="filterMode"
                :show-clear="showClearButton"
                :max-selection-limit="maxSelectable"
                :loading="isLoading"
                :loading-mode="loadingMode"
                :disabled="isDisabled"
                :invalid="isInvalid"
                placeholder="Select Item"
                class="w-72"
            />
        </div>

        <div class="flex flex-col gap-2">
            <div class="font-bold">
                Large
            </div>
            <TreeSelect
                v-model="largeVal"
                :options="nodes"
                selection-mode="single"
                :display="displayMode"
                :filter="showFilter"
                :filter-mode="filterMode"
                :show-clear="showClearButton"
                :max-selection-limit="maxSelectable"
                :loading="isLoading"
                :loading-mode="loadingMode"
                :disabled="isDisabled"
                :invalid="isInvalid"
                placeholder="Select Item"
                class="w-72"
            />
        </div>
    </DemoGroup>
</template>

<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue';
    import { MockDataService } from '../../mockData.service';
    import DemoSettings from '../../../../components/DemoSettings.vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';

    const singleVal = ref(null);
    const multipleVal = ref(null);
    const checkboxVal = ref(null);

    const smallVal = ref(null);
    const normalVal = ref(null);
    const largeVal = ref(null);

    const multipleSelectedItemCount = computed(() => multipleVal.value ? Object.keys(multipleVal.value).length : 0);
    const checkboxSelectedItemCount = computed(() => checkboxVal.value ? Object.keys(checkboxVal.value).length : 0);

    const displayMode = ref<'comma' | 'chip'>('comma');
    const displayModes = computed(() => [
        { label: 'Comma', value: 'comma' },
        { label: 'Chip', value: 'chip' }
    ]);

    const isLoading = ref(false);
    const loadingMode = ref<'mask' | 'icon'>('mask');
    const loadingModes = computed(() => [
        { label: 'Loading (Mask)', value: 'mask' },
        { label: 'Loading (Icon)', value: 'icon' }
    ]);

    const showFilter = ref(false);
    const filterMode = ref<'lenient' | 'strict'>('lenient');
    const filterModes = computed(() => [
        { label: 'Filter (Lenient)', value: 'lenient' },
        { label: 'Filter (Strict)', value: 'strict' }
    ]);

    const nodes = ref(null);

    const isDisabled = ref(false);
    const isInvalid = ref(false);

    const showClearButton = ref(false);
    const maxSelectable = ref(3);

    // const selectionMode = ref<'single' | 'multiple' | 'checkbox'>('single');

    onMounted(async () => {
        nodes.value = await MockDataService.getTreeNodesAsync();
    });
</script>
