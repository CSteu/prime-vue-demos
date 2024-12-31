<template>
    <div :class="widthClass">
        <div
            v-if="props.title"
            class="text-xl font-bold mb-2 text-center"
        >
            {{ props.title }}
        </div>

        <div v-if="$slots.settings" class="flex gap-6">
            <slot name="settings" />
        </div>

        <div
            :class="containerClass"
            class="flex gap-6 text-left"
        >
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps({
        title: { type: String, required: false, default: ''},
        column: { type: Boolean, required: false, default: false },
        fullWidth: { type: Boolean, required: false, default: true },
        alignX: {
            type: String as () => 'left' | 'center' | 'right',
            required: false,
            default: 'center'
        },
        alignY: {
            type: String as () => 'top' | 'center' | 'bottom',
            required: false,
            default: 'center'
        }
    });

    const widthClass = computed(() => props.fullWidth ? 'w-full' : 'justify-around flex-grow-1');

    const containerClass = computed(() => {
        const classes = [];

        if (props.column) {
            classes.push('flex-col');

            switch(props.alignX) {
                case 'left':
                    classes.push('items-start');
                    break;
                case 'center':
                    classes.push('items-center');
                    break;
                case 'right':
                    classes.push('items-end');
                    break;
            }

            switch(props.alignY) {
                case 'top':
                    classes.push('justify-start');
                    break;
                case 'center':
                    classes.push('justify-center');
                    break;
                case 'bottom':
                    classes.push('justify-end');
                    break;
            }
        } else {
            classes.push('flex-row flex-wrap');

            switch (props.alignX) {
                case 'left':
                    classes.push('justify-start');
                    break;
                case 'center':
                    classes.push('justify-center');
                    break;
                case 'right':
                    classes.push('justify-end');
                    break;
            }

            switch (props.alignY) {
                case 'top':
                    classes.push('items-start');
                    break;
                case 'center':
                    classes.push('items-center');
                    break;
                case 'bottom':
                    classes.push('items-end')
                    break;
            }
        }

        return classes.join(' ');
    });
</script>

