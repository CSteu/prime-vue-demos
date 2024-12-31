<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    />

    <DemoGroup title="Basic Mask">
        <div class="flex-auto">
            <label for="input-mask-ssn" class="font-bold block mb-2">SSN</label>
            <InputMask
                id="input-mask-ssn"
                v-model="basicVal1"
                mask="999-99-9999"
                placeholder="999-99-9999"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div class="flex-auto">
            <label for="input-mask-phone" class="font-bold block mb-2">Phone</label>
            <InputMask
                id="input-mask-phone"
                v-model="basicVal2"
                mask="(999) 999-9999"
                placeholder="(999) 999-9999"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div class="flex-auto">
            <label for="input-mask-serial" class="font-bold block mb-2">Serial</label>
            <InputMask
                id="input-mask-serial"
                v-model="basicVal3"
                mask="a*-999-a999"
                placeholder="a*-999-a999"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>
    </DemoGroup>

    <DemoGroup title="Optional Mask">
        <InputMask
            v-model="optionalMaskVal"
            mask="(999) 999-9999? x99999"
            placeholder="(999) 999-9999? x99999"
            :invalid="isInvalid"
            :disabled="isDisabled"
        />
    </DemoGroup>

    <DemoGroup title="Slot Character">
        <InputMask
            v-model="slotCharVal"
            placeholder="99/99/9999"
            mask="99/99/9999"
            slot-char="mm/dd/yyyy"
            :invalid="isInvalid"
            :disabled="isDisabled"
        />
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const isInvalid = ref(false);
    const isDisabled = ref(false);

    // Basic Mask
    const basicVal1 = ref('');
    const basicVal2 = ref('');
    const basicVal3 = ref('');


    // Optional Mask
    const optionalMaskVal = ref('');

    // Slot Char
    const slotCharVal = ref('');
</script>
