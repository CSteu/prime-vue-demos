<template>
    <DemoSettings
        v-model:disabled="isDisabled"
        v-model:invalid="isInvalid"
    />

    <DemoGroup title="Basic">
        <div class="flex items-center gap-2">
            <Checkbox
                v-model="binaryVal"
                input-id="is-binary"
                binary
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
            <label for="is-invalid">Binary</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox
                v-model="indeterminiteVal"
                input-id="is-indeterminite"
                binary
                indeterminate
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
            <label for="is-indeterminite">Indeterminite</label>
        </div>
    </DemoGroup>

    <DemoGroup title="Group" column>
        <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
                <Checkbox
                    v-model="pizza"
                    input-id="ingredient1"
                    name="pizza"
                    value="Cheese"
                    :disabled="isDisabled"
                    :invalid="isInvalid"
                />
                <label for="ingredient1"> Cheese </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox
                    v-model="pizza"
                    input-id="ingredient2"
                    name="pizza"
                    value="Mushroom"
                    :disabled="isDisabled"
                    :invalid="isInvalid"
                />
                <label for="ingredient2"> Mushroom </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox
                    v-model="pizza"
                    input-id="ingredient3"
                    name="pizza"
                    value="Pepper"
                    :disabled="isDisabled"
                    :invalid="isInvalid"
                />
                <label for="ingredient3"> Pepper </label>
            </div>
            <div class="flex items-center gap-2">
                <Checkbox
                    v-model="pizza"
                    input-id="ingredient4"
                    name="pizza"
                    value="Onion"
                    :disabled="isDisabled"
                    :invalid="isInvalid"
                />
                <label for="ingredient4"> Onion </label>
            </div>
        </div>

        <div class="text-center">
            Selected Pizza Ingredients: {{ pizza }}
        </div>
    </DemoGroup>

    <DemoGroup title="Sizes">
        <div class="flex items-center gap-2">
            <Checkbox
                v-model="size"
                input-id="size_small"
                name="size"
                value="Small"
                size="small"
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
            <label for="size_small" class="text-sm">Small</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox
                v-model="size"
                input-id="size_normal"
                name="size"
                value="Normal"
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
            <label for="size_normal">Normal</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox
                v-model="size"
                input-id="size_large"
                name="size"
                value="Large"
                size="large"
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
            <label for="size_large" class="text-lg">Large</label>
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const binaryVal = ref(false);
    const indeterminiteVal = ref(false);

    const isDisabled = ref(false);
    const isInvalid = ref(false);

    const pizza = ref();
    const size = ref();
</script>