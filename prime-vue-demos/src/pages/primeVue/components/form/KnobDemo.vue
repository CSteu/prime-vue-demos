<template>
    <DemoSettings
        v-model:disabled="isDisabled"
        v-model:invalid="isInvalid"
        align-y="top"
    >
        <div class="flex flex-col justify-start gap-4">
            <div class="flex flex-col items-center gap-1 max-w-40">
                <label for="size">Size</label>
                <InputNumber
                    id="size"
                    v-model="size"
                    show-buttons
                    :min="0"
                    fluid
                />
            </div>

            <div class="flex flex-col items-center gap-1 max-w-40">
                <label for="stroke-width">Stroke Width</label>
                <InputNumber
                    id="stroke-width"
                    v-model="strokeWidth"
                    :min="0"
                    show-buttons
                    fluid
                />
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <div class="flex flex-col items-center gap-1 max-w-40">
                <label for="min-val">Min</label>
                <InputNumber
                    id="min-val"
                    v-model="min"
                    show-buttons
                    fluid
                />
            </div>

            <div class="flex flex-col items-center gap-1 max-w-40">
                <label for="max-val">Max</label>
                <InputNumber
                    id="max-val"
                    v-model="max"
                    show-buttons
                    fluid
                />
            </div>

            <div class="flex flex-col items-center gap-1 max-w-40">
                <label for="step-val">Step</label>
                <InputNumber
                    id="step-val"
                    v-model="step"
                    show-buttons
                    fluid
                />
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <div class="flex flex-col items-center gap-1 max-w-40">
                <label for="value-color">Value Color:</label>
                <div class="flex items-center gap-1">
                    <InputGroup>
                        <InputGroupAddon>#</InputGroupAddon>
                        <InputText id="value-color" v-model="valueColor" />
                    </InputGroup>
                    <ColorPicker v-model="valueColor" />
                </div>
            </div>

            <div class="flex flex-col items-center gap-1 max-w-40">
                <label for="range-color">Range Color:</label>
                <div class="flex items-center gap-1">
                    <InputGroup>
                        <InputGroupAddon>#</InputGroupAddon>
                        <InputText id="range-color" v-model="rangeColor" />
                    </InputGroup>
                    <ColorPicker v-model="rangeColor" />
                </div>
            </div>

            <div class="flex flex-col items-center gap-1 max-w-40">
                <label for="text-color">Text Color:</label>
                <div class="flex items-center gap-1">
                    <InputGroup>
                        <InputGroupAddon>#</InputGroupAddon>
                        <InputText id="text-color" v-model="textColor" />
                    </InputGroup>
                    <ColorPicker v-model="textColor" />
                </div>
            </div>
        </div>

        <div class="self-center flex flex-col gap-4">
            <div class="flex items-center gap-2">
                <Checkbox v-model="showValue" input-id="show-value" binary />
                <label for="show-value">Show Value</label>
            </div>

            <div class="flex items-center gap-2">
                <Checkbox v-model="isReadonly" input-id="is-readonly" binary />
                <label for="is-readonly">ReadOnly</label>
            </div>
        </div>
    </DemoSettings>

    <DemoGroup>
        <Knob
            v-model="value"
            :stroke-width="strokeWidth"
            :size="size"
            :min="min"
            :max="max"
            :step="step"
            :show-value="showValue"
            :range-color="`#${rangeColor}`"
            :value-color="`#${valueColor}`"
            :text-color="`#${textColor}`"
            value-template="{value}%"
            :disabled="isDisabled"
            :readonly="isReadonly"
            :invalid="isInvalid"
        />
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import Knob from 'primevue/knob';

    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const value = ref(60);
    const isDisabled = ref(false);
    const isReadonly = ref(false);
    const isInvalid = ref(false);
    const showValue = ref(true);

    const size = ref(200);
    const strokeWidth = ref(5);
    const min = ref(-50);
    const max = ref(50);
    const step = ref(5);
    const rangeColor = ref('0000ff');
    const valueColor = ref('aaa');
    const textColor  = ref('000000');
</script>