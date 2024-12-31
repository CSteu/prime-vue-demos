<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    >
        <div class="flex items-center gap-2">
            <Checkbox v-model="allowMultiple" input-id="allow-multiple" binary />
            <label for="allow-multiple">Multiple</label>
        </div>

        <div class="flex items-center gap-2">
            <div class="font-bold">
                Disable:
            </div>

            <div v-for="(option, index) in options" :key="option.name" class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                    <Checkbox v-model="option.isDisabled" :input-id="`disable-${index}`" binary />
                    <label :for="`disable-${index}`">{{ option.name }}</label>
                </div>
            </div>
        </div>
    </DemoSettings>

    <DemoGroup>
        <SelectButton
            v-model="val"
            :options="options"
            :disabled="isDisabled"
            :multiple="allowMultiple"
            :invalid="isInvalid"
            option-label="name"
            option-value="value"
            option-disabled="isDisabled"
        />
    </DemoGroup>

    <DemoGroup title="Sizes">
        <div class="text-center p-1">
            <div class="font-bold">
                Small
            </div>
            <SelectButton
                v-model="smallVal"
                size="small"
                :options="options"
                :disabled="isDisabled"
                :multiple="allowMultiple"
                :invalid="isInvalid"
                option-label="name"
                option-value="value"
            />
        </div>

        <Divider layout="vertical" />

        <div class="text-center p-1">
            <div class="font-bold">
                Normal
            </div>

            <SelectButton
                v-model="normalVal"
                :options="options"
                :disabled="isDisabled"
                :multiple="allowMultiple"
                :invalid="isInvalid"
                option-label="name"
                option-value="value"
            />
        </div>

        <Divider layout="vertical" />

        <div class="text-center p-1">
            <div class="font-bold">
                Large
            </div>

            <SelectButton
                v-model="largeVal"
                size="large"
                :options="options"
                :disabled="isDisabled"
                :multiple="allowMultiple"
                :invalid="isInvalid"
                option-label="name"
                option-value="value"
            />
        </div>
    </DemoGroup>
</template>

<script setup>
    import SelectButton from 'primevue/selectbutton';
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const val = ref('Option 1');
    const smallVal = ref('Option 1');
    const normalVal = ref('Option 2');
    const largeVal = ref('Option 3');

    const allowMultiple = ref(false);
    const isInvalid = ref(false);
    const isDisabled = ref(false);

    const options = ref([
        { name: 'Option 1', value: 1, isDisabled: false },
        { name: 'Option 2', value: 2, isDisabled: false },
        { name: 'Option 3', value: 3, isDisabled: false },
    ]);
</script>