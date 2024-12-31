<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
        align-y="center"
    >
        <div class="flex items-center gap-2">
            <label for="rows-input" class="w-12">Rows:</label>
            <InputNumber
                v-model="rows"
                input-id="rows-input"
                show-buttons
                :min="0"
                fluid
                class="max-w-32"
            />
        </div>

        <div class="flex items-center gap-2">
            <label for="cols-input" class="w-12">Cols:</label>
            <InputNumber
                v-model="cols"
                input-id="cols-input"
                show-buttons
                :min="0"
                fluid
                class="max-w-32"
            />
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isAutoResize" input-id="is-autoresize" binary />
            <label for="is-autoresize">Auto Resize</label>
        </div>
    </DemoSettings>

    <DemoGroup title="Basic">
        <Textarea
            v-model="value"
            :auto-resize="isAutoResize"
            :rows="rows"
            :cols="cols"
            :invalid="isInvalid"
            :disabled="isDisabled"
        />
    </DemoGroup>

    <DemoGroup title="Float Labels">
        <FloatLabel>
            <Textarea
                id="over_label"
                v-model="floatOverVal"
                :auto-resize="isAutoResize"
                :rows="rows"
                :cols="cols"
                :invalid="isInvalid"
                :disabled="isDisabled"
                style="resize: none"
            />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <Textarea
                id="over_label"
                v-model="floatInVal"
                :auto-resize="isAutoResize"
                :rows="rows"
                :cols="cols"
                :invalid="isInvalid"
                :disabled="isDisabled"
                style="resize: none"
            />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <Textarea
                id="over_label"
                v-model="floatOnVal"
                :auto-resize="isAutoResize"
                :rows="rows"
                :cols="cols"
                :invalid="isInvalid"
                :disabled="isDisabled"
                style="resize: none"
            />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </DemoGroup>

    <DemoGroup title="Sizes">
        <Textarea
            v-model="smallVal"
            size="small"
            placeholder="Small"
            :auto-resize="isAutoResize"
            :rows="rows"
            :cols="cols"
            :invalid="isInvalid"
            :disabled="isDisabled"
        />

        <Textarea
            v-model="normalVal"
            placeholder="Normal"
            :auto-resize="isAutoResize"
            :rows="rows"
            :cols="cols"
            :invalid="isInvalid"
            :disabled="isDisabled"
        />

        <Textarea
            v-model="largeVal"
            size="large"
            placeholder="Large"
            :auto-resize="isAutoResize"
            :rows="rows"
            :cols="cols"
            :invalid="isInvalid"
            :disabled="isDisabled"
        />
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const value = ref('');

    const rows = ref(3);
    const cols = ref(30);

    const isAutoResize = ref(true);
    const isInvalid = ref(false);
    const isDisabled = ref(false);

    const floatOverVal = ref('');
    const floatInVal = ref('');
    const floatOnVal = ref('');

    const smallVal = ref('');
    const normalVal = ref('');
    const largeVal = ref('');
</script>