
<template>
    <DemoGroup title="Basic">
        <FloatLabel>
            <InputText id="float-label-basic" v-model="basicVal" />
            <label for="username">Basic</label>
        </FloatLabel>
    </DemoGroup>

    <DemoGroup title="Variants">
        <div class="flex flex-col gap-1">
            <FloatLabel variant="in">
                <InputText id="float-label-in" v-model="variantInVal" autocomplete="off" />
                <label for="float-label-in">In Label</label>
            </FloatLabel>
        </div>

        <div class="flex flex-col gap-1">
            <FloatLabel variant="on">
                <InputText id="float-label-on" v-model="variantOnVal" autocomplete="off" />
                <label for="float-label-on">On Label</label>
            </FloatLabel>
        </div>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';

    const basicVal = ref(null);

    const variantInVal = ref(null);
    const variantOnVal = ref(null);
</script>
