
<template>
    <DemoSettings
        v-model:disabled="isDisabled"
        v-model:invalid="isInvalid"
    >
        <div class="flex items-center gap-2 max-w-40">
            <label for="num-stars" class="w-24">Stars:</label>
            <InputNumber
                v-model="numStars"
                input-id="num-stars"
                show-buttons
                :min="0"
                fluid
            />
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isReadOnly" input-id="is-readonly" binary />
            <label for="is-readonly">ReadOnly</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <div>
            <label for="basic" class="font-bold">Rating</label>
            <Rating
                id="basic"
                v-model="value"
                :stars="numStars"
                :readonly="isReadOnly"
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import Rating from 'primevue/rating';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const value = ref(null);

    const numStars = ref(10);
    const isReadOnly = ref(false);
    const isDisabled = ref(false);
    const isInvalid = ref(false);
</script>
