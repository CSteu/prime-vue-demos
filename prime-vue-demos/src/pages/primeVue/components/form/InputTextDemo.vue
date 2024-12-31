
<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    />

    <DemoGroup title="Basic">
        <div class="flex flex-col items-center gap-1">
            <label for="input-text-basic">Basic</label>
            <InputText
                id="input-text-basic"
                v-model="basicVal"
                type="text"
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
        </div>

        <div class="flex flex-col items-center gap-1">
            <label for="input-text-help">w/ Help Message</label>
            <InputText
                id="input-text-help"
                v-model="helpTextVal"
                aria-describedby="username-help"
                :disabled="isDisabled"
                :invalid="isInvalid"
            />
            <Message size="small" severity="secondary" variant="simple">
                This is a descriptive message
            </Message>
        </div>
    </DemoGroup>

    <DemoGroup title="Sizes">
        <InputText
            v-model="smallVal"
            type="text"
            size="small"
            placeholder="Small"
            :disabled="isDisabled"
            :invalid="isInvalid"
        />

        <InputText
            v-model="normVal"
            type="text"
            placeholder="Normal"
            :disabled="isDisabled"
            :invalid="isInvalid"
        />

        <InputText
            v-model="largeVal"
            type="text"
            size="large"
            placeholder="Large"
            :disabled="isDisabled"
            :invalid="isInvalid"
        />
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const isDisabled = ref(false);
    const isInvalid = ref(false);

    const basicVal = ref(null);
    const helpTextVal = ref(null);

    const smallVal = ref(null);
    const normVal = ref(null);
    const largeVal = ref(null);
</script>
