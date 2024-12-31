<template>
    <DemoSettings
        v-model:invalid="isInvalid"
    >
        <div class="flex items-center gap-2">
            <Checkbox v-model="isReadonly" input-id="is-readonly" binary />
            <label for="is-readonly">ReadOnly</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <Editor
            v-model="value"
            :readonly="isReadonly"
            :invalid="isInvalid"
            editor-style="height: 320px"
        />
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const value = ref('');
    const isInvalid = ref(false);
    const isReadonly = ref(false);
</script>