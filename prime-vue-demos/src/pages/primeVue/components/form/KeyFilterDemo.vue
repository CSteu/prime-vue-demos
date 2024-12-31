<template>
    <DemoGroup title="Presets">
        <div class="flex flex-wrap gap-4 mb-6">
            <div class="flex-auto">
                <label for="integer" class="font-bold block mb-2"> Integer </label>
                <InputText
                    id="integer"
                    v-model="integer"
                    v-keyfilter.int
                    fluid
                />
            </div>
            <div class="flex-auto">
                <label for="number" class="font-bold block mb-2"> Number </label>
                <InputText
                    id="number"
                    v-model="number"
                    v-keyfilter.num
                    fluid
                />
            </div>
            <div class="flex-auto">
                <label for="money" class="font-bold block mb-2"> Money </label>
                <InputText
                    id="money"
                    v-model="money"
                    v-keyfilter.money
                    fluid
                />
            </div>
        </div>

        <div class="flex flex-wrap gap-4">
            <div class="flex-auto">
                <label for="hex" class="font-bold block mb-2"> Hex </label>
                <InputText
                    id="hex"
                    v-model="hex"
                    v-keyfilter.hex
                    fluid
                />
            </div>
            <div class="flex-auto">
                <label for="alphabetic" class="font-bold block mb-2"> Alphabetic </label>
                <InputText
                    id="alphabetic"
                    v-model="alphabetic"
                    v-keyfilter.alpha
                    fluid
                />
            </div>
            <div class="flex-auto">
                <label for="alphanumeric" class="font-bold block mb-2"> Alphanumeric </label>
                <InputText
                    id="alphanumeric"
                    v-model="alphanumeric"
                    v-keyfilter.alphanum
                    fluid
                />
            </div>
        </div>
    </DemoGroup>

    <DemoGroup title="Regex (Single Keypress)">
        <div class="flex-auto">
            <label for="spacekey" class="font-bold block mb-2"> Block Space </label>
            <InputText
                id="spacekey"
                v-model="spacekey"
                v-keyfilter="/[^s]/"
                fluid
            />
        </div>
        <div class="flex-auto">
            <label for="chars" class="font-bold block mb-2"> Block &lt; &gt; * ! </label>
            <InputText
                id="chars"
                v-model="chars"
                v-keyfilter="/^[^<>*!]+$/"
                fluid
            />
        </div>
    </DemoGroup>

    <DemoGroup title="Regex (Whole Word)">
        <div>
            <label for="numkeys" class="font-bold block mb-2"> Block Numeric (allow "+" only once at start) </label>
            <InputText id="numkeys" v-model="text" v-keyfilter="{ pattern: /^[+]?(d{1,12})?$/, validateOnly: true }" />
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';

    // Presets
    const integer = ref(null);
    const number = ref(null);
    const money = ref(null);
    const hex = ref(null);
    const alphabetic = ref(null);
    const alphanumeric = ref(null);

    // Regex (single keypress)
    const spacekey = ref(null);
    const chars = ref(null);

    // Regex (whole word)
    const text = ref(null);

</script>
