<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    >
        <div class="flex items-center gap-2 max-w-40">
            <label for="min-input" class="w-12">Min:</label>
            <InputNumber
                v-model="min"
                input-id="min-input"
                :min="0"
                show-buttons
                fluid
                class="max-w-32"
            />
        </div>

        <div class="flex items-center gap-2 max-w-40">
            <label for="max-input" class="w-12">Max:</label>
            <InputNumber
                v-model="max"
                input-id="max-input"
                :min="0"
                show-buttons
                fluid
                class="max-w-32"
            />
        </div>

        <div class="flex items-center gap-2 max-w-40">
            <label for="step-input" class="w-12">Step:</label>
            <InputNumber
                v-model="step"
                input-id="step-input"
                :min="0"
                show-buttons
                fluid
                class="max-w-32"
            />
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isRange" input-id="is-range" binary />
            <label for="is-range">Range</label>
        </div>
    </DemoSettings>

    <DemoGroup column align-x="center">
        <div class="flex items-center gap-8">
            <Slider
                v-model="value"
                :step="step"
                :range="isRange"
                :min="min"
                :max="max"
                :invalid="isInvalid"
                :disabled="isDisabled"
                class="w-72"
            />

            <Slider
                v-model="value"
                :step="step"
                :range="isRange"
                :min="min"
                :max="max"
                :invalid="isInvalid"
                :disabled="isDisabled"
                orientation="vertical"
            />
        </div>

        <div class="flex items-center gap-2">
            <label for="val-input">Value: </label>
            <div>{{ value }}</div>
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const value = ref(50);
    const step = ref(1);
    const min = ref(0);
    const max = ref(100);
    const isRange = ref(false);
    const isInvalid = ref(false);
    const isDisabled = ref(false);

</script>