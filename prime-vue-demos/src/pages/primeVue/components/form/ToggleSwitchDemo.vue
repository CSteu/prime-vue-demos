<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    />

    <DemoGroup>
        <ToggleSwitch v-model="checked" />
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';

    const checked = ref(false);

    const isInvalid = ref(false);
    const isDisabled = ref(false);
</script>
