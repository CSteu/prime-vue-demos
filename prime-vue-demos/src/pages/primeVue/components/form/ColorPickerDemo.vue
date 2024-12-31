
<template>
    <DemoSettings
        v-model:disabled="isDisabled"
        v-model:invalid="isInvalid"
    />

    <DemoGroup>
        <div class="flex items-center justify-center gap-8">
            <div class="flex items-center gap-2">
                <div class="text-lg">
                    Basic:
                </div>
                <ColorPicker
                    v-model="color"
                    :disabled="isDisabled"
                    :invalid="isInvalid"
                />
            </div>

            <div class="flex items-center gap-2">
                <div class="text-lg">
                    Inline:
                </div>
                <ColorPicker
                    v-model="color"
                    inline
                    :disabled="isDisabled"
                    :invalid="isInvalid"
                />
            </div>
        </div>
    </DemoGroup>

    <DemoGroup title="Formats">
        <div class="flex flex-col items-center w-56">
            <label
                for="cp-hex"
                class="font-bold block mb-2"
            >
                HEX - {{ colorHEX }}
            </label>
            <ColorPicker
                v-model="colorHEX"
                input-id="cp-hex"
                format="hex"
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="mb-6"
            />
        </div>

        <div class="flex flex-col items-center w-56">
            <label
                for="cp-rgb"
                class="font-bold block mb-2"
            >
                RGB - {{ JSON.stringify(colorRGB) }}
            </label>

            <ColorPicker
                v-model="colorRGB"
                input-id="cp-rgb"
                format="rgb"
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="mb-6"
            />
        </div>

        <div class="flex flex-col items-center w-56">
            <label
                for="cp-hsb"
                class="font-bold block mb-2"
            >
                HSB - {{ JSON.stringify(colorHSB) }}
            </label>

            <ColorPicker
                v-model="colorHSB"
                input-id="cp-hsb"
                format="hsb"
                :disabled="isDisabled"
                :invalid="isInvalid"
                class="mb-6"
            />
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const color = ref();

    const colorHEX = ref('6466f1');
    const colorRGB = ref({ r: 100, g: 102, b: 241 });
    const colorHSB = ref({ h: 239, s: 59, b: 95 });

    const isDisabled = ref(false);
    const isInvalid = ref(false);
</script>
