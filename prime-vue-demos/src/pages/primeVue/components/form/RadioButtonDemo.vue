<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    />

    <DemoGroup title="Basic">
        <div class="flex items-center gap-2">
            <RadioButton
                v-model="ingredient"
                input-id="ingredient1"
                name="pizza"
                value="Cheese"
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
            <label for="ingredient1">Cheese</label>
        </div>
        <div class="flex items-center gap-2">
            <RadioButton
                v-model="ingredient"
                input-id="ingredient2"
                name="pizza"
                value="Mushroom"
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
            <label for="ingredient2">Mushroom</label>
        </div>
        <div class="flex items-center gap-2">
            <RadioButton
                v-model="ingredient"
                input-id="ingredient3"
                name="pizza"
                value="Pepper"
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
            <label for="ingredient3">Pepper</label>
        </div>
        <div class="flex items-center gap-2">
            <RadioButton
                v-model="ingredient"
                input-id="ingredient4"
                name="pizza"
                value="Onion"
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
            <label for="ingredient4">Onion</label>
        </div>
    </DemoGroup>

    <DemoGroup title="Sizes">
        <div class="flex items-center gap-2">
            <RadioButton
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
            <RadioButton
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
            <RadioButton
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

    const ingredient = ref('');
    const size = ref('');

    const isDisabled = ref(false);
    const isInvalid = ref(false);
</script>
