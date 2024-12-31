<template>
    <div class="settings-container">
        <i class="material-icons">settings</i>

        <div
            class="grow flex gap-6"
            :class="alignment"
        >
            <slot />
        </div>

        <div v-if="showEndSection" class="flex items-center gap-4">
            <div v-if="isDisabled !== null" class="flex items-center gap-2">
                <Checkbox v-model="isDisabled" input-id="show-disabled" binary />
                <label for="is-disabled">Disabled</label>
            </div>

            <div v-if="isInvalid !== null" class="flex items-center gap-2">
                <Checkbox v-model="isInvalid" input-id="is-invalid" binary />
                <label for="is-invalid">Invalid</label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, defineProps } from 'vue';

    const isDisabled = defineModel('disabled', { type: Boolean, required: false, default: null });
    const isInvalid = defineModel('invalid', { type: Boolean, required: false, default: null });

    const props = defineProps({
        alignY: {
            type: String as () => 'top' | 'center' | 'bottom',
            required: false,
            default: 'center'
        }
    });

    const showEndSection = computed(() => isDisabled.value !== null || isInvalid.value !== null);

    const alignment = computed(() => {
        switch(props.alignY) {
            case 'top':
                return 'items-start';
            case 'center':
                return 'items-center';
            case 'bottom':
                return 'items-end';
            default:
                return 'items-center';
        }
    });

</script>

<style scoped>
    .settings-container {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        gap: 2rem;
        background-color: var(--p-surface-300);
        border: 1px solid var(--p-surface-500);
        border-radius: var(--p-border-radius-sm);

        position: sticky;
        top: 6px;
        z-index: 9;
    }
</style>