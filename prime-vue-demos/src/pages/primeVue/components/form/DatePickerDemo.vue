<template>
    <DemoSettings
        v-model:disabled="isDisabled"
        v-model:invalid="isInvalid"
    />

    <DemoGroup>
        <div class="flex items-center gap-2">
            <label for="date-input">
                Date:
            </label>

            <DatePicker
                v-model="date"
                placeholder="Select a date"
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const date = ref();
    const isDisabled = ref(false);
    const isInvalid = ref(false);
</script>
