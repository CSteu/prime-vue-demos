<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    />

    <DemoGroup>
        <div class="flex items-center gap-1">
            <label for="basic" class="font-bold">Basic:</label>
            <InputOtp
                id="basic"
                v-model="basicVal"
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div class="flex items-center gap-1">
            <label for="mask" class="font-bold">Mask:</label>
            <InputOtp
                id="mask"
                v-model="maskVal"
                mask
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div class="flex items-center gap-1">
            <label for="int-only" class="font-bold">Integer Only</label>
            <InputOtp
                id="mask"
                v-model="intOnlyVal"
                mask
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>
    </DemoGroup>

    <DemoGroup title="Sizes">
        <div class="flex items-center gap-1">
            <label for="small" class="font-bold">Small</label>
            <InputOtp
                id="small"
                v-model="smallVal"
                size="small"
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div class="flex items-center gap-1">
            <label for="normal" class="font-bold">Normal</label>
            <InputOtp
                id="normal"
                v-model="normalVal"
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div class="flex items-center gap-1">
            <label for="large" class="font-bold">Large</label>
            <InputOtp
                id="large"
                v-model="largeVal"
                size="large"
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import InputOtp from 'primevue/inputotp';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const basicVal = ref(null);
    const maskVal = ref(null);
    const intOnlyVal = ref(null);

    const isInvalid = ref(false);
    const isDisabled = ref(false);

    const smallVal = ref(null);
    const normalVal = ref(null);
    const largeVal = ref(null);
</script>
