<template>
    <!-- Eventually, when we get to full SPA, we will put this on the main page -->
    <Toast group="toastDemo" :position="selectedPosition" />

    <DemoSettings>
        <div class="flex items-center gap-1">
            <label for="severity">Severity: </label>
            <Select
                v-model="selectedSeverity"
                :options="severityOptions"
                option-label="label"
                option-value="value"
                placeholder="Default"
                class="w-44"
            />
        </div>

        <div class="flex items-center gap-1">
            <label for="position">Position: </label>
            <Select
                v-model="selectedPosition"
                input-id="position"
                :options="positionOptions"
                option-label="label"
                option-value="value"
                class="w-44"
            />
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isSticky" input-id="is-sticky" binary />
            <label for="is-sticky">Sticky</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <Button
            label="Show Toast"
            @click="showToast()"
        />
    </DemoGroup>
</template>

<script lang="ts" setup>
    import { useToast } from 'primevue/usetoast';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';
    import { ref } from 'vue';

    const toast = useToast();

    enum Severity {
        DEFAULT = null,
        SUCCESS = 'success',
        INFO = 'info',
        WARN = 'warn',
        ERROR = 'error',
        SECONDARY = 'secondary',
        CONTRAST = 'contrast',
    }

    enum Position {
        TOP_LEFT = 'top-left',
        TOP_CENTER = 'top-center',
        TOP_RIGHT = 'top-right',
        CENTER = 'center',
        BOTTOM_LEFT = 'bottom-left',
        BOTTOM_CENTER = 'bottom-center',
        BOTTOM_RIGHT = 'bottom-right',
    }

    const selectedSeverity = ref(null);
    const severityOptions = [
        { label: 'Default', value: Severity.DEFAULT },
        { label: 'Success', value: Severity.SUCCESS },
        { label: 'Info', value: Severity.INFO },
        { label: 'Warn', value: Severity.WARN },
        { label: 'Error', value: Severity.ERROR },
        { label: 'Secondary', value: Severity.SECONDARY },
        { label: 'Contrast', value: Severity.CONTRAST },
    ];

    const selectedPosition = ref<Position>(Position.TOP_RIGHT);
    const positionOptions = [
        { label: 'Top Left', value: Position.TOP_LEFT },
        { label: 'Top Center', value: Position.TOP_CENTER },
        { label: 'Top Right', value: Position.TOP_RIGHT },
        { label: 'Center', value: Position.CENTER },
        { label: 'Bottom Left', value: Position.BOTTOM_LEFT },
        { label: 'Bottom Center', value: Position.BOTTOM_CENTER },
        { label: 'Bottom Right', value: Position.BOTTOM_RIGHT },
    ];

    const isSticky = ref(false);

    const showToast = () => {
        toast.add({
            severity: selectedSeverity.value ? selectedSeverity.value : undefined,
            summary: 'Summary Message',
            detail: 'Message Content',
            group: 'toastDemo',
            life: isSticky.value ? undefined : 3000
        });
    };
</script>


