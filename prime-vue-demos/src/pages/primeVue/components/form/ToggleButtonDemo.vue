<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    />

    <DemoGroup title="Basic">
        <ToggleButton
            v-model="basicVal"
            on-label="On"
            off-label="Off"
            :disabled="isDisabled"
            :invalid="isInvalid"
            class="w-32"
        />
    </DemoGroup>

    <DemoGroup title="Sizes">
        <div class="text-center p-1">
            <div class="font-bold">
                Small
            </div>
            <ToggleButton
                v-model="basicVal"
                on-label="On"
                off-label="Off"
                size="small"
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="w-32"
            />
        </div>

        <Divider layout="vertical" />

        <div class="text-center p-1">
            <div class="font-bold">
                Normal
            </div>

            <ToggleButton
                v-model="basicVal"
                on-label="On"
                off-label="Off"
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="w-32"
            />
        </div>

        <Divider layout="vertical" />

        <div class="text-center p-1">
            <div class="font-bold">
                Large
            </div>

            <ToggleButton
                v-model="basicVal"
                on-label="On"
                off-label="Off"
                size="large"
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="w-32"
            />
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const basicVal = ref(false);
    const isDisabled = ref(false);
    const isInvalid = ref(false);
</script>
