<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    >
        <div class="flex items-center gap-2">
            <Checkbox v-model="showMeter" input-id="show-feedback" binary />
            <label for="show-feedback">Show Meter</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showMaskToggle" input-id="show-mask" binary />
            <label for="show-mask">Show Mask Toggle</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <Password
            id="basic"
            v-model="basicVal"
            :feedback="showMeter"
            :toggle-mask="showMaskToggle"
            fluid
            :invalid="isInvalid"
            :disabled="isDisabled"
            class="max-w-56"
        />
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const isInvalid = ref(false);
    const isDisabled = ref(false);

    const basicVal = ref(null);
    const showMeter = ref(true);
    const showMaskToggle = ref(true);
</script>
